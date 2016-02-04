<?php
error_reporting(E_ALL ^ (E_NOTICE | E_WARNING | E_DEPRECATED));  

$nombreCategoria = $_POST['datos'];
    // Conectando, seleccionando la base de datos
    $connection = mysql_connect('localhost', 'root', '')
        or die('No se pudo conectar: ' . mysql_error());
    mysql_select_db('tienda') or die('No se pudo seleccionar la base de datos');

    // Realizar una consulta MySQL

    $query = 'SELECT * FROM categorias WHERE nombreCategoria = "'.$nombreCategoria.'"';
    $result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
    while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
            $categorias[] = $line;
    }

    // Liberar resultados

    mysql_free_result($result);

    // Cerrar la conexión

    mysql_close($connection);
    echo json_encode($categorias);



?>