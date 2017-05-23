<!doctype html>
<html>
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="description" content="Metro, a sleek, intuitive, and powerful framework for faster and easier web development for Windows Metro Style.">
    <meta name="keywords" content="HTML, CSS, JS, JavaScript, framework, metro, front-end, frontend, web development">

	<title>Inicio de Sesión</title>

<!--********************* LIBRERIAS *************************-->

    <link href="css/metro.min.css" rel="stylesheet">
    <link href="css/docs.css" rel="stylesheet">
    <link href="css/metro-schemes.min.css" rel="stylesheet">
    <link href="css/metro-rtl.min.css" rel="stylesheet">
    <link href="css/metro-responsive.min.css" rel="stylesheet">
    <link href="css/metro-icons.min.css" rel="stylesheet">
    <script src="js/jquery-2.1.3.min.js"></script>
    <script src="js/metro.min.js"></script>
    <script src="js/validator.js"></script>
    <script src="js/select2.min.js"></script>
<!--********************* LIBRERIAS *************************-->

<style type="text/css">
#cuerpo,#image { 
	background: url(images/fondo2.png) no-repeat fixed center    ; 
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
}

.centrado {
position: absolute;
 left: 50%;
 top: 35%;
 max-width: 450px;
 max-height: 500px;
 margin: -100px 0 0 -200px;
}

@media screen and (max-width: 800px){
	.otra{
		max-width: 100px;
		max-height: 100px;
	}	
	
	.otra2{
		max-height: 100px;
	}
}

</style>

<!-- ***************************** <script> ****************************** -->

