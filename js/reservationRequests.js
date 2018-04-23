function showAllReservations() {
    var formReserv = new FormData();
    formReserv.append('action', 'showreservations');
    $.ajax({
	type : 'POST',
	url : 'php/reservationsController.php',
	data : formReserv,
	contentType : false,
	processData : false,
	dataType : 'json',
	success : function(reponse) {
	    reservationVue(reponse);
	},
	fail : function(err) {
	}
    });
}

function confirmReservation(idr) {
    var formReserv = new FormData();
    formReserv.append('action', 'makeconfirm');
    formReserv.append('idr', idr);
    $.ajax({
	type : 'POST',
	url : 'php/reservationsController.php',
	data : formReserv,
	contentType : false,
	processData : false,
	dataType : 'json',
	success : function(reponse) {
	    reservationVue(reponse);
	},
	fail : function(err) {
	}
    });
}