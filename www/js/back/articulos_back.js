$(document).ready(function () {

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

    jQuery("#articuloSelect").click( function(){
        var id = jQuery("#tArticulos").jqGrid('getGridParam','selrow');
        if (id)	{
            var ret = jQuery("#tArticulos").jqGrid('getRowData',id);
            alert("idArticulo="+ret.idArticulo+" nombreArticulo="+ret.nombreArticulo);
        } else { alert("¡No hay ninguna fila seleccionada!");}
    });
    
    jQuery("#articuloInsert").click( function(){
        $('#modal-articulos').modal('show');
        
    //	var datarow = {id:"99",invdate:"2007-09-01",name:"test3",note:"note3",amount:"400.00",tax:"30.00",total:"430.00"};
    //	var su=jQuery("#tArticulos").jqGrid('addRowData',99,datarow);
    //	if(su) alert("Succes. Write custom code to add data in server"); else alert("Can not update");
    });

    jQuery("#articuloDelete").click( function(){
        var id = jQuery("#tArticulos").jqGrid('getGridParam','selrow');
        if (id)	{
            var ret = jQuery("#tArticulos").jqGrid('getRowData',id);
        } else { alert("Please select row");}
        var su=jQuery("#tArticulos").jqGrid('delRowData',ret.idArticulo);
        if(su) alert("Succes. Write custom code to delete row from server"); else alert("Allready deleted or not in list");
    });
    
});
