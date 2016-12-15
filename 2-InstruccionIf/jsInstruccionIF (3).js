/*Al ingresar una edad debemos informar si la persona es
 mayor de edad, sino informar que es un menor de edad. */
function Mostrar()
{
	var edad;
	edad=document.getElementById('edad').value;
	if (edad>17)
		{
		alert("Mayor de edad");
		}else{
			alert("Menor de edad");
			}
}