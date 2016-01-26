$(document).ready(function() {
    
    $('.boton-admin').click(administrarcategoria);
    
});

function administrarcategoria(){
    
    $categoria = $(this).text();
    
    switch ($categoria) {
        case 'Usuarios': {
            idCategoria = 1;
        } break;
        case 'Categorias': {
            idCategoria = 2;
        } break;        
        case 'Articulos': {
            idCategoria = 3;
        } break;      
        case 'Pedidos': {
            idCategoria = 4;
        } break;
    }
    
     $.ajax({                  
        type: 'GET',
        data: {categoria: idCategoria},
        dataType: 'json',
        url: './php/admin-usuarios.php',
        success: function(jsondata) {
            
        }
     });
}