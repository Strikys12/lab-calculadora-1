const prompt = require('prompt-sync')();
let activo = true;


while (activo === true) {
    let numero1 = prompt("Ingresa el primer número: ")
    numero1 = Number(numero1)
    let operacion = prompt("Cuál operación deseas ejecutar (+,-,*,/): ");
    let numero2 = prompt("Ingresa el segundo número: ")
    numero2 = Number(numero2)
    let resultado = 0;


    if (operacion === "+") {
        resultado = numero1 + numero2;
        console.log(resultado)
    }
    else if (operacion === "-") {
        resultado = numero1 - numero2;
        console.log(resultado)
    }
    else if (operacion === "*") {
        resultado = numero1 * numero2;
        console.log(resultado)
    }
    else if (operacion === "/") {
        if (numero1 === 0 || numero2 === 0) {
            console.log("No puedes dividir entre cero")
        } else {
            resultado = numero1 / numero2
        }
    }
    else { console.log("operación inválida") }


    let respuesta = prompt("Desea hacer otra operación:")
    if (respuesta === "si") {
        activo = true
    }

    else if (respuesta === "no") {
        activo = false
    }

    else { console.log("respuesta invalida") }
}

