/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	//id="elNombre">
	var dat= prompt("elNombre");	
	document.getElementById('elNombre').value=dat
}