<?php
error_reporting(E_ALL ^ (E_NOTICE | E_WARNING | E_DEPRECATED));

$nombreUsuario='2'; 
$contrasenaUsuario='2';

$numeroPedido = $_GET["data"];

require('../lib/fpdf181/fpdf.php');


// connect to the database
        $connection = mysql_connect('127.2.128.130', 'admingnLzYYt', 'AtWvu3ijPujK')
//$connection = mysql_connect('localhost', 'root', '')or die("Connection Error: " . mysql_error());
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

$pdf->Image('../img/opera_valencia_logo.png',10,10, -150);
$pdf->Cell(90,20,'Desglose del pedido '.$numeroPedido, 0, 0, 'R');
$pdf->Ln();

$query = 'SELECT idArticulo, nombreArticulo, unidades, precio FROM lineaPedidos WHERE idPedido = "'.$numeroPedido.'"';
$result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());

$count=mysql_num_rows($result);
        
while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
    
    $datos[] = $line;

/*    $pdf->Cell(10, 10, "      idArticulo: " . $line["idArticulo"] . "      unidades: " . $line["unidades"] . "      precio: " . $line["precio"]);
    $pdf->Ln();*/
}



    $header = array('ID Articulo', 'Nombre', 'Unidades', 'Precio');

    $widthCeldas=array(10, 50, 8, 8);
    $pdf->SetFillColor(169, 144, 90);

    // Cabecera
    $w = array(30, 100, 30, 30);
    for($i=0;$i<count($header);$i++)
        $pdf->Cell($w[$i],7,$header[$i],1,0,'C',true);
    $pdf->Ln();

    $preciototal = 0;
    for($i=0;$i<count($datos);$i++){
            $preciototal += $datos[$i]["precio"];
    }

    foreach($datos as $row)
    {
        $i=0;
//        $x=0;
//        
//        if($x%2==0)
//        {
//            $pdf->SetFillColor(0, 255, 255);
//        }
//        else
//        {
//           $pdf->SetFillColor(245, 240, 229); 
//        }        
        foreach($row as $col){
            $pdf->Cell($w[$i],10,$col,1, 0, 'C');
            $i++;
        }
            $pdf->Ln();
//        $x++;
    }



    $pdf->Cell(180 ,20,'Precio Total: '.$preciototal, 0, 0, 'R');

    $pdf->Output('./pedido_'.$numeroPedido.'.pdf', 'D');


?>