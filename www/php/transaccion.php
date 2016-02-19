<?php

$carrito = $_POST["datos"];
$objetoCarrito = new stdClass();
$objetoCarrito = json_decode($carrito);

$transaction = new stdClass();

$transaction->cuentaOrigen = $objetoCarrito->ccc;
$transaction->cuentaDestino = "01111111771234567899";
$transaction->importe = $objetoCarrito->importe;
$transaction->concepto = "Reserva";
$transaction->pin = "1234";

$data_string = json_encode($transaction);

$ch = curl_init('http://banco-pedrodelbarrio.rhcloud.com/banco_api/api/transaccion');
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Content-Length: ' . strlen($data_string))
);

$result = curl_exec($ch);
$info = curl_getinfo($ch);

curl_close($ch);

echo $info["http_code"];
?>