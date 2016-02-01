$(document).ready(function() {
    
    //$('#menu-menuCategorias').on('click', 'a', administrarcategoria);
    $('#usuarios').click(mostrarUsuarios);
    $('#categorias').click(mostrarCategorias);
    $('#articulos').click(mostrarArticulos);
    $('#pedidos').click(mostrarPedidos);

    $('#insertarActualizarArticulo').click(insertarArticulo);
    $('#insertarActualizarCategoria').click(insertarCategoria);
    
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
    $('#tablaArticulos').hide();
    $('#tablaCategorias').hide();
    $('#tablaUsuarios').hide();
    $('#tablaPedidos').show();
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
    
    alert(formularioInsertArticulo);
    
    
    if(tipoAccion=='Insertar'){
        
        if(nombreArticulo.validity.valid && descripcionArticulo.validity.valid && categoriaArticulo.validity.valid && precioArticulo.validity.valid && imagenArticulo.validity.valid && codigoArticulo.validity.valid){

            $('#validacionArticulos').css("display", "none");
            $('.bordeValidacionArticulos').css("display", "none");

            $.ajax({                  
                type: 'POST',
                url: '../php/back/insertar_articulos_back.php',
                data: 'datos=&'+formularioInsertArticulo,
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

                        var grid = jQuery("#tArticulos");
                        grid.trigger("reloadGrid");
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
                data: 'datos=&'+formularioInsertArticulo,
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


function insertarCategoria() {
    var formularioInsertCategoria =$('#formularioInsertCategoria').serialize();

    var nombreCategoria = document.forms["formularioInsertCategoria"]["nombreCategoria"];
    
    var tipoAccion = $('#insertarActualizarCategoria').text();
    
    alert(formularioInsertCategoria);
    
    
    if(tipoAccion=='Insertar'){
        
        if(nombreCategoria.validity.valid){

            $('#validacionCategorias').css("display", "none");
            $('.bordeValidacionCategoria').css("display", "none");

            $.ajax({                  
                type: 'POST',
                url: '../php/back/insertar_categorias_back.php',
                data: 'datos=&'+formularioInsertCategoria,
                success: function(data) {

                    if(data==true)
                    {
                        $('#validacionCategoria').css("display", "block");
                        $('.bordeValidacionCategoria').css("display", "block");
                        $('#validacionCategoria').text('La categoría ya existe. ');
                    }
                    else
                    {
                        $('#validacionCategoria').css("display", "none");
                        $('.bordeValidacionCategoria').css("display", "none");
                        alert("Insertada correctamente.");
                        alert(data);

                        var grid = jQuery("#tCategorias");
                        grid.trigger("reloadGrid");
                    }
                }
            });
        }
        else{
            $('#validacionCategoria').css("display", "block");
            $('.bordeValidacionCategoria').css("display", "block");
            $('#validacionCategoria').text('Rellene todos los campos antes de insertar. ');
        }

    }
    else{
        
        if(nombreCategoria.validity.valid){

            $('#validacionCategoria').css("display", "none");
            $('.bordeValidacionCategoria').css("display", "none");

            $.ajax({                  
                type: 'POST',
                url: '../php/back/actualizar_categorias_back.php',
                data: 'datos=&'+formularioInsertCategoria,
                success: function(data) {
                    alert(data);

                }
            });
        }
        else{
            $('#validacionCategoria').css("display", "block");
            $('.bordeValidacionCategoria').css("display", "block");
            $('#validacionCategoria').text('Rellene todos los campos antes de insertar. ');
        }
    }
}







