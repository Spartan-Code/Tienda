$(document).ready(function() {
    
    loginSessionBack();
    
    //$('#menu-menuCategorias').on('click', 'a', administrarcategoria);
    $('#usuarios').click(mostrarUsuarios);
    $('#categorias').click(mostrarCategorias);
    $('#articulos').click(mostrarArticulos);
    $('#pedidos').click(mostrarPedidos);

    $('#insertarActualizarArticulo').click(insertarArticulo);
    $('#insertarActualizarCategoria').click(insertarCategoria);
    $('#insertarActualizarUsuario').click(insertarUsuario);
    
    //$('#salir-back').click(deslogearAdministrador);

    cargarArticulosBack();
    cargarCategoriasBack();
    cargarUsuarios();
    cargarPedidos();
});

function mostrarUsuarios(){

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
    
    $('#codigoArticulo').prop("disabled", false);
    
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

                        $("#tArticulos").setGridParam({datatype:'json', page:1}).trigger('reloadGrid');
                        
                        $('#modal-articulos').modal('hide');
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
        $('#codigoArticulo').prop("disabled", true);
        
        
        if(nombreArticulo.validity.valid && descripcionArticulo.validity.valid && categoriaArticulo.validity.valid && precioArticulo.validity.valid && imagenArticulo.validity.valid && codigoArticulo.validity.valid){

            $('#validacionArticulos').css("display", "none");
            $('.bordeValidacionArticulos').css("display", "none");

            $.ajax({                  
                type: 'POST',
                url: '../php/back/actualizar_articulos_back.php',
                data: 'datos=&'+formularioInsertArticulo,
                success: function(data) {
                    $('#modal-articulos').modal('hide');
                    $("#tArticulos").setGridParam({datatype:'json', page:1}).trigger('reloadGrid');

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

                        $("#tCategoria").setGridParam({datatype:'json', page:1}).trigger('reloadGrid');
                        
                        $('#modal-categorias').modal('hide');
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
                    $("#tCategoria").setGridParam({datatype:'json', page:1}).trigger('reloadGrid');
                    $('#modal-categorias').modal('hide');
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


function insertarUsuario() {
        
    $('#idUsuario').prop("disabled", false);
    
    var formularioInsertUsuario =$('#formularioInsertUsuario').serialize();
    
    $('#idUsuario').prop("disabled", true);

    var idUsuario = document.forms["formularioInsertUsuario"]["idUsuario"];
    var nombreUsuario = document.forms["formularioInsertUsuario"]["nombreUsuario"];
    var emailUsuario = document.forms["formularioInsertUsuario"]["emailUsuario"];
    var rolUsuario = document.forms["formularioInsertUsuario"]["rolUsuario"];
    var contrasenaUsuario = document.forms["formularioInsertUsuario"]["contrasenaUsuario"];
    
    var tipoAccion = $('#insertarActualizarUsuario').text();

    if(tipoAccion=='Insertar'){
          
        if(nombreUsuario.validity.valid  && rolUsuario.validity.valid && contrasenaUsuario.validity.valid){

            if(emailUsuario.validity.valid){
                $('#validacionArticulos').css("display", "none");
                $('.bordeValidacionUsuarios').css("display", "none");

                $.ajax({                  
                    type: 'POST',
                    url: '../php/back/insertar_usuarios_back.php',
                    data: 'datos=&'+formularioInsertUsuario,
                    success: function(data) {

                        if(data==true)
                        {
                            $('#validacionUsuarios').css("display", "block");
                            $('.bordeValidacionUsuarios').css("display", "block");
                            $('#validacionUsuarios').text('El usuario ya existe. ');
                        }
                        else
                        {
                            $('#validacionUsuarios').css("display", "none");
                            $('.bordeValidacionUsuarios').css("display", "none");

                            $("#tUsuarios").setGridParam({datatype:'json', page:1}).trigger('reloadGrid');

                            $('#modal-usuarios').modal('hide');
                        }
                    }
                });              
            }
            else
            {
                $('#validacionUsuarios').css("display", "block");
                $('.bordeValidacionUsuarios').css("display", "block");
                $('#validacionUsuarios').text('Formato de email no valido. ');      
            }
        }
        else{
            $('#validacionUsuarios').css("display", "block");
            $('.bordeValidacionUsuarios').css("display", "block");
            $('#validacionUsuarios').text('Rellene todos los campos antes de insertar. ');
        }

    }
    else{
        
        $('#bloqueIdUsuario').show();
        
        if(nombreUsuario.validity.valid && rolUsuario.validity.valid && contrasenaUsuario.validity.valid){
            
            if(emailUsuario.validity.valid){
                $('#validacionUsuarios').css("display", "none");
                $('.bordeValidacionUsuarios').css("display", "none");

                $.ajax({                  
                    type: 'POST',
                    url: '../php/back/actualizar_usuarios_back.php',
                    data: 'datos=&'+formularioInsertUsuario,
                    success: function(data) {
                        $("#tUsuarios").setGridParam({datatype:'json', page:1}).trigger('reloadGrid');
                        $('#modal-usuarios').modal('hide');
                    }
                });
            }
            else{
                $('#validacionUsuarios').css("display", "block");
                $('.bordeValidacionUsuarios').css("display", "block");
                $('#validacionUsuarios').text('Formato de email no valido. ');   
            }

        }
        else{
            $('#validacionUsuarios').css("display", "block");
            $('.bordeValidacionUsuarios').css("display", "block");
            $('#validacionUsuarios').text('Rellene todos los campos antes de insertar. ');
        }
    }
}


function loginSessionBack() {
    
    $.ajax({                  
        type: 'POST',
        url: '../php/comprobar_login.php',
        success: function(data) {
            if(data=="no_usuario")
                {
                    //Nada  
                }
            else
                {
                    $('#enlace-login-back').text('Bienvenido '+data); 
                }
            }
    });                      

}


function deslogearAdministrador(){
    alert("asdf");
            $.ajax({                  
                type: "POST",
                url: "../php/logout.php",
                success: function(data) {

                }
            });
}

