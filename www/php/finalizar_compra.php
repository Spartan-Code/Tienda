<?php
    
$carrito = $_POST["datos"];

$objetoCarrito =new stdClass();

$objetoCarrito=json_decode($carrito);

foreach (objetoCarrito -> articulo as articulos){
    
}


?>