<?php
error_reporting(E_ALL ^ (E_NOTICE | E_WARNING | E_DEPRECATED));  

$idUsuario = $_POST['idUsuario'];
$nombreUsuario = $_POST['nombreUsuario'];
$emailUsuario = $_POST['emailUsuario'];
$rolUsuario = $_POST['rolUsuario'];
$contrasenaUsuario = $_POST['contrasenaUsuario'];

echo $idUsuario;

/*session_start();
$nombreUsuario = $_SESSION["sesionNombreUsuario"];*/


    //Conexion a la BD
    $connection = mysql_connect('localhost', 'root', '')
        or die('No se pudo conectar: ' . mysql_error());
    mysql_select_db('tienda') or die('No se pudo seleccionar la base de datos');


    $insertArticulo='UPDATE usuarios SET nombreUsuario= "'.$nombreUsuario.'" WHERE idUsuario= "'.$idUsuario.'"';
    $resultInsertArticulo = mysql_query($insertArticulo) or die('Insert fallida: ' . mysql_error());
        
    mysql_free_result($resultInsertArticulo);


    mysql_free_result($resultCodigoArticulo);
     

    // Cerrar la conexión
    mysql_close($connection);

?>