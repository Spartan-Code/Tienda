<?php
error_reporting(E_ALL ^ (E_NOTICE | E_WARNING | E_DEPRECATED));  

$nombreUsuario = $_POST['nombreUsuario'];
$emailUsuario = $_POST['emailUsuario'];
$rolUsuario = $_POST['rolUsuario'];
$contrasenaUsuario = $_POST['contrasenaUsuario'];



/*session_start();
$nombreUsuario = $_SESSION["sesionNombreUsuario"];*/

    //Conexion a la BD
//        $connection = mysql_connect('127.2.128.130', 'admingnLzYYt', 'AtWvu3ijPujK')
    $connection = mysql_connect('localhost', 'root', '')        or die('No se pudo conectar: ' . mysql_error());
    mysql_select_db('tienda') or die('No se pudo seleccionar la base de datos');

        //Codigo articulo
        $queryNombreUsuario = 'SELECT * FROM usuarios WHERE nombreUsuario= "'.$nombreUsuario.'"';
        $resultNombreUsuario = mysql_query($queryNombreUsuario) or die('Consulta fallida: ' . mysql_error());

        $count=mysql_num_rows($resultNombreUsuario);

        mysql_free_result($resultNombreUsuario);
        
        if($count==1)
        {   
            echo true;
        }
        else
        {
            
            $insertUsuario="INSERT INTO usuarios (nombreUsuario, emailUsuario, rolUsuario, contrasenaUsuario) VALUES ('$nombreUsuario', '$emailUsuario', '$rolUsuario', '$contrasenaUsuario')";
            $resultInsertUsuario = mysql_query($insertUsuario) or die('Insert fallida: ' . mysql_error());

            mysql_free_result($resultInsertUsuario);

            echo false;

        }

        // Cerrar la conexión
        mysql_close($connection);

?>