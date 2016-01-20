<?php
    error_reporting(E_ALL ^ (E_NOTICE | E_WARNING | E_DEPRECATED));

    $nombreUsuario=$_POST['nombreUsuario']; 
    //$nombreUsuario='Cristian';
    //$contrasenaUsuario=$_POST['contrasenaUsuario']; 


    // Conectando, seleccionando la base de datos
    $connection = mysql_connect('localhost', 'root', '')
        or die('No se pudo conectar: ' . mysql_error());
    mysql_select_db('tienda') or die('No se pudo seleccionar la base de datos');

    // Realizar una consulta MySQL
    $query = 'SELECT * FROM usuarios WHERE nombreUsuario = "'.$nombreUsuario.'"';
    $result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
    while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
            $articulos[] = $line;
    }

    // Liberar resultados
    mysql_free_result($result);
    mysql_close($connection);


/*    define('DB_SERVER', 'localhost');
    define('DB_USERNAME', 'root');
    define('DB_PASSWORD', '');
    define('DB_DATABASE', 'tienda');

    $db = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);

    session_start();

    if(isset($_POST['nombreUsuario']) && isset($_POST['contrasenaUsuario']))
    {
        $nombreUsuario=mysqli_real_escape_string($db,$_POST['nombreUsuario']); 
        $contrasenaUsuario=mysqli_real_escape_string($db,$_POST['contrasenaUsuario']); 

        $result=mysqli_query($db,"SELECT idUsuario FROM usuarios WHERE nombreUsuario='$nombreUsuario' and contrasenaUsuario='$contrasenaUsuario'");
        $count=mysqli_num_rows($result);
        $row=mysqli_fetch_array($result,MYSQLI_ASSOC);
        // If result matched $username and $password, table row  must be 1 row
        if($count==1)
        {
            echo 'Si hay datos';
        }
        else
        {
            echo 'No hay datos';
        }
    }*/

?>