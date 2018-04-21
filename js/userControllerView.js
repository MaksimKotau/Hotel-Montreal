function newUser(reponse) {
    if (reponse.error == "") {
	$('#formRegistration input').val("");
	currentUser();
	showMainPageView();
    } else {
	$('#divRegistration .panel-footer').html(reponse.error);
    }
}

function showPanel(reponse) {
    var res = "";
    if (reponse.fname == "") {
	res+="<li class=\"nav-item ml-5 lead\"><a class=\"nav-link\" onclick=\"showMainFormView()\" href=\"#\">Connection</a></li>";
    } else {
	res += "<li class=\"nav-item ml-5 lead\"><a class=\"nav-link\" href=\"#\">Hello, "+reponse.fname+"</a></li>";
	res += "<li class=\"nav-item ml-5 lead\"><a class=\"nav-link\" onclick=\"userLogout()\" href=\"#\">Logout</a></li>";
    }

    $('#navbarSupportedContent ul').html(res);
}

function faireLogout() {
    showMainPageView();
    currentUser();
}

function checkUserLogin(reponse) {
    if (reponse.error == "") {
	$('#formLogin input').val("");
	showMainPageView();
	currentUser();
    } else {
	$('#loginErr').html("<p class=\"text-danger\">" + reponse.error + "</p>");
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