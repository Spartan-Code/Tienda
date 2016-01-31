$(document).ready(function() {
    
    //$('#menu-menuCategorias').on('click', 'a', administrarcategoria);
    $('#usuarios').click(mostrarUsuarios);
    $('#categorias').click(mostrarCategorias);
    $('#articulos').click(mostrarArticulos);
    $('#pedidos').click(mostrarPedidos);

    $('#insertarActualizarArticulo').click(insertarArticulo);
    
});

function mostrarUsuarios(){
    cargarUsuarios();
    $('#tablaArticulos').hide();
    $('#tablaCategorias').hide();
    $('#tablaUsuarios').show();
    $('#tablaPedidos').hide();
}

function mostrarCategorias(){
    $('#tablaArticulos').hide();
    $('#tablaCategorias').show();
    $('#tablaUsuarios').hide();
    $('#tablaPedidos').hide();
}

function mostrarArticulos(){
    $('#tablaArticulos').show();
    $('#tablaCategorias').hide();
    $('#tablaUsuarios').hide();
    $('#tablaPedidos').hide();
}

function mostrarPedidos(){
    alert("pedidos");
}


function insertarArticulo() {
    var formularioInsertArticulo =$('#formularioInsertArticulo').serialize();

    var nombreArticulo = document.forms["formularioInsertArticulo"]["nombreArticulo"];
    var descripcionArticulo = document.forms["formularioInsertArticulo"]["descripcionArticulo"];
    var categoriaArticulo = document.forms["formularioInsertArticulo"]["categoriaArticulo"];
    var precioArticulo = document.forms["formularioInsertArticulo"]["precioArticulo"];
    var imagenArticulo = document.forms["formularioInsertArticulo"]["imagenArticulo"];
    var codigoArticulo = document.forms["formularioInsertArticulo"]["codigoArticulo"];
    
    var tipoAccion = $('#insertarActualizarArticulo').text();
    
    if(tipoAccion=='Insertar'){
        
        if(nombreArticulo.validity.valid && descripcionArticulo.validity.valid && categoriaArticulo.validity.valid && precioArticulo.validity.valid && imagenArticulo.validity.valid && codigoArticulo.validity.valid){

            $('#validacionArticulos').css("display", "none");
            $('.bordeValidacionArticulos').css("display", "none");

            $.ajax({                  
                type: 'POST',
                url: '../php/back/insertar_articulos_back.php',
                data: 'datos='+formularioInsertArticulo,
                success: function(data) {

                    if(data==true)
                    {
                        $('#validacionArticulos').css("display", "block");
                        $('.bordeValidacionArticulos').css("display", "block");
                        $('#validacionArticulos').text('El articulo ya existe. ');
                    }
                    else
                    {
                        $('#validacionArticulos').css("display", "none");
                        $('.bordeValidacionArticulos').css("display", "none");
                        alert("Insertado correctamente.");
                        alert(data);

    /*                  var grid = jQuery("#tArticulos");
                        grid.trigger("reloadGrid");*/
                    }
                }
            });
        }
        else{
            $('#validacionArticulos').css("display", "block");
            $('.bordeValidacionArticulos').css("display", "block");
            $('#validacionArticulos').text('Rellene todos los campos antes de insertar. ');
        }

    }
    else{
        if(nombreArticulo.validity.valid && descripcionArticulo.validity.valid && categoriaArticulo.validity.valid && precioArticulo.validity.valid && imagenArticulo.validity.valid && codigoArticulo.validity.valid){

            $('#validacionArticulos').css("display", "none");
            $('.bordeValidacionArticulos').css("display", "none");

            $.ajax({                  
                type: 'POST',
                url: '../php/back/actualizar_articulos_back.php',
                data: 'datos='+formularioInsertArticulo,
                success: function(data) {

                }
            });
        }
        else{
            $('#validacionArticulos').css("display", "block");
            $('.bordeValidacionArticulos').css("display", "block");
            $('#validacionArticulos').text('Rellene todos los campos antes de insertar. ');
        }

    }


}



/*function administrarcategoria(){
    
    $categoria = $(this).text();
    
    alert($categoria);
    
    switch ($categoria) {
        case 'Usuarios': {
            alert("Usuarios");
            idCategoria = 1;
        } break;
        case 'categorias': {
            idCategoria = 2;
        } break;        
        case 'articulos': {
            idCategoria = 3;
        } break;      
        case 'pedidos': {
            idCategoria = 4;
        } break;
    }*/
    
/*     $.ajax({                  
        type: 'GET',
        data: {categoria: idCategoria},
        dataType: 'json',
        url: './php/admin-usuarios.php',
        success: function(jsondata) {
            
        }
     });
}*/

