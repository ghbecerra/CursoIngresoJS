/* Al ingresar una edad debemos informar si la persona es mayor
 de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o
 niño (menor a 13 años). */
function Mostrar()
{ 
	var laEdad;
	laEdad=document.getElementById('edad').value;
	/*
	if (laEdad>17)
		{
		alert("la persona mayor de edad");
		}
	if (laEdad<13)
		{
		alert("persona es un niño");
		}
	if (laEdad>12 && laEdad<18)
		{
		alert("la persona es adolescente");
		}
	*/
	if (laEdad>17)
		{ 
		alert("la persona es mayor de edad");
		}else{
			if (laEdad<13)
				{
				alert("la persona es un niño");
				}else{
					alert("la persona es adolescente");
					}//fin if (laEdad<13)
			}//fin if (laEdad>17)
}