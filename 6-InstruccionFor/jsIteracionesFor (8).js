function Mostrar()
{

	var numero;
	var contadordivisores=0;

	numero=prompt("ingrese un número:");
	numero=parseInt(numero);

	for (var indice=2;indice<numero;indice++)
		{
		if (numero%indice==0)
			{
			contadordivisores++;
			contadordivisores=parseInt(contadordivisores);
			//document.write("<br> divisores: " +indice);
			}
		}
	
	//document.write("<br> cantidad de divisores: " +contadordivisores);
	if (contadordivisores==0) {
		alert ("Es un numero primo");
		}else{
			alert ("No es numero primo");
			}

}//FIN DE LA FUNCIÓN