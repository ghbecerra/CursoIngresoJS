/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	//id="elNombre">
	var dat;
	dat=prompt("Ingrese nombre: ");	
	document.getElementById('elNombre').value=dat;
}