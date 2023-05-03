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
	let sinCaracteres = sinAcento.replace(/[^a-z0-9 ]/g, '');
	let textDividido = Array.from(sinCaracteres); // para convertir el texto en un array

	if (textDividido.length === 0) {
		alert("Coloque un texto");
	} else {

		for (let i = 0; i < textDividido.length; i++) {
			for (let v = 0; v < vocales.length; v++) {
				if (textDividido[i] == vocales[v]) {
					textDividido.splice(i, 1, codigos[v]);
					let textEncriptado = textDividido.join("");
					let textOut = document.getElementById("textOut").value = textEncriptado;
					document.getElementById("textOut").style.backgroundImage = 'none';
					break;
				}
			}
		}


		document.getElementById("textIn").value = "";
	}
}

function desencriptar() {

	let textIn = document.getElementById("textIn").value;
	let desencriptador = textIn.replace(/ai/gi, "a").replace(/enter/gi, "e").
		replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u");
	textOut = document.getElementById("textOut").value = desencriptador;

}

function copiarTexto(textOut) {

	let textGuardado = document.createElement("textarea");
	textGuardado.value = document.getElementById("textOut").value;
	
	if (textGuardado.value != "") {

		document.body.appendChild(textGuardado);
		textGuardado.select();
		document.execCommand("copy");
		document.body.removeChild(textGuardado);
		let x = document.getElementById("texto-copiado");
		x.className = "show";
		setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);

	}

}

let botonCopiar = document.getElementById("botonCopiar");
botonCopiar.onclick = copiarTexto;

let botonEncritar = document.getElementById("botonEncriptar");
botonEncritar.onclick = encriptar;

let botonDesencritar = document.getElementById("botonDesencriptar");
botonDesencritar.onclick = desencriptar;

