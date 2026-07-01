const prompt = require('prompt-sync')();

let activo = true;
const opcionesValidas = ["+", "-", "*", "/", "si", "no"]

while (activo === true) {
  console.log()
  console.log('-------------------- Calculadora ---------------------')
  console.log()
  let operacion = prompt("Cuál operación deseas ejecutar (+,-,*,/): ")
  console.log()

  if (!opcionesValidas.includes(operacion)) {
    console.log("\nOperación no válida, intenta de nuevo")
    continue
  }

  let numero1 = Number(prompt("Ingresa el primer número: "))
  let numero2 = Number(prompt("Ingresa el segundo número: "))

  if (Number.isNaN(numero1) || Number.isNaN(numero2)) {
    console.log("\nDebes ingresar números válidos")
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
    const div = numero1 / numero2

    if (!Number.isFinite(div)) {
      console.log("\nNo puedes dividir entre cero")
      continue
    }

    console.log(`El resultado es ${div}`)
  }

  console.log()
  let respuesta = prompt("Desea hacer otra operación (si/no): ")

  while (!["si", "no"].includes(respuesta.toLowerCase())) {
    console.log("\nOpción no válida, intenta de nuevo")
    respuesta = prompt("Desea hacer otra operación (si/no): ")
  }

  if (respuesta.toLowerCase() === "si") {
    activo = true
  }

  if (respuesta.toLowerCase() === "no") {
    activo = false
  }
}