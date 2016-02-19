<?php
    error_reporting(E_ALL ^ (E_NOTICE | E_WARNING | E_DEPRECATED));

    $nombreUsuarioNuevo=$_POST['nombreUsuarioNuevo'];
    $emailUarioNuevo=$_POST['emailUarioNuevo'];
    $contrasenaUsuarioNuevo=$_POST['contrasenaUsuarioNuevo'];

    // Conectando, seleccionando la base de datos
// connect to the database
       $connection = mysql_connect('127.12.158.130', 'adminURet2Ls', 'sE3NqrMGJSYT')
    //$connection = mysql_connect('localhost', 'root', '')
            or die('No se pudo conectar: ' . mysql_error());
    mysql_select_db('tienda') or die('No se pudo seleccionar la base de datos');

    $queryUsuarioExistente = 'SELECT * FROM usuarios WHERE nombreUsuario = "'.$nombreUsuarioNuevo.'"';
    $resultUsuarioExistente = mysql_query($queryUsuarioExistente) or die('Consulta fallida: ' . mysql_error());
    while ($line = mysql_fetch_array($resultUsuarioExistente, MYSQL_ASSOC)) {
            $usuarios[] = $line;
    }
    mysql_free_result($resultUsuarioExistente);

    if(count($usuarios)>0)
    {
        echo "UsuarioExiste";
    }
    else
    {
        $insertNuevoUsuario = "INSERT INTO usuarios (nombreUsuario, emailUsuario, contrasenaUsuario) VALUES ('$nombreUsuarioNuevo', '$emailUarioNuevo', '$contrasenaUsuarioNuevo')";
        $resultNuevoUsuario = mysql_query($insertNuevoUsuario) or die('Consulta fallida: ' . mysql_error());
/*        while ($line = mysql_fetch_array(NuevoUsuario, MYSQL_ASSOC)) {
                $usuarios[] = $line;
        }*/
        mysql_free_result($resultNuevoUsuario);
        
        echo "UsuarioNoExiste";
    }

    mysql_close($connection);
?>