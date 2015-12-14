$(document).ready(function() {
    
    cargarCategorias();
    $('#menu-horizontal').on('click', 'a', pedirDatos);
    $('.navbar-brand').click(recargarCarrusel);
    $('section').on('click', '.boton-comprar', anyadirACarrito);
    $('#icono-carrito').click(verCarrito);
    
});

$carrusel = $('section').html();
carrito = new Carrito();

function anyadirACarrito() {
    
    $articulo = $(this).parent().parent();
    
    nombre = $($articulo).find('.nombre-articulo').text();
    descripcion = $($articulo).find('.descripcion-articulo').text();
    precio = $($articulo).find('.precio-articulo').text();
    unidades = 1;
    
    articulo = new Articulo(nombre, descripcion, precio, unidades);
    
    carrito.ponerArticulo(articulo);
}

function verCarrito() {
    carrito.verArticulos();
}

function recargarCarrusel() {
    $('section').fadeOut("slow", function() {
        $('section').html($carrusel);
    });
    $('section').fadeIn("slow");
}

function cargarCategorias() {
    $.ajax({                  
        type: 'GET',
        dataType: 'json',
        url: './php/categorias.php',
        success: function(jsondata) {
                $.each(jsondata, function() {
                    $('<li><a class="categoria" href="#">' + this.nombre + '</a></li>').appendTo('#menu-horizontal');
                });
            }
        });
}

function pedirDatos() {   
    $categoria = $(this).text();

    $.ajax({                  
        type: 'GET',
        data: {categoria: "" + $categoria + ""},
        dataType: 'json',
        url: './php/articulos.php',
        success: function(jsondata) {
            $('section').fadeOut("slow", function() {
                $('section').html('<div class="container"><div class="row"><div class="col-sm-12"><h2>' + $categoria + '</h2><hr /></div></div><div class="row text-center" id="fila-articulos"></div><div class="row"><div class="col-sm-12"><hr /></div></div></div>');
                $.each(jsondata, function() {
                    $('<div class="col-md-4 col-sm-6 hero-feature articulo"><div class="thumbnail"><img src="' + this.imagenArticulo + '" alt="" class="imagen-articulos"><div class="caption"><h4 class="nombre-articulo">' + this.nombreArticulo + '</h4><h5>Desde <span class="precio-articulo">' + this.precioArticulo + '</span> €</h5><p class="descripcion-articulo">' + this.descripcionArticulo + '</p><h5><a href="#" class="btn btn-primary boton-comprar">Reservar</a> <a href="#" class="btn btn-default boton-mas-info">Mas Info</a></h5></div></div>').appendTo('#fila-articulos');
                });
                $('section').fadeIn("slow");
            });
        }
    });
}

