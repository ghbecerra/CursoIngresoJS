/* Al presionar el botón repetir hasta que utilizamos 'BREAK'. */
function Mostrar()
{
var contador;
for(contador=0; ;contador++)
	{	
	if (contador==13) //condicion para ejecutar el break
		break; //instruccion break le da un corte al for mas cercano
	}
alert(contador);
}