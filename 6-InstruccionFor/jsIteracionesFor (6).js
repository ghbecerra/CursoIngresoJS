/* Al presionar el botón pedir un número. Mostar los numeros pares desde
 el 1 al número ingresado, y mostar la cantidad de numeros pares encontrados. */
function Mostrar()
{
var limite;
var indice;
var contadorpares=0;
limite=prompt("ingrese un número: ");
limite=parseInt(limite);
for(indice=1;indice<limite;indice++)
	{
	if(indice%2==0) //numeros pares
		{
		contadorpares++;
		document.write("<br> "+indice);	
		}
	}
document.write("<br> números pares: "+contadorpares);
}