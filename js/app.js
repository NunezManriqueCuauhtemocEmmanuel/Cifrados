window.addEventListener("load", inicio, true);

function inicio(){
    document.getElementById("frase").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();
    }, true);
    document.getElementById("encriptar").addEventListener("click", function(){
        let texto = document.getElementById("frase").value;
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("descripcion").value = cifrado(texto, desplazamiento);
    }, true);
    document.getElementById("desencriptar").addEventListener("click", function(){
        let texto = document.getElementById("frase").value;
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("descripcionDes").value=descifrar(texto, desplazamiento);
    }, true);
    document.getElementById("cifrarT").addEventListener("click", function(){
        let textoT = document.getElementById("fraseT").value;
        let clave = document.getElementById("clave").value;
        document.getElementById("descripcionT").value = cifrarT(textoT, clave);
    }, true);
    document.getElementById("descifrarT").addEventListener("click", function(){
        let textoT = document.getElementById("fraseT").value;
        let clave = document.getElementById("clave").value;
        document.getElementById("descripcionDesT").value=descifrarT(textoT, clave);
    }, true);
}

function cifrado (texto, desplazamiento){
    if(!texto)
    return "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    desplazamiento = (desplazamiento % 26 + 26) % 26;
    return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)+desplazamiento)%26]);
    const num = "123456789";
    desplazamiento = (desplazamiento % 26 + 26) % 26;
    return texto.replace(/[1-9]/, c=> letras[(num.indexOf(c)+desplazamiento)%26]);

}

function descifrar (texto, desplazamiento){
    if(!texto)
    return "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    desplazamiento = (desplazamiento % 26 - 26) % 26;
    return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)-desplazamiento)%26]);
}

function cifrarT (texto, clave){
    let cont = 0;
    clave = parseInt(clave, 10);
    let message="";
    for(var i=0;i<clave;i++){
        cont = i;
        while(cont<texto.length){
            message+=texto[cont];
            cont+=clave;
        }
    }
    return message;
}

function descifrarT (texto, clave){
    let cont = 0;
    let res = texto.length%clave;
    clave = parseInt(clave, 10);
    let num = 0;
    num = Math.floor(texto.length/clave);
    let rep = 0;
    if(res>0){
        rep = num+1;
    }else{
        rep = num;
    }
    let message="";
    for(var i=0;i<rep;i++){
        cont = i;
        while(cont<texto.length){
            if(res>0){
                message+=texto[cont];
                cont+=num+1;
                res-=1;
            }else{
                message+=texto[cont];
                cont+=num;
            }
        }
        res = texto.length%clave;
    }
    return message.substring(0,texto.length);
}
