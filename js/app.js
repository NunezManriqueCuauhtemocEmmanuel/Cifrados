window.addEventListener("load", inicio, true);

function inicio(){
    document.getElementById("mensaje").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();
    }, true);
    document.getElementById("cifrar").addEventListener("click", function(){
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("mensaje2").value = cifrardo(texto, desplazamiento);
    }, true);
    document.getElementById("descifrar").addEventListener("click", function(){
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("mensaje2").value=descifrar(texto, desplazamiento);
    }, true);
    document.getElementById("cifrarT").addEventListener("click", function(){
        let textoT = document.getElementById("mensajeT").value;
        let clave = document.getElementById("clave").value;
        document.getElementById("mensaje2T").value = cifrarT(textoT, clave);
    }, true);
    document.getElementById("descifrarT").addEventListener("click", function(){
        let textoT = document.getElementById("mensajeT").value;
        let clave = document.getElementById("clave").value;
        document.getElementById("mensaje2T").value=descifrarT(textoT, clave);
    }, true);
}

function cifrardo (texto, desplazamiento){
    if(!texto)
    return "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    desplazamiento = (desplazamiento % 26 + 26) % 26;
    return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)+desplazamiento)%26]);
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
