<?php
    session_start();
    $tabRes=array();
    require_once("../includes/modele.inc.php");
    
    //get all hotels for reservation
    function getAllHotels(){
        global $tabRes;
        $tabRes['action']="showFormReservation";
        $requete="SELECT * FROM hotels";
        try{
            $unModele=new generalModele($requete,array());
            $stmt=$unModele->executer();
            $tabRes['listeHotels']=array();
            while($ligne=$stmt->fetch(PDO::FETCH_OBJ)){
                $tabRes['listeHotels'][]=$ligne;
            }
            $tabRes['msg']="";
        }catch(Exception $e){
            $tabRes['msg']=$e;
        }finally{
            unset($unModele);
        }
    }
    
    //make reservation
    function reservation(){
        global $tabRes;
        $tabRes['action']="reservation";
        $idu=$_SESSION['userid'];
        $idh=$_POST['hotel'];
        $debut=$_POST['dateFrom'];
        $end=$_POST['dateTo'];
        $requete="INSERT INTO `reservations`(`date_debut`, `date_fin`, `confirmed`, `idu`, `idh`) VALUES (?,?,?,?,?)";
        try {
            $unModele=new generalModele($requete,array($debut,$end,0,$idu,$idh));
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
        case "showall" :
            getAllHotels();
            break;
        case "reservation" :
            reservation();
            break;
        
    }
    echo json_encode($tabRes);
    ?>