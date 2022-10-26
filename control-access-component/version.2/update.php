<?php

include_once "./database.php";

$json_body = file_get_contents('php://input');
$object = json_decode($json_body);

$password = $object->password;
$name = $object->username;

try
{
    if ($name == "" || $password == "") {
        $status = array("status" => "error", "description" => "inputs can't be empty!");
    } else {
        $SQLStatement = $connection->prepare("CALL `update_user`('.$name.', '.$password.')");
        $SQLStatement->bindParam('username', $name);
        $SQLStatement->bindParam('password', $password);
        $SQLStatement->execute();
        $status = array("status" => "ok", "description" => "success");
        echo json_encode($status);
    }
} catch (PDOException $connectionException) {
    $status = array("status" => "db-error (update.php", "description" => $connectionException->getMessage());
    echo json_encode($status);
    die();
}