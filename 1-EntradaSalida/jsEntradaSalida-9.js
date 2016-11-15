/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	//id="sueldo"
	//id="resultado"
	var sueldo;
	sueldo=document.getElementById('sueldo').value;
	var resultado=parseInt(sueldo)+(sueldo/100*10);
	document.getElementById('resultado').value="Su Sueldo será de : "+resultado;

	//console muestra un msj como el alert pero solo yo puedo ver
	console.log("hola");
	console.log(sueldo);
	console.log("Su Sueldo será de : "+resultado);	
}