<script>

	function showCharm(id){
		var  charm = $("#"+id+"-charm").data("charm");
		if (charm.element.data("opened") === true) {
			charm.close();
		} else {
			charm.open();
		}
	}
	
	function iniciar(){
		$("#barra").toggle(750);
		$("#bottom-charm").fadeIn(500);
	}
	
	function validateEnter(e) {
		var key=e.keyCode || e.which;
		if (key=="13"){ 
				document.getElementById("ingresar").click();	
		}
	}
	
	function validateEnter2(e) {
		var key=e.keyCode || e.which;
		if (key=="13"){ 
			document.getElementById("contra").focus();	
		}
	}
	
	function comprobar(){
		var usuario = document.getElementById("user").value;
		var contras = document.getElementById("contra").value;
	
		jugador = document.getElementById('jugador');
	
		ajax = objetoAjax();
	
		ajax.open("POST", "verificar.php", true);
	
		ajax.onreadystatechange = function() {
	
			if (ajax.readyState == 4){
				jugador.value = (ajax.responseText) 
				if(/INCORRECTO/.test(jugador.value)){
					document.getElementById("notifyErrorUI").click();
				}else{
					window.location="consola.php";
				}
			}
		} 
		
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded"); 
		
		ajax.send("&usuario="+usuario+"&pass="+contras)
	}
	
	function objetoAjax(){
		var xmlhttp = false;
		try {
			xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {

			try {
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (E) {
				xmlhttp = false; }
		}

		if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
		  xmlhttp = new XMLHttpRequest();
		}
		return xmlhttp;
	}
	

</script>
<!-- ***************************** </script> ****************************** -->
</head>

<body id="cuerpo" onLoad="iniciar();">

<!-- BARRA INFERIOR DE BIENVENIDA -->
<div data-role="charm" data-position="bottom" id="bottom-charm" class="no-phone">
	<h3 class="text-light" align="center">Bienvenid@, gracias por su visita</h3>
</div>
<!-- FIN BARRA INFERIOR DE BIENVENIDA -->


<!-- BARRA DE MENÚ SUPERIOR -->
<div class="app-bar darcula" id="barra" style="display:none;">
	<div class="app-bar-divider"></div>
    <a class="app-bar-element" data-role="hint" data-hint-background="bg-white" data-hint-color="fg-black" data-hint-mode="2" data-hint="Ayuda|Haz clic para recibir la ayuda" data-hint-position="right">
        <span class="mif-question mif-2x mif-ani-shuttle"></span>
    </a>
    <div class="app-bar-divider"></div>
      
    <div class="app-bar-divider place-right"></div>
    <div class="app-bar-element place-right">
        <a class="dropdown-toggle fg-white"><span class="mif-enter"></span> Identificarme</a>
        <div class="app-bar-drop-container bg-white fg-dark place-right" data-role="dropdown" data-no-close="true" style="display: none;">
            <div class="padding10">
                <form autocomplete="off">
                    <h4 class="text-light">Inicia Sesión...</h4>
                    <div class="input-control text">
                        <span class="mif-user prepend-icon"></span>
                        <input type="text" id="user" onkeyup="validateEnter2(event);">
                    </div>
                    <div class="input-control text">
                        <span class="mif-lock prepend-icon"></span>
                        <input type="password" id="contra" onkeyup="validateEnter(event);">
                    </div>
                    <button class="button link" type="button">¿Olvidaste tu contraseña?</button>
                    <div class="form-actions">
                        <button class="button" type="button" id="ingresar" onClick="comprobar();">Entrar</button>
                        <button class="button link" type="reset">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
  	</div>
   <div class="app-bar-divider place-right"></div>
   <div class="app-bar-divider place-right"></div>
</div>
<!-- FIN BARRA DE MENÚ SUPERIOR -->
<input type="hidden" name="jugador" id="jugador">
<div style="display:none;">
<button type="button" class="button" id="notifyError">Create Notifies</button>
<button type="button" class="button" id="notifyErrorU">Create Notifies</button>
<button type="button" class="button" id="notifyErrorUI">Create Notifies</button>
<button type="button" class="button" id="notifyErrorC">Create Notifies</button>
<button type="button" class="button" id="notifyErrorP">Create Notifies</button>
<button type="button" class="button" id="notifyCampos">Create Notifies</button>
<button type="button" class="button" id="notifyExito">Create Notifies</button>
<button type="button" class="button" id="notifyExitoU">Create Notifies</button>
</div>

</body>
<script>
    function showDialog(id){
        var dialog = $(id).data('dialog');
        dialog.open();
    }
</script>
<script>
    $(function(){
        $('#notifyError').on('click', function(){
            setTimeout(function(){
                $.Notify({keepOpen: true, type: 'alert', caption: 'Ups! Ocurrio un error!', content: "Verifique que la cuenta no exista o intentelo nuevamente", icon: "<span class='mif-warning'></span>", keepOpen: false});
            });
        });
    });
	
	$(function(){
        $('#notifyErrorC').on('click', function(){
            setTimeout(function(){
                $.Notify({keepOpen: true, type: 'alert', caption: 'Ups! Ocurrio un error!', content: "Verifique que el cargo no exista", icon: "<span class='mif-warning'></span>", keepOpen: false});
            });
        });
    });
	
	$(function(){
        $('#notifyCampos').on('click', function(){
            setTimeout(function(){
                $.Notify({keepOpen: true, type: 'alert', caption: 'Advertencia!', content: "Complete todos los campos requeridos para poder guardar", icon: "<span class='mif-warning'></span>", keepOpen: false});
            });
        });
    });
	
	$(function(){
        $('#notifyExito').on('click', function(){
            setTimeout(function(){
                $.Notify({keepOpen: true, type: 'success', caption: 'Éxito!', content: "Se guardaron los cambios exitosamente", icon: "<span class='mif-notification'></span>", keepOpen: false});
            });
        });
    });
	
	$(function(){
        $('#notifyErrorP').on('click', function(){
            setTimeout(function(){
                $.Notify({keepOpen: true, type: 'alert', caption: 'Ups! Ocurrio un error!', content: "El patrón no coincide, intentalo nuevamente", icon: "<span class='mif-warning'></span>", keepOpen: false});
            });
        });
    });
	
	$(function(){
        $('#notifyErrorU').on('click', function(){
            setTimeout(function(){
                $.Notify({keepOpen: true, type: 'alert', caption: 'Advertencia!', content: "El usuario ingresado ya existe, utilize un nuevo nombre de usuario", icon: "<span class='mif-warning'></span>", keepOpen: false});
            });
        });
    });
	
	$(function(){
        $('#notifyErrorUI').on('click', function(){
            setTimeout(function(){
                $.Notify({keepOpen: true, type: 'warning', caption: 'Advertencia!', content: "El usuario o la contraseña es incorrecta", icon: "<span class='mif-warning'></span>", keepOpen: false});
            });
        });
    });
	
	$(function(){
        $('#notifyExitoU').on('click', function(){
            setTimeout(function(){
                $.Notify({keepOpen: true, type: 'success', caption: 'Éxito!', content: "Cuenta registrada exitosamente!!! Debes esperar a que te activen. Oh solicitale a alguien autorizado que active tu cuenta", icon: "<span class='mif-notification'></span>", keepOpen: true});
            });
        });
    });
	
	
</script>
</html>
