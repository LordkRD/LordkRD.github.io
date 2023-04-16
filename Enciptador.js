/*	La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/	
	
	function encriptar(){
		var textIn = document.getElementById("textIn").value;
		var encriptador = textIn.replace(/e/gi, "enter").replace(/i/gi, "imes").
		replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
		
		var textOut=document.getElementById("textOut").value=encriptador;
		document.getElementById("textIn").value ="";
	}

	function desencriptar(){
		var textOut = document.getElementById("textOut").value;
		var desencriptador = textOut.replace(/ai/gi,"a").replace(/enter/gi,"e").
		replace(/imes/gi,"i").replace(/ober/gi,"o").replace(/ufat/gi,"u");

		textOut=document.getElementById("textOut").value=desencriptador;
		
	}

	function copiarTexto(textOut) {
		var textGuardado = document.createElement("textarea");
		textGuardado.value = document.getElementById("textOut").value;
                  
   		document.body.appendChild(textGuardado);
    	textGuardado.select();
   		document.execCommand("copy");
    	document.body.removeChild(textGuardado);
		
	}

	var botonCopiar = document.getElementById("botonCopiar");
	botonCopiar.onclick=copiarTexto;
		
	var botonEncritar = document.getElementById("botonEncriptar");
	botonEncritar.onclick = encriptar;

	var botonDesencritar = document.getElementById("botonDesencriptar");
	botonDesencritar.onclick = desencriptar;
	
	