/*
1) Definición de Algoritmo (dar un ejemplo)
Un algoritmo es una secuencia de instrucciones que resuelve un problema.
Por ejemplo, como calcular temperatura en grados Farengheit a Celsius.
let gradosFarenheit = 100;
let gradosCelsius = (gradosFarenheit - 32) * 5 / 9;
console.log("Grados Celsius: ", gradosCelsius);

2) Que es Pseudocodigo (dar un ejemplo)
El pseudocódigo es una forma de escribir los pasos que va a realizar un programa
de la forma más cercana al lenguaje de programación pero en lenguaje humano.
1. Inicio
2. Declarar variables para gradosFarenheit
3. Declarar variables para gradosCelsius calculando gradosFarenheit - 32 y multiplicando por 5/9
4. Imprimir en consola "Grados Celsius: " y gradosCelsius
*/

//3.a Superficie de un rectangulo
let base = 10;
let altura = 20;
let superficie = base * altura;
console.log("Superficie del rectangulo: ", superficie);

//Superficie de un triangulo
let baseTriangulo = 10;
let alturaTriangulo = 20;
let superficieTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("Superficie del triangulo: ", superficieTriangulo);

//Superficie de un circulo
let radio = 10;
let superficieCirculo = Math.PI * Math.pow(radio, 2);
console.log("Superficie del circulo: ", superficieCirculo);

//3.b) Crear 3  variables numéricas, calcular e imprimir producto, suma y el promedio. Mostrar los resultados.
let num1 = 10;
let num2 = 20;
let num3 = 30;

let producto = num1 * num2 * num3;
let suma = num1 + num2 + num3;
let promedio = suma / 3;
console.log("El producto es: ", producto, "\nLa suma es: ", suma, "\nEl promedio es: ", promedio);

//3.c) Una tienda ofrece un descuento del 15% sobre el total de cada  compra y un cliente desea saber cuánto
//deberá pagar finalmente por su compra. Deberán crear 5 artículos los cuales tendrán sus nombres y valores,
//luego mostrar el descuento aplicado mas el total final
let pan = 100;
let leche = 150;
let jugo = 200;
let huevos = 180;
let carne = 300;
let subtotal = pan + leche + jugo + huevos + carne;
let descuento = subtotal * 0.15;
let total = subtotal - descuento;
console.log("Subtotal: ", subtotal, "\nDescuento: ", descuento, "\nTotal: ", total);

//3.d Dada una cantidad en pesos (el valor lo deben asignar ustedes), obtener la equivalencia en dólares,
//asumiendo que la unidad cambiaría es un dato desconocido.
let pesos = 1000;
let dolares = pesos / 200;
console.log("La equivalencia en dolares es: ", dolares);

//3.e) Un  cliente realizo una compra y necesita saber el importe del IVA de la misma. Realizar un algoritmo
//que dado el importe de una factura calcular el valor correspondiente al IVA.
let compra = 1000;
const tasaIva = 0.21;
let iva = compra * tasaIva;
console.log("El IVA es: ", iva);




