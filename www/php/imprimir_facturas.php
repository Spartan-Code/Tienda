<?php
error_reporting(E_ALL ^ (E_NOTICE | E_WARNING | E_DEPRECATED));

$nombreUsuario=$_POST['nombreUsuario']; 
$contrasenaUsuario=$_POST['contrasenaUsuario'];

require('../lib/fpdf181/fpdf.php');


// connect to the database
//        $connection = mysql_connect('127.2.128.130', 'admingnLzYYt', 'AtWvu3ijPujK')
$connection = mysql_connect('localhost', 'root', '')or die("Connection Error: " . mysql_error());

mysql_select_db('tienda') or die("Error conecting to db.");

// sacando la id de usuario con sesion abierta

$query = 'SELECT idUsuario FROM usuarios WHERE nombreUsuario = "'.$nombreUsuario.'" and contrasenaUsuario = "'.$contrasenaUsuario.'"';
$result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
$idUsuario = $result;

// --------------------------------------------

$pdf = new FPDF();
$pdf->AddPage();
$pdf->SetFont('Arial','B',16);

$pdf->Cell(40,10,'Todas las Facturas');
$pdf->Ln();

$query = 'SELECT * FROM pedidos WHERE idUsuario = "'.$idUsuario.'" ';
$result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());

$count=mysql_num_rows($result);
        
while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $pdf->Cell(10, 10,"id: " . $line["idPedido"] . " idUsuario: " . $line["idUsuario"] . " fechaPedido: " . $line["fechaPedido"] . " precioTotal: " . $line["precioTotal"]);
    $pdf->Ln();
}


$pdf->Output('prueba.pdf','D');
?>