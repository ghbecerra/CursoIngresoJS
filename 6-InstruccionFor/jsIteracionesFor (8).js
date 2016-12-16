/* Al presionar el botón pedir un número. Informar si el numero es PRIMO o no. */
function Mostrar()
{
	var numero;
	var indice;
	var contadordivisores=0;
	numero=prompt("ingrese un número:");
	numero=parseInt(numero);
	for(indice=2;indice<numero;indice++)
		{
		if(numero%indice==0)
			{
			contadordivisores++;
			contadordivisores=parseInt(contadordivisores);
			console.log("<br> divisores: " +indice);
			}
		}
	console.log("<br> cantidad de divisores: " +contadordivisores);
	if(contadordivisores==0)
		{
		alert ("Es un numero primo");
		}else{
			alert ("No es numero primo");
			}
}