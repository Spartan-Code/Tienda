<?php

$categoria= $_GET['categoria'];  

switch ($categoria) {
    case 1:
        $articulos[0] = array('idArticulo' => '1', 'nombreArticulo' => 'art 1', 'descripcionArticulo' => 'desc 1', 'categoriaArticulo' => 'opera', 'imagenArticulo' => 'img 1', 'precioArticulo' => 'prec 1');
        $articulos[1] = array('idArticulo' => '2', 'nombreArticulo' => 'art 2', 'descripcionArticulo' => 'desc 1', 'categoriaArticulo' => 'opera', 'imagenArticulo' => 'img 1', 'precioArticulo' => 'prec 1');
        break;
    case 2:
                $articulos[0] = array('idArticulo' => '1', 'nombreArticulo' => 'art 1', 'descripcionArticulo' => 'desc 2', 'categoriaArticulo' => 'hotel', 'imagenArticulo' => 'img 2', 'precioArticulo' => 'prec 2');
        $articulos[1] = array('idArticulo' => '2', 'nombreArticulo' => 'art 2', 'descripcionArticulo' => 'desc 2', 'categoriaArticulo' => 'hotel', 'imagenArticulo' => 'img 2', 'precioArticulo' => 'prec 2');
        break;
    case 3:      
        $articulos[0] = array('idArticulo' => '1', 'nombreArticulo' => 'art 1', 'descripcionArticulo' => 'desc 2', 'categoriaArticulo' => 'restaurante', 'imagenArticulo' => 'img 2', 'precioArticulo' => 'prec 2');
        $articulos[1] = array('idArticulo' => '2', 'nombreArticulo' => 'art 2', 'descripcionArticulo' => 'desc 2', 'categoriaArticulo' => 'restaurante', 'imagenArticulo' => 'img 2', 'precioArticulo' => 'prec 2');
        break;
    case 4:
        $articulos[0] = array('idArticulo' => '1', 'nombreArticulo' => 'art 1', 'descripcionArticulo' => 'desc 2', 'categoriaArticulo' => 'actividad', 'imagenArticulo' => 'img 2', 'precioArticulo' => 'prec 2');
        $articulos[1] = array('idArticulo' => '2', 'nombreArticulo' => 'art 2', 'descripcionArticulo' => 'desc 2', 'categoriaArticulo' => 'actividad', 'imagenArticulo' => 'img 2', 'precioArticulo' => 'prec 2');
        break;
}

        require_once('../lib/json/Services_JSON.php');
        $oJson = new Services_JSON();
        echo $oJson->encode($articulos);

?>
