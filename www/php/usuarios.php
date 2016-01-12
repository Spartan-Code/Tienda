<?php
    error_reporting(E_ALL ^ (E_NOTICE | E_WARNING | E_DEPRECATED));

/*
    $nombreUsuario= $_GET['nombreUsuario'];  
    $contrasenaUsuario= $_GET['contrasenaUsuario']; 
*/

    $nombreUsuario= "Cristian";  
    $contrasenaUsuario= "1234";  

    // Conectando, seleccionando la base de datos

    $connection = mysql_connect('localhost', 'root', '')
    or die('No se pudo conectar: ' . mysql_error());
    mysql_select_db('tienda') or die('No se pudo seleccionar la base de datos');

    // Realizar una consulta MySQL

    $numeroFilas = 'SELECT COUNT(*) FROM usuarios';
    $result = mysql_query($numeroFilas) or die('Consulta fallida: ' . mysql_error());    
          
          
    if($result>0){
        echo $result;
    }
    else{
        echo "Esta mierda no va";
    }

    mysql_close($connection);
    


/*$result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
    while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
            $articulos[] = $line;
    }

    // Liberar resultados

    mysql_free_result($result);

    // Cerrar la conexión

    mysql_close($connection);
    echo json_encode($articulos);*/
?>