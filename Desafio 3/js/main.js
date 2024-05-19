let NombreProducto = "Torta"
let PercioUnitario = 1000
let CantidadDeseada = prompt ("Ingrese la cantidad de tortas que desea comprar")

let CostoTotal = PercioUnitario * CantidadDeseada

if (CantidadDeseada >=5) {
    CostoTotal *= 0.90;
    alert ( " El costo de la compra es:" + CostoTotal)
}
else {
    alert ( " El costo de la compra es:" + CostoTotal)
}