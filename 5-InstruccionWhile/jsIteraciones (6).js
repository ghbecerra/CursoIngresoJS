/* Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio. */
function Mostrar()
{
	var contador=0;
	var acumulador=0;
	var numero;
	while(contador<5)
		{
		contador++;
		numero=prompt("ingrese un numero: "+contador);
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN