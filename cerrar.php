<?php session_start();
      unset($_SESSION["user"]);
	  unset($_SESSION["passw"]);
	  
	  echo "<script>";
	  echo "location.href = 'login.php';";
	  echo "</script>";
?>