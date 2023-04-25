/*	La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
var codigos = ["enter", "imes", "ai", "ober", "ufat"];
var vocales = ["e", "i", "a", "o", "u"];

function encriptar() {

	document.getElementById("textIn").focus();
	var textIn = document.getElementById("textIn").value;
	var sinAcento = textIn.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // para quitar el acento
	var sinCaracteres = sinAcento.replace(/[^a-z0-9 ]/g, '');
	var textDividido = Array.from(sinCaracteres); // para convertir el texto en un array

	if (textDividido == false) {
		alert("Coloque un texto");
	} else {

		for (var i = 0; i < textDividido.length; i++) {
			for (var v = 0; v < vocales.length; v++) {
				if (textDividido[i] == vocales[v]) {
					textDividido.splice(i, 1, codigos[v]);
					var textEncriptado = textDividido.toString().replace(/,/gi, "");
					var textOut = document.getElementById("textOut").value = textEncriptado;
					document.getElementById("textOut").style.backgroundImage = 'none';
					break;
				} 
			}
		}


		document.getElementById("textIn").value = "";
	}
}

function desencriptar() {
	var textIn = document.getElementById("textIn").value;
	var desencriptador = textIn.replace(/ai/gi, "a").replace(/enter/gi, "e").
		replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u");
	textOut = document.getElementById("textOut").value = desencriptador;



}

function copiarTexto(textOut) {
	var textGuardado = document.createElement("textarea");
	textGuardado.value = document.getElementById("textOut").value;
	if(textGuardado.value != ""){
	

	document.body.appendChild(textGuardado);
	textGuardado.select();
	document.execCommand("copy");
	document.body.removeChild(textGuardado);
	var x = document.getElementById("texto-copiado");
 	x.className = "show";
  	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
	}

}


var botonCopiar = document.getElementById("botonCopiar");
botonCopiar.onclick = copiarTexto;

var botonEncritar = document.getElementById("botonEncriptar");
botonEncritar.onclick = encriptar;

var botonDesencritar = document.getElementById("botonDesencriptar");
botonDesencritar.onclick = desencriptar;

