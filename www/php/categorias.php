<?php
    $categorias[0]=array ("nombre" => "Entradas");
    $categorias[1]=array ("nombre" => "Alojamiento");
    $categorias[2]=array ("nombre" => "Restaurantes");
    $categorias[3]=array ("nombre" => "Tours y Actividades");

    require_once('../lib/json/Services_JSON.php');
    $oJson = new Services_JSON();
    echo $oJson->encode($categorias);
?>
