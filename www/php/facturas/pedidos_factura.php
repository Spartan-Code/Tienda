<?php
error_reporting(E_ALL ^ (E_NOTICE | E_WARNING | E_DEPRECATED));  

    session_start();
    $usuarioLogeado = $_SESSION["sesionNombreUsuario"];


    // Conectando, seleccionando la base de datos
// connect to the database
//        $connection = mysql_connect('127.2.128.130', 'admingnLzYYt', 'AtWvu3ijPujK')
    $connection = mysql_connect('localhost', 'root', '')
            or die('No se pudo conectar: ' . mysql_error());
    mysql_select_db('tienda') or die('No se pudo seleccionar la base de datos');

    // Realizar una consulta MySQL

    $idUsuario = 'SELECT idUsuario FROM usuarios WHERE nombreUsuario= "'.$usuarioLogeado.'"';

    $query = 'SELECT * FROM pedidos WHERE idUsuario= ('.$idUsuario.')';
    $result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
    while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
            $pedidos[] = $line;
    }

    // Liberar resultados

    mysql_free_result($result);

    // Cerrar la conexión

    mysql_close($connection);
    echo json_encode($pedidos);


?>