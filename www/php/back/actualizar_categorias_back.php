<?php
error_reporting(E_ALL ^ (E_NOTICE | E_WARNING | E_DEPRECATED));  

session_start();
$idCategoria = $_SESSION["idCategoria"];
$nombreCategoria = $_POST['nombreCategoria'];
unset($_SESSION["idCategoria"]);

/*session_start();
$nombreUsuario = $_SESSION["sesionNombreUsuario"];*/


    //Conexion a la BD
    $connection = mysql_connect('https://tienda-cristiancervera.rhcloud.com/phpmyadmin/', 'admingnLzYYt', 'AtWvu3ijPujK')
        or die('No se pudo conectar: ' . mysql_error());
    mysql_select_db('tienda') or die('No se pudo seleccionar la base de datos');



    $insertCategoria='UPDATE categorias SET nombreCategoria= "'.$nombreCategoria.'" WHERE idCategoria= "'.$idCategoria.'"';
    $resultInsertCategoria = mysql_query($insertCategoria) or die('Insert fallida: ' . mysql_error());

    mysql_free_result($resultInsertCategoria);
     

    // Cerrar la conexión
    mysql_close($connection);

?>