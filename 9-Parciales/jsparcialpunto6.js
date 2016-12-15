/* 6. Realizar el algoritmo que pida el importe de las ventas (validar
 que sea mayor a 0 "cero") de los 24 dias habiles del mes por prompt
  (una por dia), e informar cual fue el mayor importe y cual fue el menor 
  importe de venta. */
function Mostrar()
{
	var importe;
	var maximo;
	var minimo;
	contador=1;
	while(contador<24)
		{
		importe=prompt("ingrese importe n° " +contador);
		importe=parseInt(importe);
		while(contador<24 && importe>0)
			{	
			if(contador==1)
				{
				maximo=importe;
				minimo=importe;
				}else{
					if (importe>maximo)
						maximo=importe;
					if (importe<minimo)
						minimo=importe;
					}//fin if(contador==1)
			contador++;
			importe=prompt("ingrese importe n° " +contador);
			importe=parseInt(importe);
			}//fin while(importe!=0)
		}//fin while(contador<25)
	document.write("<br>Importe maximo: "+maximo);
	document.write("<br>Importe minimo: "+minimo);
}//FIN DE LA FUNCIÓN