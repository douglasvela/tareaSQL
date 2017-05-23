<?php session_start();
      unset($_SESSION["user"]);
      unset($_SESSION["passw"]);
            $usuario= $_POST["usuario"];
            $pass = $_POST["pass"];
            $servidor = 'WIN-233TQJ35JR1'; 
            $basedatos = 'ciclista';
            
            $info = array('Database'=>$basedatos, 'UID'=>$usuario, 'PWD'=>$pass); 
            $conexion = sqlsrv_connect($servidor, $info);  
            
            
            if(!$conexion){
            echo 'INCORRECTO';
             die( print_r( sqlsrv_errors(), true));
            
             }
            
	       echo 'Conectado';
             $_SESSION["user"]=$usuario;
             $_SESSION["passw"]=$pass;
?>