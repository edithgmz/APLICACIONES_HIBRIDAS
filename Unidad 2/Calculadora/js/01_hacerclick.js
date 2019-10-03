//Objetos con las propiedades de la calculadora
var p = {
    teclas: document.querySelectorAll(".calculadora ul li"),
    action: null
}

//Objetos con los métodos de la calculadora
var m = {
    inicio: function () {
        for (var i = 0; i <= p.teclas.length; i++) {
            p.teclas[i].addEventListener("click", m.oprimirTecla);
        }
    },
    oprimirTecla: function (tecla) {
        p.action = tecla.target.getAttribute("class");
        m.calculadora(p.action);
    },
    calculadora: function (action) {
        switch (action) {
            case "numero":
                console.log("numero");
                break;
            case "signo":
                console.log("signo");
                break;
            case "decimal":
                console.log("decimal");
                break;
            case "igual":
                console.log("igual");
                break;
        }
    }
}

m.inicio();
