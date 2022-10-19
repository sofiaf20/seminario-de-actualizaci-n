<?php

$connection = null;

try
{
    $connection = new PDO('mysql:host=127.0.0.1:3306;dbname=application-template', 'root', 'sofiafiappi' );
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (PDOException $connectionException) 
{
    
    die();
};

?>