<?php
error_reporting(E_ALL ^ (E_NOTICE | E_WARNING | E_DEPRECATED));  

$nombreArticulo = $_POST['nombreArticulo'];
$descripcionArticulo = $_POST['descripcionArticulo'];
$categoriaArticulo = $_POST['categoriaArticulo'];
$precioArticulo = $_POST['precioArticulo'];
$imagenArticulo = $_POST['imagenArticulo'];
$codigoArticulo = $_POST['codigoArticulo'];

/*session_start();
$nombreUsuario = $_SESSION["sesionNombreUsuario"];*/


    //Conexion a la BD
    $connection = mysql_connect('localhost', 'root', '')
        or die('No se pudo conectar: ' . mysql_error());
    mysql_select_db('tienda') or die('No se pudo seleccionar la base de datos');


    $insertArticulo='UPDATE articulos SET descripcionArticulo= "'.$descripcionArticulo.'" WHERE codigoArticulo= "'.$codigoArticulo.'"';
    $resultInsertArticulo = mysql_query($insertArticulo) or die('Insert fallida: ' . mysql_error());
        
    mysql_free_result($resultInsertArticulo);


    mysql_free_result($resultCodigoArticulo);
     

    // Cerrar la conexión
    mysql_close($connection);

?>