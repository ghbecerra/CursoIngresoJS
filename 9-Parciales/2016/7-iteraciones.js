/* 7-Realizar el algoritmo que al presionar el bot&oacute;n "Mostrar"
 pida por prompt  las notas (validar entre 0 y 10) y el sexo (validar
 el sexo “f” o “m”) de 6 alumnos, informar por alert:
 a) el promedio de las notas totales.
 b) la nota más baja.
 c) la cantidad de varones que su nota haya sido mayor o igual a 6. */
function Mostrar()
{
	var nota;
	var contador=1;
	var sexo;
	var notamasbaja;
	var acumulador=0;
	var cantvarones6=0;
	var promedio;
	while(contador<7) //contador de 1 a 7
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
		console.log("alumno: "+contador+" nota: "+nota+" sexo:"+sexo);
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