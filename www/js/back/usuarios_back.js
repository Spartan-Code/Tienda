function cargarUsuarios(){

    jQuery("#tUsuarios").jqGrid({
        url:'back/usuarios_back.php',
        datatype: "json",
        colNames:['ID Usuario', 'Nombre Usuario','Email Usuario', 'Rol Usuario', 'Contraseña Usuario'],
        colModel:[
            {name:'idUsuario',index:'idUsuario', autowidth: true, align: "center"},	
            {name:'nombreUsuario',index:'nombreUsuario', autowidth: true, align: "center"},	
            {name:'emailUsuario',index:'emailUsuario', autowidth: true, align: "center"},
            {name:'rolUsuario',index:'rolUsuario', autowidth: true, align: "center"},
            {name:'contrasenaUsuario',index:'contrasenaUsuario', autowidth: true, align: "center"},
        ],
        rowNum:10,
        rowList:[10,20,30],
        pager: '#pUsuarios',
        sortname: 'id',
        viewrecords: true,
        sortorder: "desc",
        autowidth: true,
        height: 230,
        //shrinkToFit: false,
        loadonce: true,
        caption:"Articulos insertados en la base de datos"

    });
    jQuery("#tUsuarios").jqGrid('navGrid','#pUsuarios',{edit:false,add:false,del:false});


    
    //Insert
    jQuery("#usuarioInsert").click( function(){
        $('#modal-usuarios').modal('show');
        $('#insertarActualizarUsuario').text('Insertar');
         
        $('#bloqueIdUsuario').hide();

        document.getElementById("formularioInsertUsuario").reset();

        
    });
    
    //Update
    jQuery("#usuarioUpdate").click( function(){

        var id = jQuery("#tUsuarios").jqGrid('getGridParam','selrow');
        var dataString = 'idUsuario='+id;
        
        if (id) 
        {
            $('#modal-usuarios').modal('show');
            $('#insertarActualizarUsuario').text('Actualizar');
        
            $('#bloqueIdUsuario').show();
            
            $.ajax({                  
                type: 'POST',
                url: '../php/back/ver_usuarios_back.php',
                data: dataString,
                success: function(data) {
                    var jsonUsuarios = JSON.parse(data);

                    document.getElementById('idUsuario').value=jsonUsuarios[0].idUsuario;
                    document.getElementById('nombreUsuario').value=jsonUsuarios[0].nombreUsuario;
                    document.getElementById('emailUsuario').value=jsonUsuarios[0].emailUsuario;
                    document.getElementById('rolUsuario').value=jsonUsuarios[0].rolUsuario;
                    document.getElementById('contrasenaUsuario').value=jsonUsuarios[0].contrasenaUsuario;
                }
            });
        } 
        else 
        {
            alert("Seleccione una fila para borrarla.");
        }
          

    });

    
    //Delete
    jQuery("#usuarioDelete").click( function(){
        var id = jQuery("#tUsuarios").jqGrid('getGridParam','selrow');

        var dataString = 'idUsuario='+id;
        
        $.ajax({                  
            type: 'POST',
            url: '../php/back/borrar_usuarios_back.php',
            data: dataString,
            success: function(data) {
                        if (id) {
                            var ret = jQuery("#tUsuarios").jqGrid('getRowData', id);
                        } else {
                            alert("Seleccione una fila para borrarla.");
                        }
                        var su = jQuery("#tUsuarios").jqGrid('delRowData', ret.idUsuario);
            }
        }); 
    });    
};
