function cargarCategoriasBack() {

    jQuery("#tCategoria").jqGrid({
        url:'back/categorias_back.php',
        datatype: "json",
        colNames:['ID Categoría','Nombre Categoría'],
        colModel:[
            {name:'idCategoria',index:'idCategoria', autowidth: true, align: "center", sorttype: "integer"},	
            {name:'nombreCategoria',index:'nombreCategoria', autowidth: true, align: "center"},
        ],
        rowNum:10,
        rowList:[10,20,30],
        pager: '#pCategoria',
        sortname: 'id',
        viewrecords: true,
        sortorder: "desc",
        width: 600,
        height: 230,
        //shrinkToFit: false,
        loadonce: true,
        caption:"Categorias insertados en la base de datos"

    });
    jQuery("#tCategoria").jqGrid('navGrid','#pCategoria',{edit:false,add:false,del:false});

    
    //Select
    jQuery("#categoriaSelect").click( function(){
        var id = jQuery("#tCategoria").jqGrid('getGridParam','selrow');
        if (id)	{
            var ret = jQuery("#tCategoria").jqGrid('getRowData',id);
            alert("idCategoria="+ret.idCategoria+" nombreCategoria="+ret.nombreCategoria);
        } else { alert("¡No hay ninguna fila seleccionada!");}
    });
    
    
    //Insert
    jQuery("#categoriaInsert").click( function(){
        $('#modal-categorias').modal('show');
        $('#insertarActualizarCategoria').text('Insertar');
        document.getElementById("formularioInsertCategoria").reset(); 
    });
    
    
    //Update
    jQuery("#categoriaUpdate").click( function(){
        $('#modal-categorias').modal('show');
        $('#insertarActualizarCategoria').text('Actualizar');
        
        var id = jQuery("#tCategoria").jqGrid('getGridParam','selrow');
        var dataString = 'idCategoria='+id;
          
        $.ajax({                  
            type: 'POST',
            url: '../php/back/ver_categorias_back.php',
            data: dataString,
            success: function(data) {
                var jsonCategorias = JSON.parse(data);
                $('#nombreCategoria').val(jsonCategorias[0].nombreCategoria);
            }
        });
    });

    
    //Delete
    jQuery("#categoriaDelete").click( function(){
        var id = jQuery("#tCategoria").jqGrid('getGridParam','selrow');

        var dataString = 'idCategoria='+id;
        
        $.ajax({                  
            type: 'POST',
            url: '../php/back/borrar_categorias_back.php',
            data: dataString,
            success: function(data) {
                        if (id) {
                            var ret = jQuery("#tCategoria").jqGrid('getRowData', id);
                        } else {
                            alert("Seleccione una fila para borrarla.");
                        }
                        var su = jQuery("#tCategoria").jqGrid('delRowData', ret.idCategoria);
            }
        });
        
        
    });
    
}
