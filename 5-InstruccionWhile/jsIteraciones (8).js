/* Al presionar el botón pedir números hasta que el usuario quiera,
 sumar los que son positivos y multiplicar los negativos. */
function Mostrar()
{
	var contador=0;
	var numero;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	while(respuesta=='si')
		{
		contador++; 
		numero=prompt("ingrese número: "+contador);
		numero=parseInt(numero);
		if(numero>0)
			{
			positivo=positivo+numero;
			}else{
				negativo=negativo*numero;
				}
		respuesta=prompt("ingrese si para continuar: ");
		}
	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;
}