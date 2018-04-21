<?php
require_once("../DB/connexion.inc.php");
class generalModele{
	private $requete;
	private $params;
	private $connexion;
	
function __construct($requete=null,$params=null){
		$this->requete=$requete;
		$this->params=$params;
}
	
function obtenirConnexion(){
	$maConnexion = new Connexion("localhost", "root", "", "hotel-montreal");
	$maConnexion->connecter();
	return $maConnexion->getConnexion();
}

function executer(){
		$this->connexion = $this->obtenirConnexion();
		$stmt = $this->connexion->prepare($this->requete);
		$stmt->execute($this->params);
		$this->deconnecter();
		return $stmt;		
	}
function deconnecter(){
		unset($this->connexion);
}
function executerAndGetId(){
	$this->connexion = $this->obtenirConnexion();
	$stmt = $this->connexion->prepare($this->requete);
	$stmt->execute($this->params);
	$id=$this->connexion->lastInsertId();
	$this->deconnecter();
	return $id;
}

}//fin de la classe
?>