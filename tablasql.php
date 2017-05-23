<table class="table border bordered hovered bg-white fg-black">
	<?php session_start();

            $usuario= $_SESSION["user"];
            $pass = $_SESSION["passw"];
            $servidor = 'WIN-233TQJ35JR1'; 
            echo $basedatos = trim($_GET["base"]);
            
            $info = array('Database'=>$basedatos, 'UID'=>$usuario, 'PWD'=>$pass); 
            $conexion = sqlsrv_connect($servidor, $info);  
            
            
            if(!$conexion){
            echo 'NoConectado';
             die( print_r( sqlsrv_errors(), true));
            
             }
            
	       echo '\Conectado';
			$sql = trim($_GET["dato"]);
			//echo $sql;
            include_once ("modelo/DAO.php");
            
            $DAO=new DAO();
			//$sql = "select * from centro";
            $datos=$DAO->mostrarAll($conexion,$sql);
            //$datosCol=$DAO->mostrarAll($conexion,"select COLUMN_NAME from INFORMATION_SCHEMA.COLUMNS  where TABLE_NAME='"+$basedatos+"'");
            $num = 10;
            //echo $datoscol[0]
            
    ?>
    <thead>
        <?php for($i=0; $i<=$num; $i++){ ?>
                <th><?php echo $i;?></th>
            <?php } 

               

            ?>

    </thead>
    <?php

            if(empty($datos))echo "\No hay datos";
            else
                foreach($datos as $fila){
                    
                
    ?>
    <tbody>
        <tr>

            <?php for($i=0; $i<=$num; $i++){ ?>
                <td><?php echo $fila[$i];?></td>
            <?php } ?>

        </tr>
    </tbody>
    <?php
                }
    ?>
    
</table>