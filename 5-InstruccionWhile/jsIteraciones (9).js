function Mostrar()
{

	var contador=0;
	var maximo;
	var minimo;
	var numeroIngresado;
	var respuesta='si';

	while(respuesta!='no')
		{
		numeroIngresado=prompt("ingrese un numero " +contador);
		numeroIngresado=parseInt(numeroIngresado);
		
		if(contador==0) {
			maximo=numeroIngresado;
			minimo=numeroIngresado;
			} else {
				if (numeroIngresado > maximo)
					maximo=numeroIngresado;
				if (numeroIngresado < minimo)
					minimo=numeroIngresado;
				}
			
		contador++;
		respuesta=prompt("si no desea continuar ingrese: no");
		}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;

}//FIN DE LA FUNCIÓN