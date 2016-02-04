$(document).ready(function() {
    
    cargarCategorias();
    loginSession();
    $('#menu-horizontal').on('click', 'a', pedirDatos);
    $('.navbar-brand').click(recargarCarrusel);
    $('section').on('click', '.boton-reservar', mostrarModalAnyadir);
    $('#modal-anyadir').on('click', '#boton-anyadir', anyadirACarrito);
    $('#modal-anyadir').on('click', '.number-spinner button', manejarSpinner);
    $('#icono-carrito').click(mostrarModalCarrito);
    $('#modal-carrito').on('click', '.celda-accion button', eliminarDeCarrito);
    
    $('#logear').click(logearUsuario);
    $('#deslogear').click(deslogearUsuario);
    //$('#nuevoUsuario').click(nuevoUsuario);
    
    $('#vaciarCarrito').click(vaciarCarrito);
    $('#finalizarCompra').click(finalizarCompra);
    
    $('table').on('click', 'tr', slideUpDown);
});

$carrusel = $('section').html();
carrito = new Carrito();

function cargarCategorias() {
    $.ajax({                  
        type: 'GET',
        dataType: 'json',
        url: './php/categorias.php',
        success: function(jsondata) {
            $.each(jsondata, function() {
                $('<li><a href="#">' + this.nombreCategoria + '</a></li>').appendTo('#menu-horizontal');
            });
        }
    });
}

function pedirDatos() {   
    $categoria = $(this).text();
    var nombreCategoria = $categoria;
    
        $.ajax({                  
        type: 'POST',
        url: './php/ver_id_categoria.php',
        data: 'datos='+nombreCategoria,
        success: function(data) {
            var jsonIdCategoria = JSON.parse(data);
            idCategoria=jsonIdCategoria[0].idCategoria;
            
        }
    });

    
    switch ($categoria) {
        case 'Entradas': {
            idCategoria = 1;
        } break;
        case 'Alojamiento': {
            idCategoria = 2;
        } break;        
        case 'Restaurantes': {
            idCategoria = 3;
        } break;      
        case 'Tours y Actividades': {
            idCategoria = 4;
        } break;
    }

    $.ajax({                  
        type: 'GET',
        data: {categoria: idCategoria},
        dataType: 'json',
        url: './php/articulos.php',
        success: function(jsondata) {
            $('section').fadeOut("slow", function() {
                $('section').html('<div class="container"><div class="row"><div class="col-sm-12"><h2 id="categoria">' + $categoria + '</h2><hr /></div></div><div class="row text-center" id="fila-articulos"></div><div class="row"><div class="col-sm-12"><hr /></div></div></div>');
                $.each(jsondata, function() {
                    $('<div class="col-md-4 col-sm-6 hero-feature"><div class="thumbnail"><img src="' + this.imagenArticulo + '" alt="" /><div class="caption"><h4 class="nombre-articulo">' + this.nombreArticulo + '</h4><h5>Desde <span class="precio-articulo">' + this.precioArticulo + '</span> €</h5><p class="descripcion-articulo">' + this.descripcionArticulo + '</p><h5><a href="#" class="btn btn-primary boton-reservar">Reservar</a> <a class="btn btn-default boton-mas-info">Mas Info</a></h5></div></div>').appendTo('#fila-articulos');
                });
                $('section').fadeIn("slow");
            });
        }
    });
}

function recargarCarrusel() {
    $('section').fadeOut("slow", function() {
        $('section').html($carrusel);
    });
    $('section').fadeIn("slow");
}

