/* Al presionar el botón pedir números hasta que el usuario quiera, mostar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
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
	var numero;
	while(respuesta!="no")
		{
		numero=prompt("ingrese un numero: ");
		numero=parseInt(numero);
		if(numero==0)
			{
			contadorceros++;
			}else{
				if((numero%2)==0) //cantidad de numeros pares
					contadorpares++;
				if(numero>0)
					{
					contadorpositivos++;
					positivo=positivo+numero;
					}else{
						contadornegativos++;
						negativo=negativo+numero;
						}//fin if(numeroIngresado>0)
				}//fin if(numeroIngresado==0)
		respuesta=prompt("si no desea continuar ingrese: no");
		}
	document.write("<br>Suma de los negativos: "+negativo);
	document.write("<br>Suma de los positivos: "+positivo);
	document.write("<br>Cantidad de positivos: "+contadorpositivos);
	document.write("<br>Cantidad de negativos: "+contadornegativos);
	document.write("<br>Cantidad de ceros: "+contadorceros);
	document.write("<br>Cantidad de números pares: "+contadorpares);
	document.write("<br>Promedio de positivos: "+positivo/contadorpositivos);
	document.write("<br>Promedios de negativos: "+negativo/contadornegativos);
	document.write("<br>Diferencia entre positivos y negativos: "+(positivo-negativo));
}