   function cargarUsuarios(){

    jQuery("#tUsuarios").jqGrid({        
        url:'back/usuarios_back.php?q=2',
        datatype: "json",
        colNames:['ID Usuario','Date', 'Client', 'Amount','Tax'],
        colModel:[
            {name:'idUsuario',index:'idUsuario', autowidth: true, align:"center" },
            {name:'nombreUsuario',index:'nombreUsuario', autowidth: true, align:"center" },
            {name:'emailUsuario',index:'emailUsuario', autowidth: true, align:"center" },
            {name:'rolUsuario',index:'rolUsuario', autowidth: true, align:"center" },
            {name:'contrasenaUsuario',index:'contrasenaUsuario', autowidth: true, align:"center" }	
        ],
        rowNum:10,
        rowList:[10,20,30],
        pager: '#pagerUsuarios',
        sortname: 'id',
        viewrecords: true,
        sortorder: "desc",
        autowidth: true,
        height: 300,
        loadonce: true,
        caption:"Simple data manipulation"
        //editurl:"someurl.php"
    });
    jQuery("#tUsuarios").jqGrid('navGrid','#pagerUsuarios',{edit:false,add:false,del:false});
        //.navGrid("#pagerUsuarios",{edit:false,add:false,del:false});
    
    
    jQuery("#a1").click( function(){
        var id = jQuery("#tUsuarios").jqGrid('getGridParam','selrow');
        if (id)	{
            var ret = jQuery("#tUsuarios").jqGrid('getRowData',id);
            alert("id="+ret.idUsuario+" invdate="+ret.nombreUsuario+"...");
        } else { alert("Please select row");}
    });
      
    
    jQuery("#a2").click( function(){
        var su=jQuery("#tUsuarios").jqGrid('delRowData', 4);
        if(su) alert("Succes. Write custom code to delete row from server"); else alert("Allready deleted or not in list");
    });
    
    jQuery("#a3").click( function(){
        var su=jQuery("#tUsuarios").jqGrid('setRowData',11,{amount:"333.00",tax:"33.00",total:"366.00",note:"<img src='images/user1.gif'/>"});
        if(su) alert("Succes. Write custom code to update row in server"); else alert("Can not update");
    });
    jQuery("#a4").click( function(){
        var datarow = {id:"99",invdate:"2007-09-01",name:"test3",note:"note3",amount:"400.00",tax:"30.00",total:"430.00"};
        var su=jQuery("#tUsuarios").jqGrid('addRowData',99,datarow);
        if(su) alert("Succes. Write custom code to add data in server"); else alert("Can not update");
    });

};