function mostrarModalAnyadir() {
    
    $categoria = $('#categoria').text();
    $datosArticulo = $(this).parent().parent();
    $rutaImagen = $datosArticulo.parent().find('img').attr('src');
    $nombreArticulo = $($datosArticulo).find('.nombre-articulo').text();
    $descripcionArticulo = $($datosArticulo).find('.descripcion-articulo').text();
    $precioArticulo = $($datosArticulo).find('.precio-articulo').text();
    
    $('#modal-anyadir .modal-title span').text($categoria);
    
    htmlDatosProducto = '<div class="container-fluid"><div class="row"><div class="col-sm-6"><h2 id="nombre-articulo-modal">' + $nombreArticulo + '</h2><p id="descripcion-articulo-modal">' + $descripcionArticulo + '</p><br />';
    
    if ($categoria === 'Entradas') {
        htmlPrecioUnitario = '<p>Precio unitario: <span id="precio-unitario-modal">' + $precioArticulo + '</span> €</p></div>';
    } else if ($categoria === 'Alojamiento') {
        htmlPrecioUnitario = '<p>Precio por noche: <span id="precio-unitario-modal">' + $precioArticulo + '</span> €</p></div>';
    } else {
        htmlPrecioUnitario = '<p>Precio por persona: <span id="precio-unitario-modal">' + $precioArticulo + '</span> €</p></div>';
    }
    
    htmlDatosProducto = htmlDatosProducto + htmlPrecioUnitario;
    
    htmlImagenProducto = '<div class="col-sm-6 text-right"><div class="thumbnail"><img src="' + $rutaImagen + '" /></div></div></div>';
    
    htmlFechaReservaEntrada = '<hr /><div class="row fechaHora-modal"><div class="col-sm-2"><p class="reserva-label-modal" id="fechaEntrada-label-modal">Fecha</p></div><div class="col-sm-4"><div class="input-group date"><input type="text" class="form-control text-center fechaTextField-modal" id="fechaEntradaTextField-modal" readonly><span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span></div></div>';
    
    htmlFechaReservaSalida = '<div class="col-sm-2"><p class="reserva-label-modal">Salida</p></div><div class="col-sm-4"><div class="input-group date"><input type="text" class="form-control text-center fechaTextField-modal" id="fechaSalidaTextField-modal" readonly><span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span></div></div></div>';
    
    htmlHoraReserva = '<div class="col-sm-2"><p class="reserva-label-modal">Hora</p></div><div class="col-sm-4"><input type="text" class="form-control text-center" id="horaTextField-modal" readonly /></div></div>';
    
    if ($categoria === 'Alojamiento') {
        htmlAlert1 = '<div class="row text-center"><div class="col-sm-12"><div class="alert alert-danger" role="alert" id="alert1"><p>Selecciona las fechas de entrada y de salida</p></div></div></div>';
        htmlAlert2 = '<div class="row text-center"><div class="col-sm-12"><div class="alert alert-danger" role="alert" id="alert2"><p>La fecha de salida debe ser posterior a la de entrada</p></div></div></div>';
    } else {
        htmlAlert1 = '<div class="row text-center"><div class="col-sm-12"><div class="alert alert-danger" role="alert" id="alert1"><p>Selecciona una fecha</p></div></div></div>';
    }
    
    htmlNumUnidades = '<div class="row" id="num-entradas-modal"><div class="col-sm-4"><p class="reserva-label-modal">Numero de personas</p></div><div class="col-sm-4 col-sm-offset-4"><div class="input-group number-spinner"><span class="input-group-btn"><button class="btn btn-default" data-dir="dwn"><span class="glyphicon glyphicon-minus"></span></button></span><input type="text" class="form-control text-center" value="1" readonly><span class="input-group-btn"><button class="btn btn-default" data-dir="up"><span class="glyphicon glyphicon-plus"></span></button></span></div></div></div>';
    
    htmlPrecioTotal = '<hr /><div class="row" id="fila-precio-total"><div class="col-sm-6 col-sm-offset-6 text-right"><p id="precio-total-modal">Precio Total: ' + $precioArticulo + ' €</p></div></div></div>';
    
    if ($categoria === 'Alojamiento') {
        $('#modal-anyadir .modal-body').html(htmlDatosProducto + htmlImagenProducto + htmlFechaReservaEntrada + htmlFechaReservaSalida + htmlAlert1 + htmlAlert2 + htmlPrecioTotal);
        $('#modal-anyadir .modal-body #fechaEntrada-label-modal').text('Entrada');
    } else {
        $('#modal-anyadir .modal-body').html(htmlDatosProducto + htmlImagenProducto + htmlFechaReservaEntrada + htmlHoraReserva + htmlAlert1 + htmlNumUnidades + htmlPrecioTotal);
        if ($categoria === 'Entradas') {
            $('#modal-anyadir .modal-body #num-entradas-modal .reserva-label-modal').text('Numero de entradas');
        }
    }
    
    $('.input-group.date').datepicker({
        format: "dd/mm/yyyy",
        startDate: "new Date()",
        language: "es",
        autoclose: true,
        todayHighlight: true
    });
    
    $('.fechaTextField-modal').on('change', function() {
        if ($categoria === 'Alojamiento') {
            if ($('#fechaEntradaTextField-modal').val().length > 0 && $('#fechaSalidaTextField-modal').val().length > 0) {
                $('#alert1').hide();
                fechaEntradaString = $('#fechaEntradaTextField-modal').val();
                fechaSalidaString = $('#fechaSalidaTextField-modal').val();
                if (comprobarFechaValida(fechaEntradaString, fechaSalidaString)) {
                    $('#alert2').hide();
                    numNoches = calcularDiasDiferencia(fechaEntradaString, fechaSalidaString);
                    $('#modal-anyadir #fila-precio-total').html('<div class="col-sm-4"><p id="parrafo-num-noches-modal"><span id="num-noches-modal">' + numNoches + '</span> noches</p></div><div class="col-sm-5 col-sm-offset-3 text-right"><p id="precio-total-modal">Precio Total: ' + $precioArticulo + ' €</p></div>');
                    mostrarPrecioTotal(numNoches);
                }
            }
        } else {
            if ($categoria === 'Tours y Actividades') {
                $('#horaTextField-modal').attr('value', '10:00 h');
            } else {
                $('#horaTextField-modal').attr('value', '21:00 h');
            }
            $('#alert1').hide();
        }
    });
    
    $('#modal-anyadir').modal('show');
    
}

