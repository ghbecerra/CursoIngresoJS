/* 2. Para el departamento de Construcción:
A. Mostrar la cantidad de alambre a comprar si se ingresara el largo y el ancho
 de un terreno rectangular y se debe alambra con tres hilos de alambre.
B. Mostrar la cantidad de alambre a comprar si se ingresara el radio de un terreno
 circular y se debe alambra con tres hilos de alambre.
C. Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal,
 debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen. */
function Rectangulo () 
{
	//id="Largo"
	//id="Ancho"
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
function Circulo () 
{
	//id="Radio"
	var radio;
	var circunferencia;
	var cantidadalambre;
	radio=document.getElementById('Radio').value;
	radio=parseInt(radio);
	circunferencia=2*3.14*radio;
	cantidadalambre=circunferencia*3;
	alert("Cantidad de alambre : "+cantidadalambre);
}
function Materiales () 
{
	var largo;
	var ancho;
	var superficie;
	var cemento;
	var cal;
	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);
	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);
	superficie=largo*ancho;
	cemento=superficie*2;
	cal=superficie*3;
	alert("Se necesitan "+cemento+" bolsas de cemento, y "+cal+" bolsas de cal.");
}