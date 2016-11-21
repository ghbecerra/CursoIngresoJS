function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var miRandom=Math.floor((Math.random() * 10) + 1);
	alert("nota: " +miRandom);
	if (miRandom>8) { 
		alert("EXELENTE");
		} else {
			if (miRandom>4) {
			alert("APROBO");
			} else {
				alert("Vamos, la proxima se puede");
			}
		}
}//FIN DE LA FUNCIÓN