/* Debemos lograr tomar un nombre con 'prompt' y luego mostrarlo
 por 'alert' al presionar el botón 'MOSTRAR'. */
function Mostar()
{
	// concepto de variable concatenacion prompt
	var producto;
	var precio;
	producto=prompt("ingrese marca","sin marca");
	precio=prompt("ingrese precio","999");
	alert("su producto es: "+producto+" y su precio es: "+precio);
}