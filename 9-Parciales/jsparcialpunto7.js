/* 7. Realizar el algoritmo que permita el ingreso por prompt de las notas
 (validar entre 0 y 10) y el sexo (validar el sexo "f" o "m") de 100 alumnos,
 informar por alert:
a. el promedio de las notas totales
b. la nota mas baja
c. la cantidad de varones que su nota haya sido mayor a igual a 6 */
function Mostrar()
{
	var nota;
	var contador=1;
	var sexo;
	var notamasbaja;
	var acumulador=0;
	var cantvarones6=0;
	var promedio;
	while(contador<6)
		{
		nota=prompt("ingrese nota entre 0 y 10: " +contador);
		nota=parseInt(nota);
		while (nota<0 || nota>10)
			{
			nota=prompt("re-ingrese nota entre 0 y 10: " +contador);
			nota=parseInt(nota);
			}
		sexo=prompt("ingreso sexo f o m: " +contador);
		while(sexo!='f' && sexo!='m')
			{
			sexo=prompt("re-ingreso sexo f o m: " +contador);
			}
		if(contador==1)
			notamasbaja=nota
		contador++;
		acumulador=acumulador+nota;	
		if(nota<notamasbaja)
			{
			notamasbaja=nota;
			}
		if(sexo=='m' && nota>5)
			{
			cantvarones6++;
			}
		}
	promedio=acumulador/contador;
	document.write("<br>Promedio de las notas totales: "+promedio);
	document.write("<br>Nota mas baja: "+notamasbaja);
	document.write("<br>Cantidad de varones con nota mayor a 6: "+cantvarones6);
}//FIN DE LA FUNCIÓN