function comprobarFechaValida(fechaEntradaString, fechaSalidaString) {
    diaEntrada = fechaEntradaString.substring(0,2);
    mesEntrada = fechaEntradaString.substring(3,5);
    anyoEntrada = fechaEntradaString.substring(6,10);
    diaSalida = fechaSalidaString.substring(0,2);
    mesSalida = fechaSalidaString.substring(3,5);
    anyoSalida = fechaSalidaString.substring(6,10);
    
    if (anyoSalida > anyoEntrada) {
        return true;
    } else if (anyoSalida < anyoEntrada) {
        return false;
    } else if (mesSalida > mesEntrada) {
        return true;
    } else if (mesSalida < mesEntrada) {
        return false;
    } else if (diaSalida > diaEntrada) {
        return true;
    } else {
        return false;
    }
}

function calcularDiasDiferencia(fechaEntradaString, fechaSalidaString) {
    diaEntrada = parseInt(fechaEntradaString.substring(0,2));
    mesEntrada = parseInt(fechaEntradaString.substring(3,5));
    anyoEntrada = parseInt(fechaEntradaString.substring(6,10));
    diaSalida = parseInt(fechaSalidaString.substring(0,2));
    mesSalida = parseInt(fechaSalidaString.substring(3,5));
    anyoSalida = parseInt(fechaSalidaString.substring(6,10));
    
    fechaEntrada = new Date(anyoEntrada, mesEntrada, diaEntrada);
    fechaSalida = new Date(anyoSalida, mesSalida, diaSalida);

    
    tiempoDif = fechaSalida.getTime() - fechaEntrada.getTime();
    return Math.ceil(tiempoDif / (1000 * 3600 * 24));
}

function manejarSpinner() {    
    var btn = $(this),
		oldValue = btn.closest('.number-spinner').find('input').val(),
		newVal = 0;
	
	if (btn.attr('data-dir') == 'up') {
		newVal = parseInt(oldValue) + 1;
	} else {
		if (oldValue > 1) {
			newVal = parseInt(oldValue) - 1;
		} else {
			newVal = 1;
		}
	}
	btn.closest('.number-spinner').find('input').val(newVal);
    mostrarPrecioTotal(newVal);
}

