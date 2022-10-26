<?php

include_once "./database.php";

$json_body = file_get_contents('php://input');
$object = json_decode($json_body);

$password = $object->password;
$name = $object->username;
try
{
    $SQLStatement = $connection->prepare("CALL `delete_user`('.$name.', '.$password.')");
    $SQLStatement->bindParam('username', $name);
    $SQLStatement->bindParam('password', $password);
    $SQLStatement->execute();

    $status = array("status" => "ok", "description" => "success");

    echo json_encode($status);
} catch (PDOException $connectionException) {
    $status = array("status" => "db-error (delete.php", "description" => $connectionException->getMessage());
    echo json_encode($status);
    die();
}