// show reservation panel
function showPanelReservation(reponse){
    var hotels=reponse.listeHotels;
    var res="";
    res += "<form id='reservationForm' action='javascript: makeReservation()' method='post'>";
    res += "<table class=\"table\">";
    res += "<thead>";
    res += "<tr>";
    res += "<th></th>";
    res += "<th>Hotel name</th>";
    res += "<th>Rating</th>";
    res += "<th class=\"text-center\">Description</th>";
    res += "<th>Price</th>";
    res += "</tr>";
    res += "</thead>";
    res += "<tbody>";
    for (var i=0; i<hotels.length; i++){
        res += "<tr>";
        res += "<td><input type=\"radio\" class=\"form-check-input\" name=\"hotel\" value='"+hotels[i].idh+"' required></td>";
        res += "<td><p>"+hotels[i].hotel_name+"</p><img src='"+hotels[i].image+"' alt='Hotel photo' class=\"img-thumbnail\"></td>";
        res += "<td><p class='text-center'>"+hotels[i].rating+"</p></td>";
        res += "<td><p>"+hotels[i].descr+"</p></td>";
        res += "<td><p class='text-center'>"+hotels[i].price+"</p></td>";
        res += "</tr>";
    }
    res +="</tbody>";
    res += "</table>";
    res += "<div class=\"form-group\">"
    res += "<label for=\"dateFrom\">From date:</label> <input type=\"date\" class=\"form-control\" id=\"dateFrom\" name=\"dateFrom\" required>";
    res += "</div>";
    res += "<div class=\"form-group\">"
    res += "<label for=\"dateTo\">To date:</label> <input type=\"date\" class=\"form-control\" id=\"dateTo\" name=\"dateTo\" required>";
    res += "</div>";
    res += "<button type=\"submit\" class=\"btn btn-primary mb-4\">Reservation</button>";
    res += "</form>";
    $('#hotelReservation').html(res);
}

//reserfation finished
function showReservationEnd(reponse){
    alert ("Thank you!");
    showMainPageView();
}



var hotelVue = function(reponse) {
    var action = reponse.action;

    switch (action) {
    case "showFormReservation":
	showPanelReservation(reponse);
	break;
    case "reservation" :
	showReservationEnd(reponse);
	break;
    }
};