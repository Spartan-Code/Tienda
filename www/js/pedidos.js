$(document).ready(function () {
    
jQuery("#list2").jqGrid({
   	url:'pedidos.php?q=2',
	datatype: "json",
   	colNames:['ID Pedido','ID Usuario', 'Fecha Pedido', 'Precio Total'],
   	colModel:[
   		{name:'idPedido',index:'idPedido', autowidth: true, align:"center" },
        {name:'idUsuario',index:'idUsuario', autowidth: true, align:"center" },
        {name:'fechaPedido',index:'fechaPedido', autowidth: true, align:"center" },
        {name:'precioTotal',index:'precioTotal', autowidth: true, align:"center" }	
   	],
   	rowNum:10,
   	rowList:[10,20,30],
   	pager: '#pager2',
   	sortname: 'id',
    viewrecords: true,
    sortorder: "desc",
    autowidth: true,
    height: 300,
    caption:"Simple data manipulation"
});
jQuery("#list2").jqGrid('navGrid','#pager2',{edit:false,add:false,del:false});
    
    
    
    
    

/*$.jgrid.defaults.width = 780;
$.jgrid.defaults.styleUI = 'Bootstrap';

    $("#jqGrid").jqGrid({
        url: 'pedidos.php',
        datatype: "json",
         colModel: [
            { label: 'ID Pedido', name: 'idPedido', autowidth: true, sorttype: 'integer' },
            { label: 'ID Usuario', name: 'idUsuario', autowidth: true, sorttype: 'integer' },
            { label: 'Fecha Pedido', name: 'fechaPedido', autowidth: true },
            { label: 'Precio Total', name: 'precioTotal', autowidth: true, sorttype: 'integer' }              
        ],
        viewrecords: true, // show the current page, data rang and total records on the toolbar
        autowidth: true,
        height: 200,
        rowNum: 4,
        pager: "#jqGridPager"
    });*/
});

