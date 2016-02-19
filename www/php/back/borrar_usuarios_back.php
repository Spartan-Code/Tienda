<?php
error_reporting(E_ALL ^ (E_NOTICE | E_WARNING | E_DEPRECATED));  

$idUsuario = $_POST['idUsuario'];


    //Conexion a la BD
        $connection = mysql_connect('127.12.158.130', 'adminURet2Ls', 'sE3NqrMGJSYT')
    //$connection = mysql_connect('localhost', 'root', '')        
	or die('No se pudo conectar: ' . mysql_error());
    mysql_select_db('tienda') or die('No se pudo seleccionar la base de datos');

    //Codigo articulo
    $queryDeleteUsuario = 'DELETE FROM usuarios WHERE idUsuario= "'.$idUsuario.'"';
    $resultDeleteUsuario = mysql_query($queryDeleteUsuario) or die('Borrado fallido: ' . mysql_error());
        
    mysql_free_result($resultDeleteUsuario);
 
    // Cerrar la conexión
    mysql_close($connection);



?>