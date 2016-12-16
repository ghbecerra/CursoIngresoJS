/* Al presionar el botón pedir un número. Mostar los numeros divisores desde
 el 1 al número ingresado, y mostar la cantidad de numeros divisores encontrados. */
function Mostrar()
{
	var numero;
	var indice;
	var contadordivisores=0;
	numero=prompt("ingrese un número:");
	numero=parseInt(numero);
	for(indice=2;indice<numero;indice++)
		{
		if(numero%indice==0) //busca divisores del numero
			{
			contadordivisores++;
			document.write("<br> divisores: "+indice);
			}
		}
	document.write("<br> cantidad de divisores: "+contadordivisores);
}