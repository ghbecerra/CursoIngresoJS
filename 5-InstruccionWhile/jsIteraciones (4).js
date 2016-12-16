/* al presionar el botón pedir un número entre 0 y 9 inclusive. */
function Mostrar()
{
	var numero;
	numero=prompt("ingrese un número entre 0 y 9:");
	console.log("numero: " +numero);
	while(numero<0 || numero>9) // -----aca va el error-----
		{		
		numero=prompt("re-ingrese un número entre 0 y 9:");
		console.log("numero re-ingresado: " +numero);
		}
	//document.write("<br>numero: "+numero);
	alert("su numero es: "+numero);
}