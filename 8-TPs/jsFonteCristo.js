/* 13. El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo nos está pidiendo una aplicación
 que verifique las distintas cualidades de los números. 
Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a. Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b. Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
c. Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d. Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e. Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero. */
function NumerosPares() 
{
 	var numero;
 	var contadorpares=0;
 	numero=document.getElementById('numero').value;
	numero=parseInt(numero);
	while(numero>0)
		{
		if((numero%2)==0) //busca numeros pares
			contadorpares++;
		numero--;
		}
	alert("cantidad de números pares desde el número ingresado hasta el cero: "+contadorpares);	
}
function NumerosImpares() 
{
 	var numero;
 	var contadorimpares=0;
 	numero=document.getElementById('numero').value;
	numero=parseInt(numero);
	for(;numero>0;numero--)
		{
		if((numero%2)!=0) //busca numeros impares
			contadorimpares++;
		}
	alert("cantidad de números impares desde el número ingresado hasta el cero: "+contadorimpares);	
}
function NumerosDivisibles() 
{
 	var numero;
 	var contadordivisores=0;
 	var indice;
 	numero=document.getElementById('numero').value;
	numero=parseInt(numero);
	for(indice=1;indice<101;indice++)
		{
		if(numero%indice==0) //busca divisores del numero
			{
			contadordivisores++;
			}
		}
	alert("cantidad de números divisibles del número que se encuentran desde el 1 al 100: "+contadordivisores);	
}
function VerificarPrimo()
{
	var numero;
	var indice;
	var contadordivisores=0;
	numero=document.getElementById('numero').value;
	numero=parseInt(numero);
	for(indice=2;indice<numero;indice++)
		{
		if(numero%indice==0)
			{
			contadordivisores++;
			contadordivisores=parseInt(contadordivisores);
			}
		}
	if(contadordivisores==0)
		{
		alert ("Es un numero primo");
		}else{
			alert ("No es numero primo");
			}
}
function NumerosPrimos()
{
	var numero;
	var indice;
	var contador;
	var contadorprimos=0;
	var contadordivisores=0;
	numero=document.getElementById('numero').value;
	numero=parseInt(numero);
	while(numero>1)
		{
		console.log(numero)
		for(indice=2;indice<numero;indice++)
			{
			if(numero%indice==0)
				{
				contadordivisores++;
				}
			}	
		if(contadordivisores==0)
			{
			console.log("Es un numero primo");
			contadorprimos++;
			}else{
				console.log("No es numero primo");
				contadordivisores=0;
				}
		numero--;	
		}
	alert ("cantidad de números Primos desde el número ingresado hasta el cero: "+contadorprimos);
}