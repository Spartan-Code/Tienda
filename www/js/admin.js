$(document).ready(function() {
    
    $('#menu-menuCategorias').on('click', 'a', administrarcategoria);
    
});

function administrarcategoria(){
    
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
    }
    
/*     $.ajax({                  
        type: 'GET',
        data: {categoria: idCategoria},
        dataType: 'json',
        url: './php/admin-usuarios.php',
        success: function(jsondata) {
            
        }
     });*/
}