function mostrarPrecioTotal(numUnidades) {
    $precioUnitario = $('#modal-anyadir #precio-unitario-modal').text();
    precioTotal = $precioUnitario * numUnidades;
    $('#modal-anyadir #precio-total-modal').text('Precio Total: ' + precioTotal + ' €');
}

function mostrarModalCarrito() {
    $('#modal-carrito tbody').empty();
    $('#modal-carrito tfoot').empty();
    total = 0;

    for (i = 0; i < carrito.reservas.length; i++) {
        subtotal = carrito.reservas[i].precio * carrito.reservas[i].unidades;
        
        htmlImagen = '<tr id="reserva' + i + '"><td class="text-center celda-imagen"><div class="thumbnail"><img class="imagen-carrito" src="' + carrito.reservas[i].rutaImagen + '" /></div></td>';
        
        if (carrito.reservas[i].categoria === 'Alojamiento') {
            htmlDetallesArticulo = '<td class="text-center celda-detalles-articulo"><p>' + carrito.reservas[i].categoria + ' - ' + carrito.reservas[i].nombre + '</p><p>' + carrito.reservas[i].fechaEntrada + ' - ' + carrito.reservas[i].fechaSalida + '</p><p class="descripcion-gdrid-down" hidden>' + carrito.reservas[i].descripcion + '</p></td>';
        } else {
            htmlDetallesArticulo = '<td class="text-center celda-detalles-articulo"><p>' + carrito.reservas[i].categoria + ' - ' + carrito.reservas[i].nombre + '</p><p>' + carrito.reservas[i].fechaEntrada + ' - ' + carrito.reservas[i].hora + '</p><p class="descripcion-gdrid-down" hidden>' + carrito.reservas[i].descripcion + '</p></td>';
        }
        
        if (carrito.reservas[i].categoria === 'Alojamiento') {
            htmlCantidad = '<td class="text-center celda-cantidad">' + carrito.reservas[i].unidades + ' noches</td>';
        } else if (carrito.reservas[i].categoria === 'Entradas') {
            htmlCantidad = '<td class="text-center celda-cantidad">' + carrito.reservas[i].unidades + ' entradas</td>';
        } else {
            htmlCantidad = '<td class="text-center celda-cantidad">' + carrito.reservas[i].unidades + ' personas</td>';
        }
        
        htmlPrecio = '<td class="text-center celda-precio">' + carrito.reservas[i].precio + ' €</td>';
        
        htmlSubTotal = '<td class="text-center celda-subtotal">' + subtotal + ' €</td>';
        
        htmlAccion = '<td class="text-center celda-accion"><button type="button" title="" class="btn btn-danger tool-tip" data-original-title="Remove"><i class="fa fa-trash-o"></i></button></td></tr>';
        
        $(htmlImagen + htmlDetallesArticulo + htmlCantidad + htmlPrecio + htmlSubTotal + htmlAccion).appendTo('#modal-carrito tbody');
        total = total + subtotal;
    }
    
    $('<tr><td class="text-right"></td><td colspan="5" class="text-right celda-total">Total: ' + total + ' €</td></tr>').appendTo('#modal-carrito tfoot');
    $('#modal-carrito').modal('show');
}

