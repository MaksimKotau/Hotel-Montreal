function currentUser() {
    var formUser = new FormData();
    formUser.append('action', 'getuser');
    $.ajax({
	type : 'POST',
	url : 'php/userController.php',
	data : formUser,
	contentType : false,
	processData : false,
	dataType : 'json',
	success : function(reponse) {
	    userVue(reponse);
	},
	fail : function(err) {
	}
    });
}
function userLogin() {
	var formUser = new FormData(document.getElementById('formLogin'));
	formUser.append('action', 'connection');
	$.ajax({
	    type : 'POST',
	    url : 'php/userController.php',
	    data : formUser,
	    dataType : 'json',
	    // async : false,
	    // cache : false,
	    contentType : false,
	    processData : false,
	    success : function(reponse) {
		userVue(reponse);
	    },
	    fail : function(err) {

	    }
	});
}

function userRegistration() {
    var formUser = new FormData(document.getElementById('formRegistration'));
    formUser.append('action', 'registration');
    $.ajax({
	type : 'POST',
	url : 'php/userController.php',
	data : formUser,
	dataType : 'json',
	// async : false,
	// cache : false,
	contentType : false,
	processData : false,
	success : function(reponse) {
	    userVue(reponse);
	    return true;
	},
	fail : function(err) {
	    alert("error in ajax user registration:" + err);
	    return false;
	}
    });
}

function userLogout() {
    var formUser = new FormData();
    formUser.append('action', 'logout');
    $.ajax({
	type : 'POST',
	url : 'php/userController.php',
	data : formUser,
	contentType : false,
	processData : false,
	dataType : 'json',
	success : function(reponse) {
	    userVue(reponse);
	},
	fail : function(err) {
	}
    });
}