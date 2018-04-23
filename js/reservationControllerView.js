//show form fo hotel reservation\

function showAllReservationsVue(reponse){
    var conf=reponse.listeConfirmed;
    resConf="";
    resConf += "<table class=\"table\">";
    resConf += "<thead>";
    resConf += "<tr>";
    resConf += "<th>id</th>";
    resConf += "<th>Hotel Name</th>";
    resConf += "<th>From date</th>";
    resConf += "<th>To date</th>";
    resConf += "<th>User</th>";
    resConf += "<th>Confirmed?</th>";
    resConf += "</tr>"
    resConf += "</thead>";
    resConf += "<tbody>";
    for (var i = 0; i < conf.length; i++){
	resConf += "<tr>";
	resConf += "<td>"+conf[i].idr+"</td>";
	resConf += "<td>"+conf[i].hotel_name+"</td>";
	resConf += "<td>"+conf[i].date_debut+"</td>";
	resConf += "<td>"+conf[i].date_fin+"</td>";
	resConf += "<td>"+conf[i].email+"</td>";
	resConf += "<td>Confirmed!</td>";
	resConf += "</tr>";
    }
    resConf += "</tbody>";
    resConf += "</table>";
    $('#tabConf').html(resConf);
    
    var notconf=reponse.listeNotConfirmed;
    resNotConf="";
    resNotConf += "<table class=\"table\">";
    resNotConf += "<thead>";
    resNotConf += "<tr>";
    resNotConf += "<th>id</th>";
    resNotConf += "<th>Hotel Name</th>";
    resNotConf += "<th>From date</th>";
    resNotConf += "<th>To date</th>";
    resNotConf += "<th>User</th>";
    resNotConf += "<th>Confirmed?</th>";
    resNotConf += "</tr>"
    resNotConf += "</thead>";
    resNotConf += "<tbody>";
    for (var i = 0; i < notconf.length; i++){
	resNotConf += "<tr>";
	resNotConf += "<td>"+notconf[i].idr+"</td>";
	resNotConf += "<td>"+notconf[i].hotel_name+"</td>";
	resNotConf += "<td>"+notconf[i].date_debut+"</td>";
	resNotConf += "<td>"+notconf[i].date_fin+"</td>";
	resNotConf += "<td>"+notconf[i].email+"</td>";
	resNotConf += "<td><button type=\"button\" onclick=\"confirmReservation("+notconf[i].idr+")\" class=\"btn btn-primary\">Confirm</button></td>";
	resNotConf += "</tr>";
    }
    resNotConf += "</tbody>";
    resNotConf += "</table>";
    $('#tabNotConf').html(resNotConf);
    
}
//show reservations for admin
function confirmReservationView(reponse){
    if (reponse.msg == ""){
	showAllReservations();
    }
}

var reservationVue = function(reponse) {
    var action = reponse.action;

    switch (action) {
    case "showreservations":
	showAllReservationsVue(reponse);
	break;
    case "confirmreserv" :
	confirmReservationView(reponse);
	break;

    }
};