function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

	while(respuesta=='si')
		{
		contador++; 
		numeroIngresado=prompt("ingrese numero " +contador);
		numeroIngresado=parseInt(numeroIngresado);
		if (numeroIngresado > 0) {
			positivo=positivo+numeroIngresado;
			} else {
				negativo=negativo*numeroIngresado;
				}
		respuesta=prompt("ingrese si para continuar");
		}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN