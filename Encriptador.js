/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
const codigos = ["enter", "imes", "ai", "ober", "ufat"];
const vocales = ["e", "i", "a", "o", "u"];


function encriptar() {

	document.getElementById("textIn").focus();
	let textIn = document.getElementById("textIn").value;
	let sinAcento = textIn.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // para quitar el acento
	let sinCaracteres = sinAcento.replace(/[^a-z0-9 ]/g, ''); // omitir caracteres especiales
	let textDividido = Array.from(sinAcento); // para convertir el texto en un array

	if (textIn == "") {
		mostrarMensaje("textareaVacio");
	} else {

		for (let i = 0; i < textDividido.length; i++) {
			for (let v = 0; v < vocales.length; v++) {
				if (textDividido[i] == vocales[v]) {
					textDividido.splice(i, 1, codigos[v]);
					let textEncriptado = textDividido.join("");
					document.getElementById("textOut").value = textEncriptado;
					document.getElementById("textOut").style.backgroundImage = 'none';
					break;
				} else { document.getElementById("textOut").value = textDividido.join("") ; }
			}
		}

		document.getElementById("textOut").setAttribute("title","Texto Original: "+"'"+textIn+"'" );	
		document.getElementById("textIn").value = "";
	}
	verificar();
}

function desencriptar() {
	let textIn = document.getElementById("textIn").value;
	if (textIn == "") {
		mostrarMensaje("textareaVacio");
	} else {

		
		let desencriptador = textIn.replace(/ai/gi, "a").replace(/enter/gi, "e").
			replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u");

		textOut = document.getElementById("textOut").value = desencriptador;

	}
}

function copiarTexto(textOut) {

	let textGuardado = document.createElement("textarea");
	textGuardado.value = document.getElementById("textOut").value;

	if (textGuardado.value != "") {

		document.body.appendChild(textGuardado);
		textGuardado.select();
		document.execCommand("copy");
		document.body.removeChild(textGuardado);
		mostrarMensaje("textoCopiado");

	}else{
	mostrarMensaje("textoNoCopiado");
}

}

function mostrarMensaje(mtext){
	
	let mensaje = document.getElementById(mtext);
	mensaje.className = "show";
	setTimeout(function () { mensaje.className = mensaje.className.replace("show", ""); }, 1000);
	
}

document.getElementById("textIn").addEventListener("keypress",verificar);
function verificar(e) {
 
	// comprovamos con una expresion regular que el caracter pulsado sea
	// una letra, numero o un espacio
	if(e.key.match(/[a-zñ]/g)===null) {
		mostrarMensaje("validarMayuscula")
		// Si la tecla pulsada no es la correcta, eliminado la pulsación
		e.preventDefault();
	}
}

let botonCopiar = document.getElementById("botonCopiar");
botonCopiar.onclick = copiarTexto;

let botonEncritar = document.getElementById("botonEncriptar");
botonEncritar.onclick = encriptar;

let botonDesencritar = document.getElementById("botonDesencriptar");
botonDesencritar.onclick = desencriptar;

