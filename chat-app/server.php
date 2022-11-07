<?php
include "config.php";


function connect_users( $id_user_a, $id_user_b )
{
    //Acá haría varias cosas.. pero al final, 
    //Debe devolver la clave simétrica.
    return generate_key('A','B');
}

function disconnect_users( $id_user_a, $id_user_b )
{

}

function send_message( $id_user_sender, $id_user_target, $body_message )
{
    $dato_encriptado = $encriptar($body_message);
    
    return $dato_encriptado;
}
function descript_message()
{
    //desencripta informacion:
    //$dato_desencriptado = $desencriptar($dato_encriptado);

}
function generate_key( $id_user_sender, $id_user_target )
{   
    $clave = hash('sha256', $secret_key);
    return echo "clave generada: ". $clave;

}

function get_messages( $id_user )
{
    //session_start();
    //return echo "mensajes: " . $_SESSION["usuario"];
}

?>