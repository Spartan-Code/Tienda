$(document).ready(function() {
    
    //$('#menu-menuCategorias').on('click', 'a', administrarcategoria);
    $('#usuarios').click(mostrarUsuarios);
    $('#categorias').click(mostrarCategorias);
    $('#articulos').click(mostrarArticulos);
    $('#pedidos').click(mostrarPedidos);

    $('#insertarArticulo').click(insertarArticulo);
    
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
    
    var jsn = JSON.stringify(formularioInsertArticulo);

    alert(jsn);
    
    $.ajax({                  
        type: 'POST',
        url: '../php/back/insertar_articulos_back.php',
        data: 'datos='+formularioInsertArticulo,
        success: function(data) {
            
/*            if(data=="1"){
                alert("ok "+data);
            }else{
                alert(data);

            }*/

        }
    });
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

