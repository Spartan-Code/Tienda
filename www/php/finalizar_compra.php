<?php
error_reporting(E_ALL ^ (E_NOTICE | E_WARNING | E_DEPRECATED));
    
$carrito = $_POST['datos'];
$objetoCarrito = new stdClass();
$objetoCarrito = json_decode($carrito);

//echo $objetoCarrito->reservas[0]->nombre;


$nombreUsuario = 'Cristian';
date_default_timezone_set('UTC');
$fechaPedido = date('Y/m/d');
$timezone = $fechaPedido.date_default_timezone_get(); 
$precioTotal = 0;


foreach($objetoCarrito->reservas as $miReserva)
{
    $unidadesArticulo = $miReserva->unidades;
    $precioTotal += $miReserva->precio*$unidadesArticulo;
}




    $connection = mysql_connect('localhost', 'root', '')
        or die('No se pudo conectar: ' . mysql_error());
    mysql_select_db('tienda') or die('No se pudo seleccionar la base de datos');

    // Realizar una consulta MySQL
    $queryIdUsuario = 'SELECT * FROM usuarios WHERE nombreUsuario = "'.$nombreUsuario.'"';
    $resultIdUsuario = mysql_query($queryIdUsuario) or die('Consulta fallida: ' . mysql_error());
    while ($line = mysql_fetch_array($resultIdUsuario, MYSQL_ASSOC)) {
            $usuarios[] = $line;
    }
    // Liberar resultados
    mysql_free_result($resultIdUsuario);

    if(count($usuarios)==1)
    {
        $idUsuario = $usuarios[0]['idUsuario'];
    }
    else
    {
        echo "No hay ningun usuario logeado.";
    }

    if(!empty($objetoCarrito->reservas)){
        $insertLineaPedido="INSERT INTO pedidos (idUsuario, fechaPedido, precioTotal) VALUES ('$idUsuario', '$fechaPedido', '$precioTotal')";
        $resultInsertPedido = mysql_query($insertLineaPedido) or die('Insert fallida: ' . mysql_error());
        
        mysql_free_result($resultInsertPedido);
        
        echo "¡Pago realizado con éxito!";
    } 
    else
    {
        echo "¡No hay artículos seleccionados!";
    }


    foreach($objetoCarrito->reservas as $miReserva)
    {
        $nombreArticulo = $miReserva->nombre;
        $idPedido='(SELECT MAX(idPedido) FROM pedidos)';
        $idArticulo='(SELECT idArticulo FROM articulos WHERE nombreArticulo = "'.$nombreArticulo.'")';
        $unidadesArticulo = $miReserva->unidades;
        $precioTotalArticulos = $miReserva->precio*$unidadesArticulo;

        $insertarLineaPedido = "INSERT INTO lineaPedidos (idPedido, idArticulo, unidades, precio) VALUES ($idPedido, $idArticulo, $unidadesArticulo, $precioTotalArticulos)";
        $resultInsertLineaPedido = mysql_query($insertarLineaPedido) or die('Insert en linea de pedidos fallida: ' . mysql_error());

        mysql_free_result($resultInsertLineaPedido);
    }

        // Cerrar la conexión
        mysql_close($connection);


?>