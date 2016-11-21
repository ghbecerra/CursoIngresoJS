function Mostrar()
{
//tomo la edad  
	var laEdad;
	laEdad=document.getElementById('edad').value;
	if (laEdad<13 || laEdad>17) {
	alert("la persona no es adolescente");
	}
}//FIN DE LA FUNCIÓN