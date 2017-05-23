<?php

   class Conexion {
	   
      function __construct(){
		  
		  }
      public function conectar(){
		  
			$usuario= 'sa';
			$pass = 'bd_2016';
			$servidor = 'WIN-233TQJ35JR1'; 
			$basedatos = 'ciclista';
			
			$info = array('Database'=>$basedatos, 'UID'=>$usuario, 'PWD'=>$pass); 
			$conexion = sqlsrv_connect($servidor, $info);  
			
			
			if(!$conexion){
			//echo 'NoConectado';
			 die( print_r( sqlsrv_errors(), true));
			
			 }
			
			//echo 'Conectado';
			 return $conexion;
      }
	  
      
   }


/*


$query = 'select * from autor';
$registros = sqlsrv_query($conexion, $query);





while($row = sqlsrv_fetch_object($registros)){
     
echo "
<br>
$row->nombre
<br>

<br>";
	
}

*/
?>