/* 3-Realizar el algoritmo que al presionar el bot&oacute;n "Mostrar"
 tome por ID dos datos, el largo y ancho de un terreno y luego que muestre
 cuantos metros de alambre se necesitan para colocarle 6 hilos de alambrado
 a su perímetro */
function Mostrar()
{
	var largo;
	var ancho;
	var perimetro;
	var cantidadalambre;
	ancho=document.getElementById('ancho').value;
	ancho=parseInt(ancho);
	largo=document.getElementById('largo').value;
	largo=parseInt(largo);
	perimetro=(largo*2)+(ancho*2);
	cantidadalambre=perimetro*6;
	alert("Cantidad de alambre : "+cantidadalambre);
}