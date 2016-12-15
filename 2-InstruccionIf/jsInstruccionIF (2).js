/* Al ingresar una edad debemos informar si la persona es mayor de edad */
function Mostrar()
{
	var edad;
	edad=document.getElementById('edad').value;
	if (edad>17)
		{
		alert("Mayor de edad");
		}
}