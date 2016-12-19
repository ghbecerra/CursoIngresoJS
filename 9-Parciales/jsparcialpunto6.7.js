/* 6. Realizar el algoritmo que pida el importe de las ventas (validar
 que sea mayor a 0 "cero") de los 24 dias habiles del mes por prompt
 (una por dia), e informar cual fue el mayor importe y cual fue el menor 
 importe de venta. 
7. Realizar el algoritmo que permita el ingreso por prompt de las notas
 (validar entre 0 y 10) y el sexo (validar el sexo "f" o "m") de 100 alumnos,
 informar por alert:
a. el promedio de las notas totales
b. la nota mas baja
c. la cantidad de varones que su nota haya sido mayor a igual a 6. */
function puntoSeis()
{
	var importe;
	var maximo;
	var minimo;
	contador=1;
	while(contador<24)
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
			maximo=importe;
			minimo=importe;
			}else{
				if (importe>maximo)
					maximo=importe;
				if (importe<minimo)
					minimo=importe;
				} //fin if(contador==1)
		contador++;
		} //fin while(contador<25)
	document.write("<br>Importe maximo: "+maximo);
	document.write("<br>Importe minimo: "+minimo);
}
function puntoSiete()
{
	var nota;
	var contador=1;
	var sexo;
	var notamasbaja;
	var acumulador=0;
	var cantvarones6=0;
	var promedio;
	while(contador<6) //contador de 1 a 5
		{
		nota=prompt("ingrese nota entre 0 y 10: "+contador);
		nota=parseInt(nota);
		while(nota<0 || nota>10)
			{
			nota=prompt("re-ingrese nota entre 0 y 10: "+contador);
			nota=parseInt(nota);
			}
		sexo=prompt("ingreso sexo f o m: "+contador);
		while(sexo!='f' && sexo!='m')
			{
			sexo=prompt("re-ingreso sexo f o m: "+contador);
			}
		acumulador=acumulador+nota;
		if(contador==1)
			notamasbaja=nota;
		if(nota<notamasbaja)
			notamasbaja=nota;
		if(sexo=='m' && nota>5)
			cantvarones6++;
		contador++;
		}
	promedio=acumulador/(contador-1);
	document.write("<br>Promedio de las notas totales: "+promedio);
	document.write("<br>Nota mas baja: "+notamasbaja);
	document.write("<br>Cantidad de varones con nota mayor a 6: "+cantvarones6);
}