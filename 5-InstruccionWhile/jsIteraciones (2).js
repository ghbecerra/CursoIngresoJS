/* al presionar el botón mostrar 10 repeticiones con números DESCENDENTES, desde el 10 al 1. */
function Mostrar()
{
	var contador;
	contador=10;
	document.write("<h2>bienvenidos</h2>");
	while(contador>0)
		{
		document.write("<br>el contadores: "+contador);
		contador--;
		} 
	document.write("<p>termino</p>");
}