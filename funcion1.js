let tabla = document.querySelector(".listado-tabla")
let producto = document.querySelector(".producto")
let unidades = document.querySelector(".unidades")
let stock = document.querySelector(".stock")
let agregar = document.querySelector(".agregar")
let calcular = document.querySelector(".calcular")
let totalT = document.querySelector(".totalsito")
let datos = []

agregar.addEventListener("click", function () {
    valueProducto = producto.value
    valueUnidades = unidades.value
    valueStock = stock.value
    total = (valueStock * valueUnidades)
    datos.push(total)
    console.log(datos)
    let fila = document.createElement("tr");
    let tProducto = document.createElement("td");
    let tUnidades = document.createElement("td");
    let tStock = document.createElement("td");
    tProducto.textContent = valueProducto;
    tUnidades.textContent = valueUnidades;
    tStock.textContent = valueStock;
    fila.appendChild(tProducto);
    fila.appendChild(tUnidades);
    fila.appendChild(tStock);
    tabla.appendChild(fila);
})

calcular.addEventListener("click", function () {
    let textito = document.querySelector(".totalsito")
    let total = datos.reduce(function (acumulado, actual) {
      return acumulado + actual
    }, 0)
    let precio = document.createTextNode(total)
    textito.appendChild(precio)
    totalT.insertAdjacentElement("afterend", textito)
  })
  