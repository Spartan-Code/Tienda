function cargarPedidos() {
    jQuery("#tPedidos").jqGrid({
        url:'back/pedidos_back.php',
        datatype: "json",
        colNames:['ID Pedido','ID Usuario', 'Fecha pedido', 'Precio total'],
        colModel:[
            {name:'idPedido',index:'idPedido', autowidth: true, align: "center", sorttype: "integer"},
            {name:'idUsuario',index:'idUsuario', autowidth: true, align: "center", sorttype: "integer"},
            {name:'fechaPedido',index:'fechaPedido', autowidth: true, align: "center"},
            {name:'precioTotal',index:'precioTotal', autowidth: true, align: "center", sorttype: "integer"},
        ],
        rowNum:10,
        rowList:[10,20,30],
        pager: '#pPedidos',
        sortname: 'id',
        viewrecords: true,
        sortorder: "desc",
        multiselect: false,
        loadonce: true,
        caption: "Pedidos",
        onSelectRow: function(ids) {
            if(ids == null) {
                ids=0;
                if(jQuery("#tPedidos_detail").jqGrid('getGridParam','records') >0 )
                {
                    jQuery("#tPedidos_detail").jqGrid('setGridParam',{url:"back/pedidos_detail_back.php?q=1&id="+ids,page:1});
                    jQuery("#tPedidos_detail").jqGrid('setCaption',"Invoice Detail: "+ids)
                    .trigger('reloadGrid');
                }
            } else {
                jQuery("#tPedidos_detail").jqGrid('setGridParam',{url:"back/pedidos_detail_back.php?q=1&id="+ids,page:1});
                jQuery("#tPedidos_detail").jqGrid('setCaption',"Invoice Detail: "+ids)
                .trigger('reloadGrid');			
            }
        }
    });
    jQuery("#tPedidos").jqGrid('navGrid','#pPedidos',{add:false,edit:false,del:false});
    
    

    jQuery("#tPedidos_detail").jqGrid({
        height: 100,
        url:'back/pedidos_detail_back.php?q=1&id=0',
        datatype: "json",
        colNames:['ID Pedido','ID Artículo', 'Unidades', 'Precio'],
        colModel:[
            {name:'idPedido',index:'idPedido', autowidth: true, align: "center", sorttype: "integer"},
            {name:'idArticulo',index:'idArticulo', autowidth: true, align: "center", sorttype: "integer"},
            {name:'unidades',index:'unidades', autowidth: true, align: "center", sorttype: "integer"},
            {name:'precio',index:'precio', autowidth: true, align: "center", sorttype: "integer"},		
        ],
        rowNum:10,
        rowList:[10,25,50],
        pager: '#pPedidos_detail',
        sortname: 'item',
        viewrecords: true,
        sortorder: "asc",
        multiselect: true,
        caption:"Linea de pedido"
    }).navGrid('#pPedidos_detail',{add:false,edit:false,del:false});
}

