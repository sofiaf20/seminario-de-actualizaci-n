<?php
//configuracion del algoritmo de encriptacion

$secret_key  = "SSA-OOOAEIP";

//metodo de encriptacion
$method = 'aes-256-cbc';

// se puede generar una diferente usando la funcion $getIV()
$iv = base64_decode(openssl_random_pseudo_bytes(64));

 
 //encripta el contenido de la variable, enviada como parametro.
  
 $encriptar = function ($valor) use ($method, $secret_key, $iv) {
     return openssl_encrypt ($valor, $method, $secret_key, false, $iv);
 };

 
 //desencripta el texto recibido
 
 $desencriptar = function ($valor) use ($method, $secret_key, $iv) {
     $encrypted_data = base64_decode($valor);
     return openssl_decrypt($valor, $method, $secret_key, false, $iv);
 };
 
 
 //genera un valor para IV (vector de inicializacion)
 
 $getIV = function () use ($method) {
     return base64_encode(openssl_random_pseudo_bytes(openssl_cipher_iv_length($method)));
 };

?>