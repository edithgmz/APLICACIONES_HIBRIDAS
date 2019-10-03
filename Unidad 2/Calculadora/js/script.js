//Objetos con las propiedades de la calculadora
var p = {
    teclas: document.querySelectorAll("#calculadora ul li"),
    action: null,
    digito: null,
    operaciones: document.querySelector("#operaciones"),
    cantidadSignos: 0,
    cantidadDecimales: false,
    resultado: false
};

//Objetos con los métodos de la calculadora
var m = {
    inicio: function(){
        for(var i = 0; i <= p.teclas.length; i++){
            p.teclas[i].addEventListener("click", m.oprimirTecla);
        }
    },
    teclado: function(){
        document.addEventListener("keydown", m.oprimir);
    },
    oprimir: function(tecla){
        if(tecla.keyCode == 48 || tecla.keyCode == 96){
            p.action = "numero";
            p.digito = 0;
        } else if (tecla.keyCode == 49 || tecla.keyCode == 97) {
            p.action = "numero";
            p.digito = 1;
        } else if (tecla.keyCode == 50 || tecla.keyCode == 98) {
            p.action = "numero";
            p.digito = 2;
        } else if (tecla.keyCode == 51 || tecla.keyCode == 99) {
            p.action = "numero";
            p.digito = 3;
        } else if (tecla.keyCode == 52 || tecla.keyCode == 100) {
            p.action = "numero";
            p.digito = 4;
        } else if (tecla.keyCode == 53 || tecla.keyCode == 101) {
            p.action = "numero";
            p.digito = 5;
        } else if (tecla.keyCode == 54 || tecla.keyCode == 102) {
            p.action = "numero";
            p.digito = 6;
        } else if (tecla.keyCode == 55 || tecla.keyCode == 103) {
            p.action = "numero";
            p.digito = 7;
        } else if (tecla.keyCode == 56 || tecla.keyCode == 104) {
            p.action = "numero";
            p.digito = 8;
        } else if (tecla.keyCode == 57 || tecla.keyCode == 105) {
            p.action = "numero";
            p.digito = 9;
        } else if (tecla.keyCode == 187 || tecla.keyCode == 107) {
            p.action = "signos";
            p.digito = "+";
        } else if (tecla.keyCode == 189 || tecla.keyCode == 109) {
            p.action = "signos";
            p.digito = "-";
        } else if (tecla.keyCode == 88 || tecla.keyCode == 106) {
            p.action = "signos";
            p.digito = "*";
        } else if (tecla.keyCode == 111) {
            p.action = "signos";
            p.digito = "/";
        } else if (tecla.keyCode == 190 || tecla.keyCode == 110) {
            p.action = "decimal";
            p.digito = ".";
        } else if (tecla.keyCode == 13) {
            p.action = "decimal";
        } else if (tecla.keyCode == 8) {
            p.action = "";
            m.borrarCalculadora();
        } else{
            p.action = "";
            p.digito = "";
        }
    },
    oprimirTecla: function(tecla){
        p.action = tecla.target.getAttribute("class");
        p.digito = tecla.target.innerHTML;
        m.calculadora(p.action, p.digito);
    },
    calculadora: function(action, digito){
        switch(action){
            case "numero":
                p.cantidadSignos = 0;
                if(p.operaciones.innerHTML == 0){
                    p.operaciones.innerHTML = digito;
                } else{
                    p.operaciones.innerHTML += digito;
                }
                break;
            case "signo":
                p.cantidadSignos++;
                if(p.cantidadSignos == 1){
                    if(p.operaciones.innerHTML == 0){
                        p.operaciones.innerHTML = 0;
                    } else{
                        p.operaciones.innerHTML += digito;
                    }
                }
                break;
            case "decimal":
                if(!p.cantidadDecimales && p.cantidadSignos != 1){
                    p.operaciones.innerHTML += digito;
                    p.cantidadDecimales = true;
                }
                break;
            case "igual":
                p.operaciones.innerHTML = eval(p.operaciones.innerHTML);
                var expression = /./g; //Acomodar en una expresión regular el resultado, formatea el texto
                if(!expression.test(p.operaciones.innerHTML)){ //Evalúa que hay algo escrito
                    p.cantidadDecimales = true;
                }
                p.resultado = true;
                break;
        }
    },
    borrarCalculadora: function(){
        p.resultado = false;
        p.operaciones.innerHTML = 0;
    }
};

m.inicio();
m.teclado();
