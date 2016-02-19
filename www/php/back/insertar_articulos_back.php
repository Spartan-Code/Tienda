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
        $connection = mysql_connect('127.12.158.130', 'adminURet2Ls', 'sE3NqrMGJSYT')
    //$connection = mysql_connect('localhost', 'root', '') 
	or die('No se pudo conectar: ' . mysql_error());
    mysql_select_db('tienda') or die('No se pudo seleccionar la base de datos');

        //Codigo articulo
        $queryCodigoArticulo = 'SELECT * FROM articulos WHERE codigoArticulo= "'.$codigoArticulo.'"';
        $resultCodigoArticulo = mysql_query($queryCodigoArticulo) or die('Consulta fallida: ' . mysql_error());

        $count=mysql_num_rows($resultCodigoArticulo);
        
        if($count==1)
        {   
            echo true;
        }
        else
        {
            
        $insertArticulo="INSERT INTO articulos (nombreArticulo, descripcionArticulo, idCategoria, precioArticulo, imagenArticulo, codigoArticulo) VALUES ('$nombreArticulo', '$descripcionArticulo', '$categoriaArticulo', '$precioArticulo', '$imagenArticulo', '$codigoArticulo')";
        $resultInsertArticulo = mysql_query($insertArticulo) or die('Insert fallida: ' . mysql_error());
        
        mysql_free_result($resultInsertArticulo);
            //echo false;
        echo $nombreArticulo;
        }

        mysql_free_result($resultCodigoArticulo);
     
        // Cerrar la conexión
        mysql_close($connection);



?>