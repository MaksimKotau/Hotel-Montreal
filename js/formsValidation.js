function validateFormNewUser() {
    var reponse = "";
    var testFName = /^[A-Za-z0-9 -,]{1,50}$/;
    if (!testFName.test($('#fname').val().trim())) {
	reponse += "<p class=\"text-danger\"><small>First name is not valid</small></p>";
    }
    var testLName = /^[A-Za-z0-9 -,]{1,50}$/;
    if (!testLName.test($('#lname').val().trim())) {
	reponse += "<p class=\"text-danger\"><small>Last name is not valid</small></p>";
    }
    var testPassword=/^[\x00-\x7F]{6,12}$/;
    if ($('#passwordRegistration').val().trim().length == 0
	    || $('#passwordRegistration1').val().trim().length == 0) {
	reponse += "<p class=\"text-danger\"><small>Passwords can not be empty</small></p>";
    }else if (!testPassword.test($('#passwordRegistration').val().trim()) || !testPassword.test($('#passwordRegistration1').val().trim())){
	reponse += "<p class=\"text-danger\"><small>Password must contain 6-12 characters</small></p>"; 
    }else if ($('#passwordRegistration').val() != $('#passwordRegistration1').val()) {
	reponse += "<p class=\"text-danger\"><small>The passwords you entered do not match</small></p>";
    }
    if (reponse == "") {
	$('#registrErr').html("");
	return true;
    } else {
	$('#registrErr').html(reponse);
	return false;
    }
}
