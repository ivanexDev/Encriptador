function botonEncriptar () {
    document.getElementById("imagen").style.display ="none";
    document.getElementById("texto").style.display ="none";
    document.getElementById("span").style.display ="none";
    document.getElementById("respuesta").style.display ="flex";
    document.getElementById("copiar").style.display ="block";
    document.getElementById("caja-encriptado").style.justifyContent="space-between"
    let textoarea = document.getElementById("textoAcodificar").value;
    encriptar(textoarea); 
}

function botonDesencriptar () {
    document.getElementById("imagen").style.display ="none";
    document.getElementById("texto").style.display ="none";
    document.getElementById("span").style.display ="none";
    document.getElementById("respuesta").style.display ="flex";
    let textoarea = document.getElementById("textoAcodificar").value;
    desencriptar(textoarea); 
}

function copiarResultado(){
    let textoCopiado = document.getElementById("respuesta").textContent;
    navigator.clipboard.writeText(textoCopiado);
}

function escribirTexto(texto){
    document.getElementById("respuesta").innerHTML = texto;
    document.getElementById("textoAcodificar").value = "";
}


function encriptar(texto){
    var encriptado = "";
    for (let i = 0; i < texto.length; i++) {
        (texto[i] == "a") ? encriptado = encriptado + "ai" :
        (texto[i] == "e") ? encriptado = encriptado + "enter" :
        (texto[i] == "i") ? encriptado = encriptado + "imes" :
        (texto[i] == "o") ? encriptado = encriptado + "ober" : 
        (texto[i] == "u") ? encriptado = encriptado + "ufat" : 
        encriptado = encriptado + texto[i] 
    }
    escribirTexto(encriptado);
}

function desencriptar(texto){
    var desencriptado = texto.replace(/ai/g,"a")
        desencriptado = desencriptado.replace(/enter/g,"e")
        desencriptado = desencriptado.replace(/imes/g,"i")
        desencriptado = desencriptado.replace(/ober/g,"o")
        desencriptado = desencriptado.replace(/ufat/g,"u")

        escribirTexto(desencriptado);
    // document.write(desencriptado);
}

