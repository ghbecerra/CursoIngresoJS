/* Al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA". */
function Mostrar()
{
var repeticiones;
var contador;
repeticiones=prompt("ingrese el número de repeticiones: ");
repeticiones=parseInt(repeticiones);
for (contador=0;contador<repeticiones;contador++)
	{
	document.write("<br> Hola UTN FRA");
	}
}