function Mostrar()
{
var limite;
var contadorpares=0;

limite=prompt("ingrese un número:");
limite=parseInt(limite);

for (var indice=1;indice<limite;indice++)
	{
	if (indice%2==0)
		{
		contadorpares++;
		document.write("<br>" +indice);	
		}
	}
document.write("<br> números pares: " +contadorpares);

}//FIN DE LA FUNCIÓN