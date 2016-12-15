/* Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita". */
function Mostrar()
{
 	var edad;
	edad=document.getElementById('edad').value;
	if (edad=="15")
		{
		alert("niña bonita");
		}else{
			alert("niña no bonita");
			}
}