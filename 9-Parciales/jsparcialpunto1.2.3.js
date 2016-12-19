/* 1-realizar el algoritmo que lea la base por ID de un cuadrado e informar el perímetro del mismo por alert.
2-realiazar el algoritmo que lea un importe por de un producto por prompt y muestre el importe final
sumándole el IVA (21%).
3- realizar el algoritmo que tome por ID dos datos, el largo y ancho de un terreno y luego que muestre
cuantos metros de alambre se necesitan para colocarle 3 hilos de alambrado a su perímetro. */
function puntoUno()
{
	var base;
	var perimetro;
	base=document.getElementById('Base').value;
	base=parseInt(base);
	perimetro=base*4;
	alert("El perimetro es: "+perimetro);
}
function puntoDos()
{
	var importe;
	var iva;
	var resultado;
	importe=prompt("ingrese importe","$$$");
	importe=parseInt(importe);
	iva=importe*0.21;
	resultado=importe+iva;
	alert('Importe final: '+resultado);
}
function puntoTres()
{
	var largo;
	var ancho;
	var perimetro;
	var cantidadalambre;
	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);
	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);
	perimetro=(largo*2)+(ancho*2);
	cantidadalambre=perimetro*3;
	alert("Cantidad de alambre : "+cantidadalambre);
}