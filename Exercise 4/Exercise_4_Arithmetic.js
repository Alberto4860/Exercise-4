/*
López Pérez Juan Alberto    ID:4860
Exercise 4 — Basic Arithmetic Calculator
*/
//Primero declaro las 4 funciones para las 4 operaciones que voy a ocupar
function sum(x, y) {
    return x + y
}

function subtract(x, y) {
    return x - y
}

function multiply(x, y) {
    return x * y
}

function divide(x, y) {
//Aqui hago una simple validacion para no dividir entre 
    if (y === 0) {
        return "Error: Can't divide by 0."
    }
    return x / y
}
//Ahora utilizo un prompt para ingresar la opcion de operacion que yo quiera hacer y uso el parseInt para convertirlo a entero
let opcion = prompt("Ingrese una opcion: \n1. Suma \n2. Resta \n3. Multiplicacion \n4. Division")
opcion = parseInt(opcion)
//Declaro las 2 variables que voy a usar
let x, y
//Aqui hare una condicion para que solo se eligan las opciones que hay, y uso el parseFloat para poder usar decimales
if (opcion >= 1 && opcion <= 4) {
    x = parseFloat(prompt("Ingresa el primer numero: "))
    y = parseFloat(prompt("Ingresa el segundo numero: "))
} else{
    console.log("Opcion no valida")
}
//Usando un switch, dependiendo de la operacion que se eligio, se mostrara el resultado en el console.log
switch(opcion){
    case 1:
        console.log(`The result of ${x} + ${y} is ${sum(x, y)}`)
        break
    case 2:
        console.log(`The result of ${x} - ${y} is ${subtract(x, y)}`)
        break
    case 3:
        console.log(`The result of ${x} * ${y} is ${multiply(x, y)}`)
        break
    case 4:
        console.log(`The result of ${x} / ${y} is ${divide(x, y)}`)
        break
    default:
        console.log("Opcion no valida")
}