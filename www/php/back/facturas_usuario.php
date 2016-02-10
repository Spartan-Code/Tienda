<?php
    error_reporting(E_ALL ^ (E_NOTICE | E_WARNING | E_DEPRECATED));

    $nombreUsuario=$_POST['nombreUsuario']; 
    $contrasenaUsuario=$_POST['contrasenaUsuario']; 

    session_start();
    $_SESSION["sesionNombreUsuario"]=$nombreUsuario;

// connect to the database
//        $connection = mysql_connect('127.2.128.130', 'admingnLzYYt', 'AtWvu3ijPujK')
    $connection = mysql_connect('localhost', 'root', '')
            or die('No se pudo conectar: ' . mysql_error());
    mysql_select_db('tienda') or die('No se pudo seleccionar la base de datos');


    if(isset($_POST['nombreUsuario']) && isset($_POST['contrasenaUsuario']))
    {

        $queryIdUsuario = 'SELECT * FROM pedidos WHERE idUsuario = (SELECT idUsuario FROM usuarios WHERE nombreUsuario= "'.$nombreUsuario.'" and contrasenaUsuario= "'.$contrasenaUsuario.'")';
        $resultIdUsuario = mysql_query($queryIdUsuario) or die('Consulta fallida: ' . mysql_error());

        $count=mysql_num_rows($resultIdUsuario);
        
        while ($line = mysql_fetch_array($resultIdUsuario, MYSQL_ASSOC)) {
            $pedido[] = $line;
        }
    }

    
    mysql_free_result($result);
    mysql_close($connection);
?>