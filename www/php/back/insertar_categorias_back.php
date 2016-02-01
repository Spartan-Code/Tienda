<?php
error_reporting(E_ALL ^ (E_NOTICE | E_WARNING | E_DEPRECATED));  

$nombreCategoria = $_POST['nombreCategoria'];



/*session_start();
$nombreUsuario = $_SESSION["sesionNombreUsuario"];*/


    //Conexion a la BD
    $connection = mysql_connect('localhost', 'root', '')
        or die('No se pudo conectar: ' . mysql_error());
    mysql_select_db('tienda') or die('No se pudo seleccionar la base de datos');

        //Codigo articulo
        $queryCategoria = 'SELECT * FROM categorias WHERE nombreCategoria= "'.$nombreCategoria.'"';
        $resultCategoria = mysql_query($queryCategoria) or die('Consulta fallida: ' . mysql_error());

        $count=mysql_num_rows($resultCategoria);
        
        if($count==1)
        {   
            echo true;
        }
        else
        {
            
        $insertArticulo="INSERT INTO categorias (nombreCategoria) VALUES ('$nombreCategoria')";
        $resultInsertArticulo = mysql_query($insertArticulo) or die('Insert fallida: ' . mysql_error());
        
        mysql_free_result($resultInsertArticulo);
            //echo false;
        echo $nombreCategoria;
        }

        mysql_free_result($resultInsertArticulo);
     
        // Cerrar la conexión
        mysql_close($connection);



?>