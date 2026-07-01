const prompt = require('prompt-sync')();
let activo = true;

const opcionesValidas = ["+", "-", "*", "/", "si", "no"]

while (activo === true) {
  console.log()
  console.log(" -------- Calculadora ---------");
  console.log()
  let operacion = prompt("Cuál operación deseas ejecutar (+,-,*,/): ")

  let numero1 = Number(prompt("Ingresa el primer número: "))
  let numero2 = Number(prompt("Ingresa el segundo número: "))

  if (!opcionesValidas.includes(operacion)) {
    console.log("Opción no válida, intenta de nuevo")
    continue
  }

  if (operacion === "+") {
    console.log(`El resultado es ${numero1 + numero2}`)
  }

  if (operacion === "-") {
    console.log(`El resultado es ${numero1 - numero2}`)
  }

  if (operacion === "*") {
    console.log(`El resultado es ${numero1 * numero2}`)
  }

  if (operacion === "/") {
    if (numero1 === 0 || numero2 === 0) {
      console.log("No puedes dividir entre cero")
    } else {
      console.log(`El resultado es ${numero1 / numero2}`)
    }
    else { console.log("operación inválida") }
    let respuesta = prompt("Desea hacer otra operación")
    if (respuesta === "si") {
      activo = true
    }

    if (respuesta.toLowerCase() === "no") {
      activo = false
    }
  }

