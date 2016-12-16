/* Al presionar el botón repetir el pedido de número hasta que ingresemos el 9. */
function Mostrar()
{
var numero;
for(;;) //while(true) es lo mismo que el for(;;)
	{	
	numero=prompt("re-ingrese un numero: ");
	numero=parseInt(numero);
	if(numero==9) //condicion para ingresar al break
		break; //instruccion break le da un corte al for mas cercano
	}
/*
numero=prompt("ingrese un numero: ");
numero=parseInt(numero);
while(numero!=9)
	{
	numero=prompt("re-ingrese un numero: ");
	numero=parseInt(numero);
	}
*/	
alert(numero);
}