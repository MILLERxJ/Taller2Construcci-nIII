let num1 = document.getElementById("numero1")
let num2 = document.getElementById("numero2")
let num3 = document.getElementById("numero3")
let num4 = document.getElementById("numero4")
let papa = document.querySelector(".resultadito")
let texto1 = document.createElement("p")
let texto2 = document.createElement("p")
let texto3 = document.createElement("p")
let arreglo = []
let numeroMayor = 0
let numeroMenor
let final
let mostrar = document.querySelector(".mostrar")
let arregloFinal = []
papa.addEventListener("click", function () {
    let numero1 = parseInt(num1.value)
    let numero2 = parseInt(num2.value)
    let numero3 = parseInt(num3.value)
    let numero4 = parseInt(num4.value)
    if (numero1 == numero2 || numero1 == numero3 || numero1 == numero4 || numero2 == numero3 || numero2 == numero4 || numero3 == numero4) {
        alert("Alguno de los numeros esta repetido, vuelve a ingresar uno nuevo")
    }
    else {
        arreglo.push(numero1, numero2, numero3, numero4)
        numeroMenor = arreglo[0]
        for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i] > numeroMayor) {
                numeroMayor = arreglo[i];
            }
            if (arreglo[i] < numeroMenor) {
                numeroMenor = arreglo[i];
            }
        }
    }
    let mayorTexto = document.createTextNode("El numero mayor es: " + numeroMayor);
    let menorTexto = document.createTextNode("El numero menor es: " + numeroMenor);
    texto1.appendChild(mayorTexto);
    texto2.appendChild(menorTexto);
    mostrar.insertAdjacentElement("afterbegin", texto2)
    mostrar.insertAdjacentElement("afterbegin", texto1)
    console.log(numeroMayor + " Aqui")
    for (let a = 0; a < arreglo.length; a++) {
        if (numeroMayor == arreglo[a]) {
            arreglo.splice(a, 1)

        }
    }
    let finalTexto = document.createTextNode("El arreglo con el numero mayor eliminado es: " + arreglo)
    texto3.appendChild(finalTexto)
    mostrar.insertAdjacentElement("afterbegin", texto3)
})