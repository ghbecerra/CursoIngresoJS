/* al presionar el botón mostrar 10 repeticiones con números ASCENDENTE, desde el 1 al 10. */
function Mostrar()
{
	var contador;
	contador=0;
	document.write("<h1>bienvenidos</h1>");//modo titulo
	while(contador<10)
		{
		contador++;
		document.write("<br>el contadores: "+contador);//separa
		} 
	document.write("<p>termino</p>");//separa parrafo
}