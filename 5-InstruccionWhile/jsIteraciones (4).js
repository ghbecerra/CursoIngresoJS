function Mostrar()
{
	var numero = prompt("ingrese un número entre 0 y 9.");
	while(numero<0 || numero>9) //aca va el error
		{		
		numero = prompt("re ingrese un número entre 0 y 9.");	
		}
	//document.write("<br>numero: "+numero);
	alert("su numero: "+numero);
}//FIN DE LA FUNCIÓN