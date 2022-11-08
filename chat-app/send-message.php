<?php

include_once("./server.php");

$json_body = file_get_contents('php://input');
$object = json_decode($json_body);
echo $json_body;

session_start();

$_SESSION["message"] = $message;



?>