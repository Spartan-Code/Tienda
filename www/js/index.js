//Anyade la funcion click a los tags a con la clase categoria.
$(document).ready(function() { 
    document.getElementsByClassName("categorias").click=pedirDatos;
    
    
});


function pedirDatos(numeroDeCategoria) {   
    $.ajax({                  
        type: 'GET',
        data: {categoria: +numeroDeCategoria},
            
        dataType: 'json',
        url: './php/categorias.php',
        success: function(jsondata){
            $.each(jsondata,function(){
                alert('Nombre: ' + this.nombreArticulo + ', Categoria: ' + this.categoriaArticulo);
            });
        }
    });
};
