/*Debemos lograr tomar el importe por ID. Transformarlo
 a entero (parseInt), luego mostrar el importe con un
 descuento del %25 en el cuadro de texto "RESULTADO". */
function MostrarAumento()
{
	//id="importe"
	//id="resultado"
	var importe;
	var result;
	var resultado;
	importe=document.getElementById('importe').value;
	result=parseInt(importe)*0.25;
	resultado=importe-result;
	document.getElementById('resultado').value=resultado;
}