<?php
    session_start();
    $tabRes=array();
    require_once("../includes/modele.inc.php");
    function getUserFromSession(){
    	global $tabRes;
    	$tabRes['action']="userfromsession";
    	if (isset($_SESSION['fname'])){
    		$tabRes['fname'] = $_SESSION['fname'];
    	}else {
    		$tabRes['fname']="";
    	}
    }
    function userRegistration(){
    	global $tabRes;
    	$tabRes['action']="registration";
    	$fname = $_POST['fname'];
    	$lname = $_POST['lname'];
    	$email = $_POST['email'];
    	$password1 = $_POST['password1'];
     	$password2 = $_POST['password2'];
//     	$fname = "Maksim";
//     	$lname = "Kotau";
//     	$email = "maxkortov@gmail.com";
//     	$password1 = "123456";
    	$password1 = md5($password1);
    	try{
    		$requete = "SELECT * FROM users WHERE email=? LIMIT 1";
    		$unModel= new generalModele($requete, array($email));
    		$stmt=$unModel->executer();
    		if(!$ligne=$stmt->fetch(PDO::FETCH_OBJ)){
    			$requete = "INSERT INTO `users`(`fname`, `lname`, `email`, `password`, `role`) VALUES (?,?,?,?,?)";
    			$unModel=new generalModele($requete, array($fname, $lname, $email, $password1,'USER'));
    			$idu = $unModel->executerAndGetId();
    			$_SESSION['userid'] = $idu;
    			$_SESSION['fname'] = $fname;
    			$tabRes['error']="";
    		}else{
    			$tabRes['error']="User with this e-mail already exists";
    		}
    	}catch (Exception $e){
    		$tabRes['error']=$e;
    	}finally{		
    		unset($unModele);
    	}
    }
    function login(){
    	global $tabRes;
    	$tabRes['action']="login";
    	$username = $_POST['email'];
    	$password = $_POST['password'];
    	$password = md5($password);
    	try{
    		$query = "SELECT * FROM users WHERE email=? AND password=?";
    		$unModele=new generalModele($query,array($username,$password));
    		$stmt=$unModele->executer();
    		$ligne=$stmt->fetch(PDO::FETCH_OBJ);
    		if ($stmt->rowCount() == 1) {
    			$_SESSION['userid'] = $ligne->idu;
    			$_SESSION['fname'] = $ligne->fname;
    			$tabRes['userid'] = $_SESSION['userid'];
    			$tabRes['fname'] = $_SESSION['fname'];
    			$tabRes['error']= "";
    		}else {
    			$tabRes['error']= "Incorrect login / password";
    		}
    	}catch (Exception $e){
    		$tabRes['error']=$e;
    	}finally{		
    		unset($unModele);
    	}
    }
    function userLogout(){
    	global $tabRes;
    	unset($_SESSION['userid']);
    	unset($_SESSION['fname']);
    	$_SESSION = array();
    	session_destroy();
    	$tabRes['action']="logout";
    }
    $action=$_POST['action'];
    	switch($action){
    		case "registration" :
    		    userRegistration();
    		break;
    		
    		case "connection" :
    			login();
    		break;
    		
    		case "logout" :
    			userLogout();
    		break;
    		
    		case "getuser" :
    			getUserFromSession();
    		break;
    		
    		}
        echo json_encode($tabRes);
?>
