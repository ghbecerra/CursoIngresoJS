/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	//id="importe"
	//id="resultado"
	var importe;
	importe=document.getElementById('importe').value;
	var result=parseInt(importe)*0.25;
	var resultado=importe-result;
	document.getElementById('resultado').value=resultado;
}