function anyadirACarrito() {
    $contenidoModal = $(this).parent().parent();
    nombre = $contenidoModal.find('#nombre-articulo-modal').text();
    categoria = $contenidoModal.find('#categoria-modal').text();
    descripcion = $contenidoModal.find('#descripcion-articulo-modal').text();
    fechaEntrada = $contenidoModal.find('#fechaEntradaTextField-modal').val();
    
    if (categoria === 'Alojamiento') {
        fechaSalida = $contenidoModal.find('#fechaSalidaTextField-modal').val();
        hora =  null;
    } else {
        fechaSalida = null;
        hora = $contenidoModal.find('#horaTextField-modal').val();
        unidades = parseInt($contenidoModal.find('.number-spinner input').val());
    }
    
    precio = $contenidoModal.find('#precio-unitario-modal').text();
    rutaImagen = $contenidoModal.find('img').attr('src');
    
    if (fechaSalida === null) {
        if (fechaEntrada.length === 0) {
            $('#alert1').show();
        } else {
            reserva = new Reserva(nombre, categoria, descripcion, fechaEntrada, fechaSalida, hora, precio, unidades, rutaImagen);
            reservaExistente = carrito.ponerReserva(reserva);
            $('#modal-anyadir').modal('hide');
            if (!reservaExistente) {
                $numReservas = parseInt($('#icono-carrito .badge').text());
                $numReservas++;
                $('#icono-carrito .badge').text($numReservas);
            }
        }
    } else {
        if (fechaEntrada.length === 0 || fechaSalida.length === 0) {
            $('#alert1').show();
        } else {
            fechaEntradaString = $('#fechaEntradaTextField-modal').val();
            fechaSalidaString = $('#fechaSalidaTextField-modal').val();
            if (comprobarFechaValida(fechaEntradaString, fechaSalidaString)) {
                unidades = parseInt($contenidoModal.find('#num-noches-modal').text());
                reserva = new Reserva(nombre, categoria, descripcion, fechaEntrada, fechaSalida, hora, precio, unidades, rutaImagen);
                reservaExistente = carrito.ponerReserva(reserva);
                $('#modal-anyadir').modal('hide');
                if (!reservaExistente) {
                    $numReservas = parseInt($('#icono-carrito .badge').text());
                    $numReservas++;
                    $('#icono-carrito .badge').text($numReservas);
                }
            } else {
                $('#alert2').show();
            }
        }
    }
}

function eliminarDeCarrito() {
    $filaReserva = $(this).parent().parent();
    idFilaReserva = $($filaReserva).attr('id');
    indexReserva = idFilaReserva.substring(7,8);
    carrito.eliminarReserva(indexReserva);
    $numReservas = parseInt($('#icono-carrito .badge').text());
    $numReservas--;
    $('#icono-carrito .badge').text($numReservas);
    mostrarModalCarrito();
}

function loginSession() {
    
    $.ajax({                  
        type: 'POST',
        url: './php/comprobar_login.php',
        success: function(data) {
            if(data==false)
                {
                    //Nada  
                }
            else
                {
                    $('#enlace-login').text('Bienvenido '+data); 
                    $('#logear').css("display", "none");
                    $('#deslogear').css("display", "block");
                    $('#grupoNombre').css("display", "none");
                    $('#grupoContrasena').css("display", "none");
                }
            }
    });                      

}

function logearUsuario(){
    
    var nombreUsuario = document.getElementById("nombreUsuario");   
    var contrasenaUsuario = document.getElementById("contrasenaUsuario");
    var bordeValidacionLogin = document.getElementById("bordeValidacionLogin");   
    var validacionLogin = document.getElementById("validacionLogin");    
    
    var dataString = 'nombreUsuario='+nombreUsuario.value+'&contrasenaUsuario='+contrasenaUsuario.value;
      
    if(nombreUsuario.validity.valid && contrasenaUsuario.validity.valid){
        $.ajax({                  
            type: "POST",
            url: "./php/usuarios.php",
            data: dataString,
            success: function(data) {                
                if(data=="usuario"){
                    $('#validacionLogin').css("display", "none");
                    $('.bordeValidacionLogin').css("display", "none");
                    $('#enlace-login').text('Bienvenido '+nombreUsuario.value);
                    $('#modal-login').modal('toggle');
                    $('#logear').css("display", "none");
                    $('#deslogear').css("display", "block");
                    $('#grupoNombre').css("display", "none");
                    $('#grupoContrasena').css("display", "none"); 
                    $('#enlace-admin').css("display", "none");

                }
                else if(data=="administrador")
                {
                    window.location = './php/admin.php';
                    $('#enlace-admin').css("display", "block");
                }
                else{
                    $('#validacionLogin').css("display", "block");
                    $('.bordeValidacionLogin').css("display", "block");
                    $('#validacionLogin').text('Usuario o contraseña incorrectos.');
                }
            }
        });
    }
    else{
        if(!nombreUsuario.validity.valid && contrasenaUsuario.validity.valid)
        {
            $('#validacionLogin').text('Por favor, introduzca un nombre de usuario.');
        }
        else if(!contrasenaUsuario.validity.valid && nombreUsuario.validity.valid)
        {
            $('#validacionLogin').text('Por favor, introduzca una constraseña.');
        }
        else
        {
            $('#validacionLogin').text('Por favor, introduzca unusuario y contraseña.'); 
        }
        
        $('#validacionLogin').css("display", "block");
        $('.bordeValidacionLogin').css("display", "block");

    }
}

