<?php
    error_reporting(E_ALL ^ (E_NOTICE | E_WARNING | E_DEPRECATED));

    $nombreUsuarioNuevo=$_POST['nombreUsuarioNuevo'];
    $emailUarioNuevo=$_POST['emailUarioNuevo'];
    $contrasenaUsuarioNuevo=$_POST['contrasenaUsuarioNuevo'];

    // Conectando, seleccionando la base de datos
    $connection = mysql_connect('localhost', 'root', '')
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
        echo "El nombre de usuario ya existe. Elija otro por favor.";
    }
    else
    {
        $insertNuevoUsuario = "INSERT INTO pedidos (idUsuario, fechaPedido, precioTotal) VALUES ('$idUsuario', '$fechaPedido', '$precioTotal')";
        $resultNuevoUsuario = mysql_query($insertNuevoUsuario) or die('Consulta fallida: ' . mysql_error());
        while ($line = mysql_fetch_array(NuevoUsuario, MYSQL_ASSOC)) {
                $usuarios[] = $line;
        }
        mysql_free_result($resultNuevoUsuario);
    }

    mysql_close($connection);
?>