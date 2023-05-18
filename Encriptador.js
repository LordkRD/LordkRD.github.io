/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

const codigos = ["enter", "imes", "ai", "ober", "ufat"];
const vocales = ["e", "i", "a", "o", "u"];

document.getElementById("textIn").addEventListener("input", normalizarTexto);

// Esta función se encarga de asegurarse de que el texto esta normalizado (sin mayúsculas y caracteres especiales)
function normalizarTexto() {

	let textIn = document.getElementById("textIn").value;

	if (textIn.value != "") {

		let sinAcento = textIn.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
		let sinCaracteresEspeciales = sinAcento.normalize("NFD").replace(/[^a-zñ0-9. ]/g, "");
		document.getElementById("textIn").value = sinCaracteresEspeciales;

	}

}

document.getElementById("textIn").addEventListener("keypress", digitalLetras);
// Esta función se encarga de asegurarse que el usuario sólo ingrese letras al digital y presionar teclas.
function digitalLetras(e) {

	if (e.key.match(/[a-zñ0-9 ]/g) === null) {
		mostrarMensaje("validarMayuscula")
		e.preventDefault();
	}

}
// Esta función se encarga de encriptar un mensaje utilizando un algoritmo específico.
function encriptar() {

	let textIn = document.getElementById("textIn").value;
	let textDividido = Array.from(textIn); // para convertir el texto en un array

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
				} else { document.getElementById("textOut").value = textDividido.join(""); }
			}
		}

		document.getElementById("textOut").setAttribute("title", "Texto Original: " + "'" + textIn + "'");
		document.getElementById("textIn").value = "";

	}
	

}

// Esta función se encarga de desencriptar un texto utilizando el algoritmo específico implementado. 
// Es llamada cuando el botón 'botonDesencriptar' es presionado.
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

// Esta función copia el contenido del elemento HTML con el ID 'textOut' al portapapeles del sistema operativo. 
// Es llamada cuando el botón 'botonCopiar' es presionado.
function copiarTexto(textOut) {

	let textGuardado = document.createElement("textarea");
	textGuardado.value = document.getElementById("textOut").value;

	if (textGuardado.value != "") {

		document.body.appendChild(textGuardado);
		textGuardado.select();
		document.execCommand("copy");
		document.body.removeChild(textGuardado);

		mostrarMensaje("textoCopiado");

	} else {
		
		mostrarMensaje("textoNoCopiado");
	}
	

}



// Esta función muestra un mensaje en una ventana emergente con el texto pasado como parámetro.
function mostrarMensaje(mtext) {

	let mensaje = document.getElementById(mtext);
	mensaje.className = "show";
	setTimeout(function () { mensaje.className = mensaje.className.replace("show", ""); }, 1000);

}

// Este código obtiene los elementos de botón por su id y 
// asigna manejadores de evento a ellos. Cuando cada botón es pulsado, 
// llamará a la función correspondiente 'copiarTexto', 'encriptar' o 'desencriptar'.
let botonCopiar = document.getElementById("botonCopiar");
botonCopiar.onclick = copiarTexto;

let botonEncritar = document.getElementById("botonEncriptar");
botonEncritar.onclick = encriptar;

let botonDesencritar = document.getElementById("botonDesencriptar");
botonDesencritar.onclick = desencriptar;

