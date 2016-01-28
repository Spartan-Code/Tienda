$(document).ready(function () {

    jQuery("#tArticulos").jqGrid({
        url:'articulos_back.php',
        datatype: "json",
        colNames:['idArticulo','nombreArticulo', 'descripcionArticulo', 'idCategoria','precioArticulo', 'imagenArticulo', 'codigoArticulo', 'urlArticulo'],
        colModel:[
            {name:'idArticulo',index:'idUsuario', autowidth: true, align: "center", sortable: true, sorttype: 'integer'},	
            {name:'nombreArticulo',index:'idUsuario', autowidth: true, align: "center"},
            {name:'descripcionArticulo',index:'idUsuario', autowidth: true, align: "center"},
            {name:'idCategoria',index:'idUsuario', autowidth: true, align: "center"},
            {name:'precioArticulo',index:'idUsuario', autowidth: true, align: "center"},
            {name:'imagenArticulo',index:'idUsuario', autowidth: true, align: "center"},
            {name:'codigoArticulo',index:'idUsuario', autowidth: true, align: "center"},
            {name:'urlArticulo',index:'idUsuario', autowidth: true, align: "center"},
        ],
        rowNum:10,
        rowList:[10,20,30],
        pager: '#pArticulos',
        sortname: 'id',
        viewrecords: true,
        sortorder: "desc",
        autowidth: true,
        height: 220,
        loadonce: true

    });
    jQuery("#tArticulos").jqGrid('navGrid','#pArticulos',{edit:false,add:false,del:false});

    jQuery("#a1").click( function(){
        var id = jQuery("#tArticulos").jqGrid('getGridParam','selrow');
        if (id)	{
            var ret = jQuery("#tArticulos").jqGrid('getRowData',id);
            alert("idArticulo="+ret.idArticulo+" nombreArticulo="+ret.nombreArticulo);
        } else { alert("Please select row");}
    });

    jQuery("#a2").click( function(){
        var id = jQuery("#tArticulos").jqGrid('getGridParam','selrow');
        if (id)	{
            var ret = jQuery("#tArticulos").jqGrid('getRowData',id);
        } else { alert("Please select row");}
        var su=jQuery("#tArticulos").jqGrid('delRowData',ret.idArticulo);
        if(su) alert("Succes. Write custom code to delete row from server"); else alert("Allready deleted or not in list");
    });

    jQuery("#a3").click( function(){
    //	var datarow = {id:"99",invdate:"2007-09-01",name:"test3",note:"note3",amount:"400.00",tax:"30.00",total:"430.00"};
    //	var su=jQuery("#tArticulos").jqGrid('addRowData',99,datarow);
    //	if(su) alert("Succes. Write custom code to add data in server"); else alert("Can not update");
    });
    
});