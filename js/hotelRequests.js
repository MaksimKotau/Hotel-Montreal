function showReservationForm() {
    var formHotel = new FormData();
    formHotel.append('action', 'showall');
    $.ajax({
	type : 'POST',
	url : 'php/hotelController.php',
	data : formHotel,
	contentType : false,
	processData : false,
	dataType : 'json', 
	success : function(reponse) {
	    hotelVue(reponse);
	},
	fail : function(err) {
	}
    });
}

function makeReservation() {
	var formHotel = new FormData(document.getElementById('reservationForm'));
	formHotel.append('action', 'reservation');
	$.ajax({
	    type : 'POST',
	    url : 'php/hotelController.php',
	    data : formHotel,
	    dataType : 'json',
	    // async : false,
	    // cache : false,
	    contentType : false,
	    processData : false,
	    success : function(reponse) {
		
		hotelVue(reponse);
	    },
	    fail : function(err) {

	    }
	});
}