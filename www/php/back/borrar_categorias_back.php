<?php
error_reporting(E_ALL ^ (E_NOTICE | E_WARNING | E_DEPRECATED));  

$idCategoria = $_POST['idCategoria'];


echo $idArticulo;

    //Conexion a la BD
    $connection = mysql_connect('localhost', 'root', '')
        or die('No se pudo conectar: ' . mysql_error());
    mysql_select_db('tienda') or die('No se pudo seleccionar la base de datos');

    //Codigo articulo
    $queryDeleteCategoria = 'DELETE FROM categorias WHERE idArticulo= "'.$idCategoria.'"';
    $resultDeleteCategoria = mysql_query($queryDeleteCategoria) or die('Borrado fallido: ' . mysql_error());
        
    mysql_free_result($resultDeleteCategoria);
 
    // Cerrar la conexión
    mysql_close($connection);



?>