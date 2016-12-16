/* al presionar el botón pedir la CLAVE (ayuda: es utn750) */
function Mostrar()
{
	var clave;
	clave=prompt("ingrese clave: ");
	while(clave!="utn750") // -------aca va el error-------
		{		
		clave=prompt("re-ingrese clave: ");	
		}
	alert("bienvenido");
}