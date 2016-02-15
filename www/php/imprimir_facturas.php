<?php
error_reporting(E_ALL ^ (E_NOTICE | E_WARNING | E_DEPRECATED));

$nombreUsuario='2'; 
$contrasenaUsuario='2';

$numeroPedido = $_GET["data"];

require('../lib/fpdf181/fpdf.php');


// connect to the database
//        $connection = mysql_connect('127.2.128.130', 'admingnLzYYt', 'AtWvu3ijPujK')
$connection = mysql_connect('localhost', 'root', '')or die("Connection Error: " . mysql_error());
mysql_select_db('tienda') or die("Error conecting to db.");

// sacando la id de usuario con sesion abierta

/*$queryUsuario = 'SELECT * FROM usuarios WHERE nombreUsuario = "'.$nombreUsuario.'" and contrasenaUsuario = "'.$contrasenaUsuario.'"';
$resultUsuario = mysql_query($queryUsuario) or die('Consulta fallida: ' . mysql_error());
while ($line = mysql_fetch_array($resultUsuario, MYSQL_ASSOC)) {
    $usuarios[] = $line;
}*/


// --------------------------------------------

$pdf = new FPDF();
$pdf->AddPage();
$pdf->SetFont('Arial','',16);

$pdf->Cell(40,20,'Desglose del pedido '.$numeroPedido);
$pdf->Ln();

$query = 'SELECT idArticulo, unidades, precio FROM lineaPedidos WHERE idPedido = "'.$numeroPedido.'"';
$result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());

$count=mysql_num_rows($result);
        
while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
    
    $datos[] = $line;

/*    $pdf->Cell(10, 10, "      idArticulo: " . $line["idArticulo"] . "      unidades: " . $line["unidades"] . "      precio: " . $line["precio"]);
    $pdf->Ln();*/
}


    $header = array('ID Articulo', 'Unidades', 'Precio');
    // Cabecera
    $pdf->SetFillColor(169, 144, 90);
    foreach($header as $col)
        $pdf->Cell(50,12,$col,1, 0, 'C', True);
    $pdf->Ln();

    // Datos
    $i=0;
    foreach($datos as $row)
    {
        if($i%2==0)
        {
            $pdf->SetFillColor(255, 255, 255);
        }
        else
        {
           $pdf->SetFillColor(245, 240, 229); 
        }        
        foreach($row as $col)
        

            $pdf->Cell(50,10,$col,1, 0, 'C', True);
            $pdf->Ln();
            $i++;
    }

$pdf->Output('pedido_'.$numeroPedido.'.pdf','I');
?>