
btnEncriptar = document.querySelector("#btn-encriptar");
btnDesencriptar= document.querySelector("#btn-desencriptar");
btnCopiar = document.querySelector("#btn-copy");
textoIngresado = document.querySelector(".text-input");
mensajeEncriptado=document.querySelector("#msg");

function validar(frase) {
    
    var buscar = /^[a-z ]+$/g;
    frase = textoIngresado.value;
    if (frase.match(buscar)) {   
        
    } else {
        alert("Sólo letras minúsculas, sin números ni caracteres especiales");
        inputTexto.value = "";
    }
}

btnEncriptar.addEventListener("click", function(event){
    event.preventDefault();    
    validar();
    texto = textoIngresado.value;
    textoEncriptado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    mensajeEncriptado.value = textoEncriptado;
    textoIngresado.value = "";
});
  
btnDesencriptar.addEventListener("click", function(event){
    event.preventDefault();
    texto = textoIngresado.value; 
    textoDesencriptado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    mensajeEncriptado.value = textoDesencriptado;
    textoIngresado.value = "";
});

btnCopiar.addEventListener("click", function(event){
    navigator.clipboard.writeText(mensajeEncriptado.value);
    mensajeEncriptado.value = "";
    textoIngresado.focus();
});

