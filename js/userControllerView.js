//show view for new user
function newUser(reponse) {
    if (reponse.error == "") {
	$('#formRegistration input').val("");
	currentUser();
	showReservationPage();
	showReservationForm();
    } else {
	$('#divRegistration .panel-footer').html(reponse.error);
    }
}


//Update information in navbar top
function showPanel(reponse) {
    var res = "";
    if (reponse.fname == "") {
	res += "<li class=\"nav-item ml-5 lead\"><a class=\"nav-link\" onclick=\"showMainFormView()\" href=\"#\">Connection</a></li>";
    } else {
	res += "<li class=\"nav-item ml-5 lead\"><a class=\"nav-link\" href=\"#\">Hello, "
		+ reponse.fname + "</a></li>";
	if (reponse.role == "USER"){
	    res += "<li class=\"nav-item ml-5 lead\"><a class=\"nav-link\" href=\"#\" onclick=\"showReservationPage(); showReservationForm()\">Reservation</a></li>";
	}else {
	    showAdminPage();
	    showAllReservations();
	}
	res += "<li class=\"nav-item ml-5 lead\"><a class=\"nav-link\" onclick=\"userLogout()\" href=\"#\">Logout</a></li>";
    }

    $('#navbarSupportedContent ul').html(res);
}

//show view after logout
function faireLogout() {
    showMainPageView();
    currentUser();
}

//update page view after user/admin login
function checkUserLogin(reponse) {
    if (reponse.error == "") {
	if (reponse.role == "ADMIN") {
	    showAllReservations();
	    showAdminPage();
	    currentUser();
	} else {
	    $('#formLogin input').val("");
	    showReservationPage();
	    showReservationForm();
	    currentUser();
	}
    } else {
	$('#loginErr').html(
		"<p class=\"text-danger\">" + reponse.error + "</p>");
    }
}

var userVue = function(reponse) {
    var action = reponse.action;

    switch (action) {
    case "userfromsession":
	showPanel(reponse);
	break;
    case "login":
	checkUserLogin(reponse);
	break;
    case "logout":
	faireLogout();
	break;
    case "registration":
	newUser(reponse);
	break;

    }
};