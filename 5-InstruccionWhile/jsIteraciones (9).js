/*Al presionar el botón pedir números hasta que el usuario
 quiera, mostrar el número máximo y el número mínimo.*/
function Mostrar()
{
	var contador=0;
	var numero;
	var maximo;
	var minimo;
	var respuesta='si';
	while(respuesta!='no')
		{
		numero=prompt("ingrese un numero: "+contador);
		numero=parseInt(numero);
		if(contador==0) {
			maximo=numero;
			minimo=numero;
			}else{
				if(numero>maximo)
					maximo=numero;
				if(numero<minimo)
					minimo=numero;
				}
		contador++;
		respuesta=prompt("si no desea continuar ingrese: no");
		}
	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;
}