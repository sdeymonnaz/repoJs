//1. Realiza un programa para obtener el menor de 2 números ingresados

let numero1 = parseInt(prompt("Ingrese el primer numero"));
let numero2 = parseInt(prompt("Ingrese el segundo numero"));
if (numero1 > numero2) {
    console.log("El numero menor es", numero2);
}
else {
    console.log("El numero menor es", numero1);
}

//2. Realizar un programa que determine  si un número es par o impar
let numero = parseInt(prompt("Ingrese un numero"));
if (numero % 2 == 0) {
    console.log("El numero", numero, "es par");
}
else {
    console.log("El numero", numero, "es impar");
}

//3. Declarar una variable que se llame ganeLaCarrera y asignarle el valor false. Mostrar por la terminal un mensaje que diga 'Ganaste' si ganeLaCarrera es verdadero y 'Perdiste' si su valor es falso.
let ganeLaCarrera = false;
if (ganeLaCarrera) {
    console.log("Ganaste");
}
else {
    console.log("Perdiste");
}

//4. Declarar una variable que se llame posicionEnLaCarrera y asignarle el número 6. 
//Mostrar por la consola uno de los siguientes mensajes según la posición que salió el corredor:
//-'FELICITACIONES, SALISTE 1RO' si la posicionEnLaCarrera es 1.
//-'Te falto poquito para ganar' si la posicionEnLaCarrera es 2.
//-'Sos un orgullo para tu familia' si la posicionEnLaCarrera es 3.
//-'Volvé a tu casa' si la posicionEnLaCarrera es mayor a 3.
//-'No tires fruta' si la posicionEnLaCarrera es otro valor no contemplado antes.

let posicionEnLaCarrera = 6;
if (posicionEnLaCarrera == 1) {
    console.log("FELICITACIONES, SALISTE 1RO");
}
else if (posicionEnLaCarrera == 2) {
    console.log("Te falto poquito para ganar");
}
else if (posicionEnLaCarrera == 3) {
    console.log("Sos un orgullo para tu familia");
}
else if (posicionEnLaCarrera > 3) {
    console.log("Volvé a tu casa");
}
else {
    console.log("No tires fruta");
}

//6. Realizar un programa que calcule el importe total a abonar en una factura, 
//teniendo en cuenta que si el importe total supera los 1000$  se aplica un descuento del 20%.
let importe = parseInt(prompt("Ingrese el importe de la factura"));
if (importe > 1000) {
    importe = importe - (importe * 0.2);
    console.log("El importe total a abonar es", importe);
}
else {
    console.log("El importe total a abonar es", importe);
}

//7. Hacer un programa para obtener las comisiones por ventas de un vendedor.
//Los datos que se ingresan son monto vendido y código de vendedor. Si el código de vendedor es menor a 100
//las comisiones son de un 30%, si el código esta entre 100 y 200 son del 20% y si es mayor a 200 10%.
//Mostrar el código de vendedor, el monto vendido y el valor de las comisiones.

let montoVendido = parseInt(prompt("Ingrese el monto vendido"));
let codigoVendedor = parseInt(prompt("Ingrese el codigo de vendedor"));
if (codigoVendedor < 100) {
    let comision = montoVendido * 0.3;
    console.log("El codigo de vendedor es", codigoVendedor, "el monto vendido es", montoVendido, "y el valor de las comisiones es", comision);
}
else if (codigoVendedor >= 100 && codigoVendedor <= 200) {
    let comision = montoVendido * 0.2;
    console.log("El codigo de vendedor es", codigoVendedor, "el monto vendido es", montoVendido, "y el valor de las comisiones es", comision);
}
else {
    let comision = montoVendido * 0.1;
    console.log("El codigo de vendedor es", codigoVendedor, "el monto vendido es", montoVendido, "y el valor de las comisiones es", comision);
}

//8. Se desea escribir los nombres de los días de la semana en función de la variable d (día) introducida por teclado.
//1(Lunes) – 2(martes) – 3(Miércoles)……..6(Sábado) – 7(Domingo)

let d = parseInt(prompt("Ingrese el dia de la semana"));
if (d == 1) {
    console.log("Lunes");
}
else if (d == 2) {
    console.log("Martes");
}
else if (d == 3) {
    console.log("Miercoles");
}
else if (d == 4) {
    console.log("Jueves");
}
else if (d == 5) {
    console.log("Viernes");
}
else if (d == 6) {
    console.log("Sabado");
}
else if (d == 7) {
    console.log("Domingo");
}
else {
    console.log("Verifique el número de día");
}

//9. Hacer un programa que calcule el pago que hacen un grupo de personas para ver una película
// teniendo en cuenta que si el grupo es menor de 8 personas el pago es de 1.5 pesos por persona
// y para grupos de 8 personas o más el pago es 0.5 pesos por persona.

let cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas"));
if (cantidadPersonas < 8) {
    let pago = cantidadPersonas * 1.5;
    console.log("El pago es", pago);
}
else {
    let pago = cantidadPersonas * 0.5;
    console.log("El pago es", pago);
}



//10. Una farmacia hace el 15% de descuento a sus clientes si la compra es mayor a 100 pesos.
// Escribir un programa que dado el monto de una compra como valor numérico, diga cuanto debe abonar
// el cliente aplicando el descuento si es necesario.

let montoCompra = parseInt(prompt("Ingrese el monto de la compra"));
if (montoCompra > 100) {
    let pago = montoCompra * 0.85;
    console.log("El pago es", pago);
}
else {
    console.log("El pago es", montoCompra);
}


