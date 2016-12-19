/* 1-realizar el algoritmo que lea la base por ID de un cuadrado e informar
 la superficie del mismo por alert.
2-realiazar el algoritmo que lea un importe de un producto por prompt y
 muestre el importe final descontando un (25%) por fin de temporada.
3- realizar el algoritmo que tome por ID tres datos: precio1, precio2 y
 precio3 de una compra y luego que muestre la suma y el promedio de los precios. */
function puntoUno()
{
	var base;
	var superficie;
	base=document.getElementById('Base').value;
	base=parseInt(base);
	superficie=base*base;
	alert("La superficie es: "+superficie);
}
function puntoDos()
{
	var importe;
	var descuento;
	var resultado;
	importe=prompt("ingrese importe","$$$");
	importe=parseInt(importe);
	descuento=importe*0.25;
	resultado=importe-descuento;
	alert('Importe final: '+resultado);
}
function puntoTres()
{
	var precio1;
	var precio2;
	var precio3;
	var suma;
	var promedio;
	precio1=document.getElementById('Precio1').value;
	precio1=parseInt(precio1);
	precio2=document.getElementById('Precio2').value;
	precio2=parseInt(precio2);
	precio3=document.getElementById('Precio3').value;
	precio3=parseInt(precio3);
	suma=precio1+precio2+precio3;
	promedio=suma/3;
	alert("La suma de los precios: "+suma);
	alert("El promedio de los precios: "+promedio);
}