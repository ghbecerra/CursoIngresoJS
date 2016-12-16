/*Al presionar el botón pedir números hasta que el usuario quiera, e informar la suma acumulada y el promedio.*/
function Mostrar()
{
	var contador=0;
	var numero;
	var acumulador=0;
	var respuesta='si';
	while(respuesta=='si')
		{
		contador++; //contador va arriba: ingrese 1, 2, 3..
		numero=prompt("ingrese numero: "+contador);
		numero=parseInt(numero);
		//console.log("numero: "+numero);
		acumulador=acumulador+numero;
		respuesta=prompt("ingrese si para continuar: ");
		}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
}