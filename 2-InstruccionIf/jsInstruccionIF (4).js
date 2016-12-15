/* Al ingresar una edad debemos informar si la persona es
 adolescente, edad entre 13 y 17 años (inclusive). */
function Mostrar()
{ 
	var laEdad;
	laEdad=document.getElementById('edad').value;
	if (laEdad>12 && laEdad<18)
		{
		alert("La persona es adolescente.");
		}
}