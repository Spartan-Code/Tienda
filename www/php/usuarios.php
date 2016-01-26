<?php
    error_reporting(E_ALL ^ (E_NOTICE | E_WARNING | E_DEPRECATED));

    $nombreUsuario=$_POST['nombreUsuario']; 
    $contrasenaUsuario=$_POST['contrasenaUsuario']; 

    session_start();
    $_SESSION["sesionNombreUsuario"]=$nombreUsuario;

  $connection = mysql_connect('localhost', 'root', '')
        or die('No se pudo conectar: ' . mysql_error());
    mysql_select_db('tienda') or die('No se pudo seleccionar la base de datos');


    if(isset($_POST['nombreUsuario']) && isset($_POST['contrasenaUsuario']))
    {
/*        $nombreUsuario=mysql_real_escape_string($nombreUsuario);
        $contrasenaUsuario=mysql_real_escape_string($contrasenaUsuario);*/

        $queryIdUsuario = 'SELECT * FROM usuarios WHERE nombreUsuario= "'.$nombreUsuario.'" and contrasenaUsuario= "'.$contrasenaUsuario.'"';
        $resultIdUsuario = mysql_query($queryIdUsuario) or die('Consulta fallida: ' . mysql_error());

        $count=mysql_num_rows($resultIdUsuario);
        //$row=mysql_fetch_array($resultIdUsuario,MYSQLI_ASSOC);
        // If result matched $username and $password, table row  must be 1 row
        while ($line = mysql_fetch_array($resultIdUsuario, MYSQL_ASSOC)) {
            $rolUsuario[] = $line;
        }  
        
        if($count==1)
        {   
            echo $rolUsuario[0]['rolUsuario'];
        }
        else
        {
            echo '0';
        }
    }




/*    define('DB_SERVER', 'localhost');
    define('DB_USERNAME', 'root');
    define('DB_PASSWORD', '');
    define('DB_DATABASE', 'tienda');

    $db = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);

    if(isset($_POST['nombreUsuario']) && isset($_POST['contrasenaUsuario']))
    {
        $nombreUsuario=mysqli_real_escape_string($db,$_POST['nombreUsuario']); 
        $contrasenaUsuario=mysqli_real_escape_string($db,$_POST['contrasenaUsuario']); 

        $result=mysqli_query($db,"SELECT * FROM usuarios WHERE nombreUsuario='$nombreUsuario' and contrasenaUsuario='$contrasenaUsuario'");
        $count=mysqli_num_rows($result);
        $row=mysqli_fetch_array($result,MYSQLI_ASSOC);
        // If result matched $username and $password, table row  must be 1 row
        if($count==1)
        {
            echo '1';
        }
        else
        {
            echo '0';
        }
    }*/
    
    mysql_free_result($result);
    mysql_close($connection);
?>