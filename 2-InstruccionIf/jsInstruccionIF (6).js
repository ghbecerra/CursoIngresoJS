function Mostrar()
{
//tomo la edad  
	var laEdad;
	laEdad=document.getElementById('edad').value;
	/*if (laEdad>17) {
		alert("persona mayor de edad");
	}
	if (laEdad<13) {
		alert("persona es un niño");
	}
	if (laEdad>12 && laEdad<18) {
		alert("la persona es adolescente");
	}*/
	if (laEdad>17) { 
		alert("persona mayor de edad");
		} else {
			if (laEdad<13) {
			alert("persona es un niño");
			} else {
				alert("la persona es adolescente");
			}
		}
}//FIN DE LA FUNCIÓN