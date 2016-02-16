<?php
error_reporting(E_ALL ^ (E_NOTICE | E_WARNING | E_DEPRECATED));
    
$carrito = $_POST['datos'];
$objetoCarrito = new stdClass();
$objetoCarrito = json_decode($carrito);

//echo $objetoCarrito->reservas[0]->nombre;

session_start();
$nombreUsuario = $_SESSION["sesionNombreUsuario"];
date_default_timezone_set('UTC');
$fechaPedido = date('Y/m/d');
$timezone = $fechaPedido.date_default_timezone_get(); 
$precioTotal = 0;

    //Precio total del carrito.
    foreach($objetoCarrito->reservas as $miReserva)
    {
        $unidadesArticulo = $miReserva->unidades;
        $precioTotal += $miReserva->precio*$unidadesArticulo;
    }

    //Conexion a la BD
// connect to the database
//        $connection = mysql_connect('127.2.128.130', 'admingnLzYYt', 'AtWvu3ijPujK')
    $connection = mysql_connect('localhost', 'root', '')
            or die('No se pudo conectar: ' . mysql_error());
    mysql_select_db('tienda') or die('No se pudo seleccionar la base de datos');


    $queryIdUsuario = 'SELECT * FROM usuarios WHERE nombreUsuario = "'.$nombreUsuario.'"';
    $resultIdUsuario = mysql_query($queryIdUsuario) or die('Consulta fallida: ' . mysql_error());
    while ($line = mysql_fetch_array($resultIdUsuario, MYSQL_ASSOC)) {
            $usuarios[] = $line;
    }
    mysql_free_result($resultIdUsuario);


    if(count($usuarios)==1)
    {
        $idUsuario = $usuarios[0]['idUsuario'];
    }
    else
    {
        echo "0";
    }

    if(!empty($objetoCarrito->reservas)){
        if(isset($nombreUsuario)){
            $insertLineaPedido="INSERT INTO pedidos (idUsuario, fechaPedido, precioTotal) VALUES ('$idUsuario', '$fechaPedido', '$precioTotal')";
            $resultInsertPedido = mysql_query($insertLineaPedido) or die('Insert fallida: ' . mysql_error());
        
            mysql_free_result($resultInsertPedido);

            echo "1";
            
            foreach($objetoCarrito->reservas as $miReserva)
                {
                    $nombreArticulo = $miReserva->nombre;
                    $idPedido='(SELECT MAX(idPedido) FROM pedidos WHERE idUsuario = "'.$idUsuario.'")';
                    $idArticulo='(SELECT idArticulo FROM articulos WHERE nombreArticulo = "'.$nombreArticulo.'")';
                    $art='(SELECT nombreArticulo FROM articulos WHERE nombreArticulo = "'.$nombreArticulo.'")';
                    $unidadesArticulo = $miReserva->unidades;
                    $precioTotalArticulos = $miReserva->precio*$unidadesArticulo;

                    $insertarLineaPedido = "INSERT INTO lineapedidos (idPedido, idArticulo, nombreArticulo, unidades, precio) VALUES ($idPedido, $idArticulo, $art, $unidadesArticulo, $precioTotalArticulos)";
                    $resultInsertLineaPedido = mysql_query($insertarLineaPedido) or die('Insert en linea de pedidos fallida: ' . mysql_error());

                    mysql_free_result($resultInsertLineaPedido);
                }
            
        }

    } 
    else
    {
        echo "¡No hay artículos seleccionados!";
        
    }




        // Cerrar la conexión
        mysql_close($connection);


?>