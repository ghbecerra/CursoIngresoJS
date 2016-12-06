function Mostrar()
{

var numero;
//numero=prompt("ingrese un numero: ");
//numero=parseInt(numero);

for (;;)
//while(true)
	{	
	numero=prompt("re-ingrese un numero: ");
	numero=parseInt(numero);
	if (numero==9)
		break; //instruccion break le da un corte al for mas cercano
	}
	
alert(numero);

}//FIN DE LA FUNCIÓN