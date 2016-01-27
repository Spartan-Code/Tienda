<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <title>Valencia Opera</title>
        
                <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="../lib/jquery/jquery-1.11.3.min.js"></script>
                        <!-- JQGRID -->
        <script src="../lib/jqgrid/grid.locale-es.js" type="text/javascript"></script>
        <script src="../lib/jqgrid/jquery.jqGrid.min.js" type="text/javascript"></script>
        
        <link href="../lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link href="../lib/bootstrap/css/font-awesome.min.css" rel="stylesheet">
        <link href="../css/estilos-index.css" rel="stylesheet">
        <link href="../css/admin.css" rel="stylesheet">
        
        <link rel="stylesheet" type="text/css" media="screen" href="../lib/jqgrid/ui.jqgrid-bootstrap.css" />
        <link rel="stylesheet" type="text/css" media="screen" href="../lib/jqgrid/ui.jqgrid-bootstrap-ui.css" />
        <link rel="stylesheet" type="text/css" media="screen" href="../lib/jqgrid/ui.jqgrid.css" />
        

        
        
        
    </head>
    <body>   
        
        
        
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href=""><img src="../img/opera_valencia_logo.png" class="img-responsive" id="logo" /></a>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav" id="menu-horizontal">
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#" id="icono-login" class="login" data-toggle="modal" data-target="#modal-login"><i class="fa fa-sign-in"></i></a></li>
                        <li><a id="enlace-login" class="login" >Bienvenido <p id="nombreusuario"></p></a></li>
                        <li><a href="./index.html" id="icono-carrito">Salir <i class="fa fa-sign-out fa-1x"></i></a></li>
                    </ul>
                </div><!--/.nav-collapse -->
            </div>
        </nav>
        
    <section>
        <div class="cuadroSelector">
            <div class="selectorCategorias">
                <ul class="nav nav-tabs nav-justified">
                    <li class="selectores"><a href="#">Usuarios</a></li>
                    <li><a href="#">Categorías</a></li>
                    <li><a href="#">Artículos</a></li>
                    <li><a href="#">Pedidos</a></li>
                </ul>
            </div>
            
            
            <script>
                $.jgrid.defaults.width = 780;
                $.jgrid.defaults.styleUI = 'Bootstrap';
            </script>

            <div class="container-fluid">
                <table id="jqGrid"></table>
                <div id="jqGridPager"></div>
            </div>
            <script type="text/javascript"> 


            $(document).ready(function () {

                    $("#jqGrid").jqGrid({
                    url: 'pedidos.php',
                    datatype: "json",
                     colModel: [
                        { label: 'ID Pedido', name: 'idPedido', autowidth: true, sorttype: 'integer' },
                        { label: 'ID Usuario', name: 'idUsuario', autowidth: true, sorttype: 'integer' },
                        { label: 'Fecha Pedido', name: 'fechaPedido', autowidth: true },
                        { label: 'Precio Total', name: 'precioTotal', autowidth: true, sorttype: 'integer' },                
                    ],
                    viewrecords: true, // show the current page, data rang and total records on the toolbar
                    autowidth: true,
                    height: 200,
                    rowNum: 30,
                    pager: "#jqGridPager"
                });
            });

             </script>
            
        </div>
    </section>
        
        




        
        
 

<!--        <section id="principal">
            
            <div class="row text-center" id="menu-admin">
            
                <div class="cabecera-admin text-center col-md-6 col-md-offset-3 col-xs-10 col-xs-offset-1">
                    <h1>Panel de Administración</h1>
                </div>
                
                <div class="ventana-admin col-md-6 col-md-offset-3 col-xs-10 col-xs-offset-1">
                    <div class="col-md-4 col-md-offset-2">
                        <button type="button" class="btn3d btn btn-default btn-lg boton-admin" id="1"><i class="fa fa-user fa-3x"></i><br>Usuarios</button>
                    </div>

                    <div class="col-md-4">
                        <button type="button" class="btn3d btn btn-default btn-lg boton-admin" id="2"><i class="fa fa-folder-open-o fa-3x"></i><br>Categorias</button>
                    </div>

                    <div class="col-md-4 col-md-offset-2">
                        <button type="button" class="btn3d btn btn-default btn-lg boton-admin" id="3"><i class="fa fa-bed fa-3x"></i><br>Artículos</button>
                    </div>

                    <div class="col-md-4">
                        <button type="button" class="btn3d btn btn-default btn-lg boton-admin" id="4"><i class="fa fa-cart-arrow-down fa-3x"></i><br>Pedidos</button>
                    </div>
                </div>
            
            </div>
            
        </section>-->

        

        <footer class="footer text-center">
            <div class="container-fluid">
                <div class="row" id="pie1">
                    <div class="col-sm-3 col-sm-offset-1">
                        <h3>Opera 2016</h3>
                        <ul>
                            <li><a href="#">La Traviata</a></li>
                            <li><a href="#">La Flauta Mágica</a></li>
                            <li><a href="#">Sweeney Todd</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-3">
                        <h3>Mantente en contacto</h3>
                        <ul>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4">
                        <h3>Conecta con nosotros</h3>
                        <ul id="iconos-sociales">
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-youtube-play"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram"></i></li>
                            <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                        </ul>
                    </div>
                </div>
        </footer>
        <footer class="footer text-center" id="pie2">
            <div class="container-fluid">
                    <ul class="nav navbar-nav">
                        <li><a href="#">Términos y Condiciones</a></li>
                        <li><a href="#">Política de Privacidad</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a id="web_by" href="#">Website by Spartan Code</a></li>
                    </ul>
                </div>
            </div>
        </footer>
        
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="../lib/bootstrap/js/bootstrap.min.js"></script>
        <!-- Mis archivos javascript -->
        <script src="../js/admin.js" type="text/javascript"></script>

    </body>
</html>