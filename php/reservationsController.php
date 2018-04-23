<?php
session_start();
$tabRes=array();
require_once("../includes/modele.inc.php");

//get two type reservations for admin page
function showAllReservations(){
    global $tabRes;
    $tabRes['action']="showreservations";
    try{
        $requete="SELECT idr, date_debut, date_fin, confirmed,email, hotels.hotel_name FROM reservations, hotels, users WHERE reservations.idu=users.idu AND reservations.idh=hotels.idh AND confirmed=0";
        $unModele=new generalModele($requete,array());
        $stmt=$unModele->executer();
        $tabRes['listeNotConfirmed']=array();
        while($ligne=$stmt->fetch(PDO::FETCH_OBJ)){
            $tabRes['listeNotConfirmed'][]=$ligne;
        }
        
        $requete="SELECT idr, date_debut, date_fin, confirmed,email, hotels.hotel_name FROM reservations, hotels, users WHERE reservations.idu=users.idu AND reservations.idh=hotels.idh AND confirmed=1";
        $unModele=new generalModele($requete,array());
        $stmt=$unModele->executer();
        $tabRes['listeConfirmed']=array();
        while($ligne=$stmt->fetch(PDO::FETCH_OBJ)){
            $tabRes['listeConfirmed'][]=$ligne;
        }
    
        $tabRes['msg']="";
    }catch(Exception $e){
        $tabRes['msg']=$e;
    }finally{
        unset($unModele);
    }
}

//make reservation confirmed
function makeConfirmation(){
    global $tabRes;
    $tabRes['action']="confirmreserv";
    $idr=$_POST['idr'];
    try {
        $requete="UPDATE reservations SET confirmed=1 WHERE idr=?";    
        $unModele=new generalModele($requete,array($idr));
        $stmt=$unModele->executer();
        $tabRes['msg']="";
    }catch(Exception $e){
        $tabRes['msg']=$e;
    }finally{
        unset($unModele);
    }
}

$action=$_POST['action'];
switch($action){
    case "showreservations" :
        showAllReservations();
        break;
    case "makeconfirm" :
        makeConfirmation();
        break;
        
}
echo json_encode($tabRes);
?>