/* 6-Realizar el algoritmo que al presionar el bot&oacute;n "Mostrar"
 pida el importe de las ventas (validar que sea mayor a 0, ”cero”) de
 los 7 días de la semana por prompt (una por día), e informar cual fue
 el mayor importe y cuál fue el menor importe de venta */
function Mostrar()
{
	var importe;
	var mayor;
	var menor;
	contador=1;
	while(contador<8)
		{
		importe=prompt("ingrese importe n° " +contador);
		importe=parseInt(importe);
		while(importe<1)
			{
			importe=prompt("re-ingrese importe n° " +contador);
			importe=parseInt(importe);
			}
		if(contador==1)
			{
			mayor=importe;
			menor=importe;
			}else{
				if (importe>mayor)
					mayor=importe;
				if (importe<menor)
					menor=importe;
				}
		contador++;
		}
	document.write("<br>Mayor importe: "+mayor);
	document.write("<br>Menor importe: "+menor);
}