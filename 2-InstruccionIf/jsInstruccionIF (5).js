/* Al ingresar una edad solo debemos informar si la persona NO es adolescente. */
function Mostrar()
{
	var laEdad;
	laEdad=document.getElementById('edad').value;
	if (laEdad<13 || laEdad>17)
		{
		alert("La persona NO es adolescente.");
		}
}