function deslogearUsuario(){
            $.ajax({                  
                type: "POST",
                url: "./php/logout.php",
                success: function(data) {
                    $('#nombreUsuario').val('');
                    $('#contrasenaUsuario').val('');
                    $('#enlace-login').text('Login');
                    $('#deslogear').css("display", "none");
                    $('#logear').css("display", "block");
                    $('#grupoNombre').css("display", "block");
                    $('#grupoContrasena').css("display", "block");
                    $('#enlace-admin').css("display", "none");
                }
            });
}

/*
function nuevoUsuario(event){
    
    var nombreUsuarioNuevo = document.getElementById("nombreUsuarioNuevo");  
    var emailUarioNuevo = document.getElementById("emailUarioNuevo");  
    var contrasenaUsuarioNuevo = document.getElementById("contrasenaUsuarioNuevo");
    var repetirContrasenaUsuarioNuevo = document.getElementById("repetirContrasenaUsuarioNuevo");
    
    var dataString = 'nombreUsuarioNuevo='+nombreUsuarioNuevo.value+'&emailUarioNuevo='+emailUarioNuevo.value+'&contrasenaUsuarioNuevo='+contrasenaUsuarioNuevo.value;
    //alert(dataString);
      
    if(nombreUsuarioNuevo.validity.valid && nombreUsuarioNuevo.validity.valid && contrasenaUsuarioNuevo.validity.valid && repetirContrasenaUsuarioNuevo.validity.valid){
        
        //event.preventDefault();
        
        if(contrasenaUsuarioNuevo.value!=repetirContrasenaUsuarioNuevo.value){
            //alert("Las contraseñas no coinciden");
        }
        else{
            //alert("Validado correctamente");  
            $.ajax({                  
                type: "POST",
                url: "./php/nuevo_usuario.php",
                data: dataString,
                success: function(data) {
                    //alert(data);
                    if(data=="UsuarioExiste")
                    {
                        $('#nombreUsuarioNuevo').val('');
                        
                        if(!nombreUsuarioNuevo.validity.valid){
                            nombreUsuarioNuevo.setCustomValidity('El usuario ya existe');  
                        }
                    }
                        
                    if(data=="1"){
                        $('#modal-login').modal('hide');
                    }else{
                        $('#modal-login').modal('show');
                    }
                }
            });
        }
    }
    else{
        //No pasa la validacion.
        //alert("No validado");
    }
}*/

function finalizarCompra(){
    var recogeCarrito = JSON.stringify(carrito)

    $.ajax({                  
        type: 'POST',
        url: './php/finalizar_compra.php',
        data: 'datos='+recogeCarrito,
        success: function(data) {
            if(data=="1"){
                vaciarCarrito();
                alert("Pago realizado con éxito");
            }else{
                if(data=="0"){
                    $('#validacionLogin').css("display", "block");
                    $('.bordeValidacionLogin').css("display", "block");
                    $('#validacionLogin').text('Debes estar logeado para poder finalizar una compra.');
                    $('body').css("padding-right", "0px");
                    $('#modal-login').modal('toggle');
                    alert("Usuario no logeado.");
                }else{
                    alert("¡No hay artículos seleccionados!");
                }

            }

        }
    });
}

function vaciarCarrito(){
    
    carrito.reservas=[];
    $('#icono-carrito .badge').text(0);
}

function slideUpDown(){
    
    $(this).parent().children("tr").children("td:nth-child(2)").children("p:nth-child(3)").hide();
    $(this).children("td:nth-child(2)").children("p:nth-child(3)").slideToggle();

    
}
