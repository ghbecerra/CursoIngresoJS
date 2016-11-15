/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	//id="Largo"
	//id="Ancho"
	var Largo;
	var Ancho;
	Largo=document.getElementById('Largo').value;
	Ancho=document.getElementById('Ancho').value;
	var perimetro=parseInt(Largo*2)+parseInt(Ancho*2);
	var cantidadalambre=perimetro*3;
	alert("Cantidad de alambre : "+cantidadalambre);
}
function Circulo () 
{
	//id="Radio"
	var Radio;
	Radio=document.getElementById('Radio').value;
	var circunferencia=2*3.14*Radio;
	var cantidadalambre=circunferencia*3;
	alert("Cantidad de alambre : "+cantidadalambre);
}
function Materiales () 
{
	
}