function cargarArticulosBack() {

    jQuery("#tArticulos").jqGrid({
        url:'back/articulos_back.php',
        datatype: "json",
        colNames:['idArticulo','nombreArticulo', 'descripcionArticulo', 'idCategoria','precioArticulo', 'imagenArticulo', 'codigoArticulo', 'urlArticulo'],
        colModel:[
            {name:'idArticulo',index:'idArticulo', width: 110, align: "center", sorttype: "integer"},	
            {name:'nombreArticulo',index:'nombreArticulo', autowidth: true, align: "center"},
            {name:'descripcionArticulo',index:'descripcionArticulo', autowidth: true, align: "center"},
            {name:'idCategoria',index:'idCategoria', width: 120, align: "center"},
            {name:'precioArticulo',index:'precioArticulo', width: 110, align: "center", sorttype: "integer"},
            {name:'imagenArticulo',index:'imagenArticulo', autowidth: true, align: "center"},
            {name:'codigoArticulo',index:'codigoArticulo', width: 110, align: "center"},
            {name:'urlArticulo',index:'urlArticulo', autowidth: true, align: "center"},
        ],
        rowNum:10,
        rowList:[10,20,30],
        pager: '#pArticulos',
        sortname: 'id',
        viewrecords: true,
        sortorder: "desc",
        autowidth: true,
        height: 230,
        //shrinkToFit: false,
        loadonce: true,
        caption:"Articulos insertados en la base de datos"

    });
    jQuery("#tArticulos").jqGrid('navGrid','#pArticulos',{edit:false,add:false,del:false});

    //Select
    jQuery("#articuloSelect").click( function(){
        var id = jQuery("#tArticulos").jqGrid('getGridParam','selrow');
        if (id)	{
            var ret = jQuery("#tArticulos").jqGrid('getRowData',id);
            alert("idArticulo="+ret.idArticulo+" nombreArticulo="+ret.nombreArticulo);
        } else { alert("¡No hay ninguna fila seleccionada!");}
    });
    
    //Insert
    jQuery("#articuloInsert").click( function(){
        $('#modal-articulos').modal('show');
        $('#insertarActualizarArticulo').text('Insertar');
        $('#codigoArticulo').prop('disabled', false);
        document.getElementById("formularioInsertArticulo").reset();
        
        //Recoge las categorias
        $.ajax({                  
            type: 'POST',
            url: '../php/back/ver_tipo_categorias.php',
            success: function(data) {
                var jsonArticulos = JSON.parse(data);
                
                $('#categoriaArticulo').empty().append('whatever');
                
                $.each(jsonArticulos, function(i, item) {
                    $('#categoriaArticulo').append($('<option/>', { 
                        value: jsonArticulos[i].idCategoria,
                        text : jsonArticulos[i].nombreCategoria
                    }));
                });
            }
        });   
    });
    
    //Update
    jQuery("#articuloUpdate").click( function(){
        
        var id = jQuery("#tArticulos").jqGrid('getGridParam','selrow');
        var dataString = 'idArticulo='+id;
        
        if (id) 
        {
            $('#modal-articulos').modal('show');
            $('#insertarActualizarArticulo').text('Actualizar');

            $('#codigoArticulo').prop('disabled', true);
            
            $.ajax({                  
                type: 'POST',
                url: '../php/back/ver_articulos_back.php',
                data: dataString,
                success: function(data) {
                    var jsonArticulos = JSON.parse(data);

                    //Recoge las categorias
                    $.ajax({                  
                        type: 'POST',
                        url: '../php/back/ver_tipo_categorias.php',
                        success: function(data) {
                            var jsonArticulos2 = JSON.parse(data);

                            $('#categoriaArticulo').empty().append('whatever');

                            $.each(jsonArticulos2, function(i, item) {
                                $('#categoriaArticulo').append($('<option/>', { 
                                    value: jsonArticulos2[i].idCategoria,
                                    text : jsonArticulos2[i].nombreCategoria
                                }));
                            });

                            $('#nombreArticulo').val(jsonArticulos[0].nombreArticulo);
                            $('#descripcionArticulo').val(jsonArticulos[0].descripcionArticulo);
                            $('#categoriaArticulo').val(jsonArticulos2[jsonArticulos[0].idCategoria-1].idCategoria);
                            $('#precioArticulo').val(jsonArticulos[0].precioArticulo);
                            $('#imagenArticulo').val(jsonArticulos[0].imagenArticulo);
                            $('#codigoArticulo').val(jsonArticulos[0].codigoArticulo);        
                        }
                    });   
                }
            });  
        } 
        else 
        {
            alert("Seleccione una fila para borrarla.");
        }
        

    });

    
    //Delete
    jQuery("#articuloDelete").click( function(){
        var id = jQuery("#tArticulos").jqGrid('getGridParam','selrow');

        var dataString = 'idArticulo='+id;
        
        $.ajax({                  
            type: 'POST',
            url: '../php/back/borrar_articulos_back.php',
            data: dataString,
            success: function(data) {
                        if (id) {
                            var ret = jQuery("#tArticulos").jqGrid('getRowData', id);
                        } else {
                            alert("Seleccione una fila para borrarla.");
                        }
                        var su = jQuery("#tArticulos").jqGrid('delRowData', ret.idArticulo);
            }
        });
        
        
    });
    
}
