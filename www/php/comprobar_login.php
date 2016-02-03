<?php
    session_start();
    if(isset($_SESSION["sesionNombreUsuario"]))
    {
        echo $_SESSION["sesionNombreUsuario"];
    }
    else
    {
        echo false;
    }
?>