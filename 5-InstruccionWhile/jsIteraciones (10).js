function Mostrar()
{

	var contador=0;
	var contadorpositivos=0;
	var contadornegativos=0;
	var contadorceros=0;
	var contadorpares=0;
	var positivo=0;
	var negativo=0;
	var respuesta="si";

	while(respuesta!="no")
	{
		numeroIngresado=prompt("ingrese un numero: ");
		numeroIngresado=parseInt(numeroIngresado);
		if (numeroIngresado == 0) {
			contadorceros++;
			} else {
				if ((numeroIngresado%2)==0)
					contadorpares++;
				if (numeroIngresado > 0) {
					contadorpositivos++;
					positivo=positivo+numeroIngresado;
					} else {
						contadornegativos++;
						negativo=negativo+numeroIngresado;
					} //fin if (numeroIngresado > 0)
				} //fin if (numeroIngresado == 0)
		respuesta=prompt("si no desea continuar ingrese: no");
	
	}
	document.write("<br>Suma de los negativos: "+negativo);
	document.write("<br>Suma de los positivos: "+positivo);
	document.write("<br>Cantidad de positivos: "+contadorpositivos);
	document.write("<br>Cantidad de negativos: "+contadornegativos);
	document.write("<br>Cantidad de números pares: "+contadorpares);
	document.write("<br>Promedio de positivos: "+positivo/contadorpositivos);
	document.write("<br>Promedios de negativos: "+negativo/contadornegativos);
	document.write("<br>Diferencia entre positivos y negativos: "+(positivo-negativo));

}//FIN DE LA FUNCIÓN