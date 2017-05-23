		/**************** VALIDACION TELEFONO ************************/
		function solonumeros(name,data){
			var l = data.length;
			if(!(/([0-9])/.test(data.substr(l-1,1))) && length < 1){
				document.getElementById(name+"t").innerHTML = "Solo se aceptan números";
				$('#'+name+'1').removeClass('success');	
				$('#'+name+'1').addClass('error');
			}else{
				document.getElementById(name+"t").innerHTML = "Ingresar más dígitos";
				$('#'+name+'1').removeClass('success');	
				$('#'+name+'1').addClass('error');
			}
		}
		
		function SOLONUMERO(name,mini){
			var data = $("#"+name).val();
			var l = data.length;
			
			if(l > 0){
				if(data >= parseInt(mini) && !(/([.])/.test(data))){
					document.getElementById(name+"t").innerHTML = "Éxito!";
					$('#'+name+'1').removeClass('error');	
					$('#'+name+'1').addClass('success');
					band = true;
				}else{
					document.getElementById(name+"t").innerHTML = "Solo se aceptan números enteros";
					$('#'+name+'1').removeClass('success');	
					$('#'+name+'1').addClass('error');
				}
			}else{						
				document.getElementById(name+"t").innerHTML = "Complete este campo";
				$('#'+name+'1').removeClass('success');	
				$('#'+name+'1').addClass('error');
			}
		}
		
		function TELEFONO(name){
			var data = document.getElementsByName(name).item(0).value;
			var l = data.length;
			var band = false;
			if((/([267])/.test(data.substr(0,1)))){
				if(l < 5){
					solonumeros(name,data);
				}else if(l > 5 && l < 10){
					solonumeros(name,data);
				}else if(l > 9){
					document.getElementsByName(name).item(0).value = data.substr(0,l-1);	
				}
				
				if(l >= 4 && !(/-/.test(data))){
					document.getElementsByName(name).item(0).value = data.substr(0,4)+"-";
				}
				
				if(l == 9){
					if( (data.substr(0,4)>=0 && data.substr(5,9)>=0) && !(/([.])/.test(data.substr(0,9))) ){
						document.getElementById(name+"t").innerHTML = "Número de teléfono válido";
						$('#'+name+'1').removeClass('error');	
						$('#'+name+'1').addClass('success');
						band = true;
					}else{
						document.getElementById(name+"t").innerHTML = "Número de teléfono no válido";
						$('#'+name+'1').removeClass('success');	
						$('#'+name+'1').addClass('error');
					}
				}
			}else{
				document.getElementById(name+"t").innerHTML = "Número de teléfono no válido";
				$('#'+name+'1').removeClass('success');	
				$('#'+name+'1').addClass('error');
				document.getElementsByName(name).item(0).value = "";	
			}
			return band;
		}
		/**************** FIN VALIDACION TELEFONO ************************/
		
		/**************** VALIDACION NUMERO DE NIT ************************/
		function NIT(name){
			var data = document.getElementsByName(name).item(0).value;
			var l = data.length;
			var band = false;
			if((/([1234567890])/.test(data.substr(0,1)))){
				if(l < 5){
					solonumeros(name,data);
				}else if(l > 5 && l < 11){
					solonumeros(name,data);
				}else if(l > 11 && l < 15){
					solonumeros(name,data);
				}else if(l > 17){
					document.getElementsByName(name).item(0).value = data.substr(0,l-1);	
				}
				
				if(l >= 4 && !(data.substr(4,1)=="-") && l < 11){
					document.getElementsByName(name).item(0).value = data.substr(0,4)+"-";
				}
				
				if(l >= 11 && !(data.substr(11,1)=="-")){
					document.getElementsByName(name).item(0).value = data.substr(0,11)+"-";
				}
				
				if(l >= 15 && !(data.substr(15,1)=="-")){
					document.getElementsByName(name).item(0).value = data.substr(0,15)+"-";
				}
				
				if(l == 17){
					if( (data.substr(0,4)>=0 && data.substr(5,6)>=0 && data.substr(12,3)>=0 && data.substr(16,1)>=0) && !(/([.])/.test(data.substr(0,17))) ){
						document.getElementById(name+"t").innerHTML = "¡Éxito!!!";
						$('#'+name+'1').removeClass('error');	
						$('#'+name+'1').addClass('success');
						band = true;
					}else{
						document.getElementById(name+"t").innerHTML = "Número de NIT no válido";
						$('#'+name+'1').removeClass('success');	
						$('#'+name+'1').addClass('error');
					}
				}
			}else{
				document.getElementById(name+"t").innerHTML = "Número de NIT no válido";
				$('#'+name+'1').removeClass('success');	
				$('#'+name+'1').addClass('error');
				document.getElementsByName(name).item(0).value = "";	
			}
			return band;
		}
		/**************** FIN VALIDACION NUMERO DE NIT ************************/
		
		/**************** VALIDACION MAYOR A CERO ************************/
		function mayorquecero(name,data){
			var l = data.length;
			if(!(/([0-9])/.test(data.substr(l-1,1))) && length < 1){
				document.getElementById(name+"t").innerHTML = "Solo se aceptan números";
				$('#'+name+'1').removeClass('success');	
				$('#'+name+'1').addClass('error');
				return false;
			}else if(data==0){
				document.getElementById(name+"t").innerHTML = "Solo se aceptan números mayores a cero";
				$('#'+name+'1').removeClass('success');	
				$('#'+name+'1').addClass('error');
				return false;
			}else{
				document.getElementById(name+"t").innerHTML = "Número válido";
				$('#'+name+'1').removeClass('error');	
				$('#'+name+'1').addClass('success');
				return true;
			}
		}
		/**************** FIN VALIDACION MAYOR A CERO ************************/
		
		/**************** VALIDACION MAYOR A CERO ************************/
		function mayoradoscientos(name,data,data2){
			if((data-data2)<=0){
				document.getElementById(name+"t").innerHTML = "Capacidad de pago insuficiente";
				$('#'+name+'1').removeClass('success');
				$('#'+name+'1').removeClass('warning');
				$('#'+name+'1').addClass('error');
				return false;
			}else if((data-data2)>0 && (data-data2)<=200){
				document.getElementById(name+"t").innerHTML = "Advertencia, capacidad de pago baja";
				$('#'+name+'1').removeClass('error');
				$('#'+name+'1').removeClass('success');	
				$('#'+name+'1').addClass('warning');
				return true;
			}else{
				document.getElementById(name+"t").innerHTML = "Exito, se puede realizar préstamo";
				$('#'+name+'1').removeClass('error');
				$('#'+name+'1').removeClass('warning');
				$('#'+name+'1').addClass('success');
				return true;
			}
		}
		/**************** FIN VALIDACION MAYOR A CERO ************************/
		
		/**************** VALIDACION DE IMAGEN ************************/
		
		function IMAGEN(name){
			var data = document.getElementsByName(name).item(0).value;
			var l = data.length;
			var band = false;
			
			if(l > 7 && (data.substr((l-4),l) == ".jpg" || data.substr((l-4),l) == ".png")){
				document.getElementById(name+"t").innerHTML = "Éxito!!! imagen válida";
				$('#'+name+'1').removeClass('error');	
				$('#'+name+'1').addClass('success');
				band = true;
			}else{
				document.getElementById(name+"t").innerHTML = "Ingrese una imagen .jpg o .png";
				$('#'+name+'1').removeClass('success');	
				$('#'+name+'1').addClass('error');
			}
			return band;	
		}
		/**************** FIN VALIDACION DE IMAGEN ************************/
		
		/**************** VALIDACION DUI ************************/
		function NDUI(name){
			var data = document.getElementsByName(name).item(0).value;
			var l = data.length;
			var band = false;
				
				if(l == 10){
					if( (data.substr(0,8)>=0 && data.substr(9,10)>=0) && !(/([.])/.test(data.substr(0,10))) ){
						document.getElementById(name+"t").innerHTML = "Éxito!";
						$('#'+name+'1').removeClass('error');	
						$('#'+name+'1').addClass('success');
						band = true;
					}else{
						
						document.getElementById(name+"t").innerHTML = "Número de DUI no válido";
						$('#'+name+'1').removeClass('success');	
						$('#'+name+'1').addClass('error');
					}
				}else{
					if(l < 9){
						solonumeros(name,data);
					}else if(l > 9 && l < 11){
						solonumeros(name,data);
					}else if(l > 10){
						document.getElementsByName(name).item(0).value = data.substr(0,l-1);	
					}
					
					if(l >= 8 && !(/-/.test(data))){
						document.getElementsByName(name).item(0).value = data.substr(0,8)+"-";
					}
				}
		
			return band;
		}
		/**************** FIN VALIDACION DUI ************************/
		
		/**************** VALIDACION MONEDA ************************/
		function MONEDA(name){
			var data = document.getElementsByName(name).item(0).value;
			var l = data.length;
			var band = false;
				
				if(l > 0){
					if(data >= 0){
						document.getElementById(name+"t").innerHTML = "Éxito!";
						$('#'+name+'1').removeClass('error');	
						$('#'+name+'1').addClass('success');
						band = true;
						
						var pos = data.indexOf('.');
						if((pos != -1) && (l-pos)>3){
							document.getElementsByName(name).item(0).value = data.substr(0,pos+3);	
						}
								
					}else{
						document.getElementById(name+"t").innerHTML = "El saldo es incorrecto";
						$('#'+name+'1').removeClass('success');	
						$('#'+name+'1').addClass('error');
					}
				}else{						
					document.getElementById(name+"t").innerHTML = "Complete este campo";
					$('#'+name+'1').removeClass('success');	
					$('#'+name+'1').addClass('error');
				}
		
			return band;
		}
		/**************** FIN VALIDACION MONEDA ************************/
		
		/**************** VALIDACION FECHA ************************/
		
		var d = new Date();

		var month = d.getMonth()+1;
		var day = d.getDate();
		
		var output = d.getFullYear() + '-' + (month<10 ? '0' : '') + month + '-' +(day<10 ? '0' : '') + day;
		
		function FECHA(name,mini,maxi){
			var data = document.getElementsByName(name).item(0).value;
			var band = false;
			var l = data.length;
			
			var maxf =  (d.getFullYear()+maxi) + '-' + (month<10 ? '0' : '') + month + '-' +(day<10 ? '0' : '') + day;
			var minf =  (d.getFullYear()-mini) + '-' + (month<10 ? '0' : '') + month + '-' +(day<10 ? '0' : '') + day;
			
			if(!/Invalid|NaN/.test(new Date(data))){
				if(data > maxf){
					document.getElementById(name+"t").innerHTML = "Fecha máxima: "+maxf;
					$('#'+name+'1').removeClass('success');	
					$('#'+name+'1').addClass('error');
				}else if(data < minf){
					document.getElementById(name+"t").innerHTML = "Fecha mínima: "+minf;
					$('#'+name+'1').removeClass('success');	
					$('#'+name+'1').addClass('error');
				}else{
					document.getElementById(name+"t").innerHTML = "ÉXITO";
					$('#'+name+'1').removeClass('error');	
					$('#'+name+'1').addClass('success');
					band = true;
				}
			}else{
				document.getElementById(name+"t").innerHTML = "Fecha no válida"+output;
				$('#'+name+'1').removeClass('success');	
				$('#'+name+'1').addClass('error');
			}
			return band;
		}
		
		/**************** FIN VALIDACION FECHA ************************/
		
		/**************** VALIDACION TEXTO VALIDADO ************************/
		function TEXTOVALIDADO(name,mini,maxi){
			var data = document.getElementsByName(name).item(0).value;
			var band = false;
			var l = data.length;
			
			if(l < mini || !(/^[A-Za-zÁ-Úá-ú\&\_\-\.\s\xF1\xD1]+$/.test(data))){
				if(data.length < mini){
					document.getElementById(name+"t").innerHTML = "Ingrese al menos "+mini+" caracteres";
					$('#'+name+'1').removeClass('success');
					$('#'+name+'1').addClass('error');
				}else{
					document.getElementById(name+"t").innerHTML = "Hay caracteres inválidos";
					$('#'+name+'1').removeClass('success');
					$('#'+name+'1').addClass('error');
				}
			}else{
				band = true;
				document.getElementById(name+"t").innerHTML = "¡Éxito!";
				$('#'+name+'1').removeClass('error');	
				$('#'+name+'1').addClass('success');
			}
			
			if(l > maxi){
				document.getElementsByName(name).item(0).value = data.substr(0,maxi);
			}
			return band;
				
		}
		/**************** FIN VALIDACION TEXTO VALIDADO ************************/
		
		/**************** VALIDACION TEXTO VALIDADO ************************/
		function TEXTONUMVALIDADO(name,mini,maxi){
			var data = document.getElementsByName(name).item(0).value;
			var band = false;
			var l = data.length;
			
			if(l < mini || !(/^[A-Za-zÁ-Úá-ú0-9\&\_\-\.\s\xF1\xD1]+$/.test(data))){
				if(data.length < mini){
					document.getElementById(name+"t").innerHTML = "Ingrese al menos "+mini+" caracteres";
					$('#'+name+'1').removeClass('success');
					$('#'+name+'1').addClass('error');
				}else{
					document.getElementById(name+"t").innerHTML = "Hay caracteres inválidos";
					$('#'+name+'1').removeClass('success');
					$('#'+name+'1').addClass('error');
				}
			}else{
				band = true;
				document.getElementById(name+"t").innerHTML = "¡Éxito!";
				$('#'+name+'1').removeClass('error');	
				$('#'+name+'1').addClass('success');
			}
			
			if(l > maxi){
				document.getElementsByName(name).item(0).value = data.substr(0,maxi);
			}
			return band;
				
		}
		/**************** FIN VALIDACION TEXTO VALIDADO ************************/
		
		/**************** VALIDACION TEXTO VALIDADO ************************/
		function SOLOLETRAS(name,mini,maxi){
			var data = document.getElementsByName(name).item(0).value;
			var band = false;
			var l = data.length;
			
			if(l < mini || !(/^[A-Za-zÁ-Úá-ú\s\xF1\xD1]+$/.test(data))){
				if(data.length < mini){
					document.getElementById(name+"t").innerHTML = "Ingrese al menos "+mini+" caracteres";
					$('#'+name+'1').removeClass('success');
					$('#'+name+'1').addClass('error');
				}else{
					document.getElementById(name+"t").innerHTML = "Hay caracteres inválidos";
					$('#'+name+'1').removeClass('success');
					$('#'+name+'1').addClass('error');
				}
			}else{
				band = true;
				document.getElementById(name+"t").innerHTML = "¡Éxito!";
				$('#'+name+'1').removeClass('error');	
				$('#'+name+'1').addClass('success');
			}
			
			if(l > maxi){
				document.getElementsByName(name).item(0).value = data.substr(0,maxi);
			}
			return band;
				
		}
		/**************** FIN VALIDACION TEXTO VALIDADO ************************/
		
		/**************** VALIDACION TEXTO ************************/
		function TEXTO(name,mini,maxi){
			var data = document.getElementsByName(name).item(0).value;
			var band = false;
			var l = data.length;
			
			if(l < mini || (/(['"])/.test(data))){
				if(l < mini){
					document.getElementById(name+"t").innerHTML = "Ingrese al menos "+mini+" caracteres";
					$('#'+name+'1').removeClass('success');
					$('#'+name+'1').addClass('error');
				}else{
					document.getElementById(name+"t").innerHTML = "comillas no permitidas";
					$('#'+name+'1').removeClass('success');	
					$('#'+name+'1').addClass('error');
				}
			}else{
				band = true;
				document.getElementById(name+"t").innerHTML = "¡Exito!";
				$('#'+name+'1').removeClass('error');	
				$('#'+name+'1').addClass('success');
			}
			
			if(l > maxi){
				document.getElementsByName(name).item(0).value = data.substr(0,maxi);
			}
			return band;	
		}
		/**************** FIN VALIDACION TEXTO ************************/
		
		/**************** VALIDACION TEXTO VACIO ************************/
		function IVACIO(name){
			var data = document.getElementsByName(name).item(0).value;
			var band = false;
			if(data == ""){
				$('#'+name+'1').removeClass('success');	
				$('#'+name+'1').addClass('error');
			}else{
				$('#'+name+'1').removeClass('error');	
				$('#'+name+'1').addClass('success');	
				band = true;
			}
			return band;	
		}
		/**************** FIN VALIDACION TEXTO VACIO ************************/
		
		/**************** VALIDACION COMBO VACIO ************************/
		function CVACIO(name){
			var data = document.getElementsByName(name).item(0).value;
			var band = false;
			if(data == "0"){
				$('#'+name+'1').removeClass('success');	
				$('#'+name+'1').addClass('error');
			}else{
				$('#'+name+'1').removeClass('error');	
				$('#'+name+'1').addClass('success');
				band = true;
			}
			return band;	
		}
		/**************** FIN VALIDACION TEXTO VACIO ************************/
		
		/**************** VALIDACION TEXTO ************************/
		function VERIFICAR(name,mini,maxi,name2){
			var data = document.getElementsByName(name).item(0).value;
			var band = false;
			var l = data.length;
			
			if(l < mini || (/(['"])/.test(data))){
				if(l < mini){
					document.getElementById(name+"t").innerHTML = "Ingrese al menos "+mini+" caracteres";
					$('#'+name+'1').removeClass('success');
					$('#'+name+'1').addClass('error');
					$('#'+name2+'1').removeClass('success');
					$('#'+name2+'1').addClass('error');
				}else{
					document.getElementById(name+"t").innerHTML = "comillas no permitidas";
					$('#'+name+'1').removeClass('success');	
					$('#'+name+'1').addClass('error');
					$('#'+name2+'1').removeClass('success');	
					$('#'+name2+'1').addClass('error');
				}
			}else{
				if(document.getElementsByName(name).item(0).value == document.getElementsByName(name2).item(0).value){
					band = true;
					document.getElementById(name+"t").innerHTML = "¡Exito!";
					$('#'+name+'1').removeClass('error');	
					$('#'+name+'1').addClass('success');
					$('#'+name2+'1').removeClass('error');	
					$('#'+name2+'1').addClass('success');
				}else{
					document.getElementById(name+"t").innerHTML = "las contraseñas no inciden";
					$('#'+name+'1').removeClass('success');	
					$('#'+name+'1').addClass('error');
					$('#'+name2+'1').removeClass('success');	
					$('#'+name2+'1').addClass('error');
				}
			}
			
			if(l > maxi){
				document.getElementsByName(name).item(0).value = data.substr(0,maxi);
			}
			return band;	
		}
		/**************** FIN VALIDACION TEXTO ************************/
		
		/**************** VALIDACION APELLIDO ************************/
		function APELLIDO(name,maxi){
			var data = document.getElementsByName(name).item(0).value;
			var band = false;
			var posicion = data.indexOf(' ');
			var tam = data.length;
			
			if(tam > 6 && posicion > 2 && (tam - posicion) > 3 && (/^[A-Za-zÁ-Úá-ú\s\xF1\xD1]+$/.test(data))){
				band = true;
				document.getElementById(name+"t").innerHTML = "¡Éxito!";
				$('#'+name+'1').removeClass('error');	
				$('#'+name+'1').addClass('success');
			}else{
				if((tam)<=3){
					document.getElementById(name+"t").innerHTML = "1er apellido mayor a 2 dígitos";	
				}else if(posicion < 2){
					document.getElementById(name+"t").innerHTML = "Ingrese un segundo apellido";	
				}else if((tam - posicion) <= 3){
					document.getElementById(name+"t").innerHTML = "2do apellido mayor a 2 dígitos";	
				}else if(!(/^[A-Za-zÁ-Úá-ú\s\xF1\xD1]+$/.test(data))){
					document.getElementById(name+"t").innerHTML = "Apellido inválido";	
				}
				$('#'+name+'1').removeClass('success');
				$('#'+name+'1').addClass('error');
			}
			
			if(tam > maxi){
				document.getElementsByName(name).item(0).value = data.substr(0,maxi);
			}
			return band;
		}
		/**************** FIN VALIDACION APELLIDO ************************/
		
		/**************** VALIDACION CORREO ************************/
		function CORREO(name, maxi){
			var data = document.getElementsByName(name).item(0).value;
			var band = false;
			var l = data.length;
			var posicion = data.indexOf('@');
			var subdata;
			var posicion2;
			if(posicion > 3){
				subdata = data.substr(posicion,l);
				posicion2 = subdata.indexOf('.');
				var l2 = subdata.length;
			}
				
			if(l < 3){
				document.getElementById(name+"t").innerHTML = "agregue mas caracteres";
				$('#'+name+'1').removeClass('success');	
				$('#'+name+'1').addClass('error');
			}else if(!(/([@])/.test(data))){
				document.getElementById(name+"t").innerHTML = "falta el signo '@'";
				$('#'+name+'1').removeClass('success');	
				$('#'+name+'1').addClass('error');
			}else if(!(/([.])/.test(subdata))) {
				document.getElementById(name+"t").innerHTML = "falta el signo '.'";
				$('#'+name+'1').removeClass('success');	
				$('#'+name+'1').addClass('error');	
			}else if((/(['" ])/.test(subdata))) {
				document.getElementById(name+"t").innerHTML = "comillas y espacios no permitidos";
				$('#'+name+'1').removeClass('success');	
				$('#'+name+'1').addClass('error');	
			}else if((l2 - posicion2) < 3){
				document.getElementById(name+"t").innerHTML = "correo electrónico incompleto";
				$('#'+name+'1').removeClass('success');	
				$('#'+name+'1').addClass('error');
			}else{
				band = true;
				document.getElementById(name+"t").innerHTML = "¡Éxito!";
				$('#'+name+'1').removeClass('error');	
				$('#'+name+'1').addClass('success');	
			}
			
			if(l > maxi){
				document.getElementsByName(name).item(0).value = data.substr(0,maxi);
			}
			return band;
		}
		/**************** FIN VALIDACION CORREO ************************/
		
		function mostrar(name){
			document.getElementById(name).style.display = "block";		
		}
		
		function ocultar(name){
			document.getElementById(name).style.display = "none";	
		}