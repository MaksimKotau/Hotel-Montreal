function showMainPageView(){
    currentUser();
    $('#mainForm').hide();
    $('#carouselHotelControls').show();
    $('#hotelReservation').hide();
    $('#pageAdmin').hide();
    $('#containerForCards').show();
}
function showMainFormView(){
    $('#mainForm').show();
    $('#carouselHotelControls').hide();
    $('#hotelReservation').hide();
    $('#pageAdmin').hide();
    $('#containerForCards').hide();
}
function showReservationPage(){
    $('#mainForm').hide();
    $('#carouselHotelControls').hide();
    $('#hotelReservation').show();
    $('#pageAdmin').hide();
    $('#containerForCards').hide();
}
function showAdminPage(){
    $('#mainForm').hide();
    $('#carouselHotelControls').hide();
    $('#hotelReservation').hide();
    $('#pageAdmin').show();
    $('#containerForCards').hide();
}