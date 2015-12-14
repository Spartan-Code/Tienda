<?php

$categoria= $_GET['categoria'];  

switch ($categoria) {
    case 'Entradas': {
        $articulos[0] = array('idArticulo' => '1', 'nombreArticulo' => 'Macbeth', 'descripcionArticulo' => 'Giuseppe Verdi', 'categoriaArticulo' => 'Entradas', 'imagenArticulo' => 'img/entradas/entradas-macbeth.jpg', 'precioArticulo' => '100');
        $articulos[1] = array('idArticulo' => '2', 'nombreArticulo' => 'La Boheme', 'descripcionArticulo' => 'Giacomo Puccini', 'categoriaArticulo' => 'Entradas', 'imagenArticulo' => 'img/entradas/entradas-boheme.jpg', 'precioArticulo' => '125');
        $articulos[2] = array('idArticulo' => '3', 'nombreArticulo' => 'Aida', 'descripcionArticulo' => 'Giuseppe Verdi', 'categoriaArticulo' => 'Entradas', 'imagenArticulo' => 'img/entradas/entradas-aida.jpg', 'precioArticulo' => '150');
        $articulos[3] = array('idArticulo' => '4', 'nombreArticulo' => 'A Midsummer Nights Dream', 'descripcionArticulo' => 'Benjamin Britten', 'categoriaArticulo' => 'Entradas', 'imagenArticulo' => 'img/entradas/entradas-midsummer.jpg', 'precioArticulo' => '175');
        $articulos[4] = array('idArticulo' => '5', 'nombreArticulo' => 'La Flauta Mágica', 'descripcionArticulo' => 'Mozart', 'categoriaArticulo' => 'Entradas', 'imagenArticulo' => 'img/entradas/entradas-flautamagica.jpg', 'precioArticulo' => '200');
    } break;
        
    case 'Alojamiento': {
        $articulos[0] = array('idArticulo' => '1', 'nombreArticulo' => 'Caro Hotel', 'descripcionArticulo' => 'Hotel de vanguardia y diseño exclusivo en pleno centro de Valencia', 'categoriaArticulo' => 'Alojamiento', 'imagenArticulo' => 'img/alojamiento/hotel-caro.jpg', 'precioArticulo' => '100');
        $articulos[1] = array('idArticulo' => '2', 'nombreArticulo' => 'AdHoc Carmen', 'descripcionArticulo' => 'Trato exquisito y todas las comodidades en el barrio del Carmen', 'categoriaArticulo' => 'Alojamiento', 'imagenArticulo' => 'img/alojamiento/hotel-adhoc.jpg', 'precioArticulo' => '125');
        $articulos[2] = array('idArticulo' => '3', 'nombreArticulo' => 'The Westin', 'descripcionArticulo' => 'Lujo y distinción en uno de los hoteles más elitistas de la ciudad', 'categoriaArticulo' => 'Alojamiento', 'imagenArticulo' => 'img/alojamiento/hotel-westin.jpg', 'precioArticulo' => '150');
        $articulos[3] = array('idArticulo' => '4', 'nombreArticulo' => 'Las Arenas', 'descripcionArticulo' => 'Hotel Balneario para disfrutar de unos días de relax y bienestar', 'categoriaArticulo' => 'Alojamiento', 'imagenArticulo' => 'img/alojamiento/hotel-lasarenas.jpg', 'precioArticulo' => '175');
        $articulos[4] = array('idArticulo' => '5', 'nombreArticulo' => 'Palau de la Mar', 'descripcionArticulo' => 'Alojate a solo un paso de distancia de la Opera de Valencia', 'categoriaArticulo' => 'Alojamiento', 'imagenArticulo' => 'img/alojamiento/hotel-palaudelamar.jpg', 'precioArticulo' => '200');
    } break;

    case 'Restaurantes': {
        $articulos[0] = array('idArticulo' => '1', 'nombreArticulo' => 'Canalla Bistro', 'descripcionArticulo' => 'Chef Ricard Camarena', 'categoriaArticulo' => 'Restaurantes', 'imagenArticulo' => 'img/restaurantes/rest-canallabistro.jpg', 'precioArticulo' => '50');
        $articulos[1] = array('idArticulo' => '2', 'nombreArticulo' => 'Riff', 'descripcionArticulo' => '2 estrellas Michelin', 'categoriaArticulo' => 'Restaurantes', 'imagenArticulo' => 'img/restaurantes/rest-riff.jpg', 'precioArticulo' => '60');
        $articulos[2] = array('idArticulo' => '3', 'nombreArticulo' => 'Vertical', 'descripcionArticulo' => 'Disfruta de sus espectaculares vistas', 'categoriaArticulo' => 'Restaurantes', 'imagenArticulo' => 'img/restaurantes/rest-vertical.jpg', 'precioArticulo' => '70');
        $articulos[3] = array('idArticulo' => '4', 'nombreArticulo' => 'La Sucursal', 'descripcionArticulo' => 'Cocina de fusión', 'categoriaArticulo' => 'Restaurantes', 'imagenArticulo' => 'img/restaurantes/rest-sucursal.jpg', 'precioArticulo' => '80');
        $articulos[4] = array('idArticulo' => '5', 'nombreArticulo' => 'El Poblet', 'descripcionArticulo' => 'Chef Quique Dacosta', 'categoriaArticulo' => 'Restaurantes', 'imagenArticulo' => 'img/restaurantes/rest-poblet.jpg', 'precioArticulo' => '90');
    } break;
        
    case 'Tours y Actividades': {
        $articulos[0] = array('idArticulo' => '1', 'nombreArticulo' => 'CAC', 'descripcionArticulo' => 'Descubre todo lo que ofrece la Ciudad de las Artes y las Ciencias', 'categoriaArticulo' => 'Tours y Actividades', 'imagenArticulo' => 'img/actividades/actividad-cac.jpg', 'precioArticulo' => '50');
        $articulos[1] = array('idArticulo' => '2', 'nombreArticulo' => 'Lo mejor de Valencia', 'descripcionArticulo' => 'Dejate llevar por el encanto del caso antiguo de Valencia recorriendo sus calles', 'categoriaArticulo' => 'Tours y Actividades', 'imagenArticulo' => 'img/actividades/actividad-lomejor.jpg', 'precioArticulo' => '55');
        $articulos[2] = array('idArticulo' => '3', 'nombreArticulo' => 'Albufera y Paella', 'descripcionArticulo' => 'Sumergete en la vida que rodea la Albufera de Valencia', 'categoriaArticulo' => 'Tours y Actividades', 'imagenArticulo' => 'img/actividades/actividad-albufera.jpg', 'precioArticulo' => '60');
        $articulos[3] = array('idArticulo' => '4', 'nombreArticulo' => 'Porcelana y Horchata', 'descripcionArticulo' => 'Visita la factoria de LLadro y degusta una tradicional horchata valenciana', 'categoriaArticulo' => 'Tours y Actividades', 'imagenArticulo' => 'img/actividades/actividad-porcelana.jpg', 'precioArticulo' => '65');
        $articulos[4] = array('idArticulo' => '5', 'nombreArticulo' => 'Tour Vinicola', 'descripcionArticulo' => 'Un recorrido por la región de Utiel-Requena para amantes del vino', 'categoriaArticulo' => 'Tours y Actividades', 'imagenArticulo' => 'img/actividades/actividad-vinicola.jpg', 'precioArticulo' => '70');
        
        
        
    } break;
}

        require_once('../lib/json/Services_JSON.php');
        $oJson = new Services_JSON();
        echo $oJson->encode($articulos);

?>
