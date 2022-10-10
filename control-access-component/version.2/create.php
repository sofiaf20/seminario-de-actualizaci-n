<?php

include_once( "./database.php");


$json_body = file_get_contents('php://input');
$object = json_decode($json_body);

$password = $object->password;
$name = $object->username;

try
{

	$SQLCode = "CALL `create_user`('.$name.', '.$password.')";
	
	$connection->query($SQLCode);

	$status = array( 'status'=>'ok', 'description'=>'Usuario Creado Satisfactoriamente!' );
	
    echo json_encode($status);
}
catch( PDOException $connectionException )
{
    $status = array( 'status'=>'db-error (create.php', 'description'=>$connectionException->getMessage() );
    echo json_encode($status);
    die();
}

?>