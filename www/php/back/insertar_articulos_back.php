<?php
error_reporting(E_ALL ^ (E_NOTICE | E_WARNING | E_DEPRECATED));  

$nombreArticulo = $_POST['nombreArticulo'];
$descripcionArticulo = $_POST['descripcionArticulo'];
$categoriaArticulo = $_POST['categoriaArticulo'];
$precioArticulo = $_POST['precioArticulo'];
$imagenArticulo = $_POST['imagenArticulo'];
$codigoArticulo = $_POST['codigoArticulo'];

session_start();
$nombreUsuario = $_SESSION["sesionNombreUsuario"];


    //Conexion a la BD
    $connection = mysql_connect('localhost', 'root', '')
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
            echo false;
            
        }

        mysql_free_result($resultCodigoArticulo);
     
        


   /* foreach($objetoCarrito->reservas as $miReserva)
    {
        $nombreArticulo = $miReserva->nombre;
        $idPedido='(SELECT MAX(idPedido) FROM pedidos WHERE idUsuario = "'.$idUsuario.'")';
        $idArticulo='(SELECT idArticulo FROM articulos WHERE nombreArticulo = "'.$nombreArticulo.'")';
        $unidadesArticulo = $miReserva->unidades;
        $precioTotalArticulos = $miReserva->precio*$unidadesArticulo;

        $insertarLineaPedido = "INSERT INTO lineapedidos (idPedido, idArticulo, unidades, precio) VALUES ($idPedido, $idArticulo, $unidadesArticulo, $precioTotalArticulos)";
        $resultInsertLineaPedido = mysql_query($insertarLineaPedido) or die('Insert en linea de pedidos fallida: ' . mysql_error());

        mysql_free_result($resultInsertLineaPedido);
    }
*/
        // Cerrar la conexión
        mysql_close($connection);



?>