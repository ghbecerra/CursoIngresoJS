/* 8- realizar el algoritmo que permita ingresar números positivos
 (validar que sea positivo) hasta que el usuario quiera e informar
 al terminar el ingreso por document.write:
a) la cantidad de números pares.
b) el promedio de todos los números ingresados.
c) la suma de todos los números.
d) El número máximo y el mínimo. */
function puntoOcho()
{
	var respuesta="si";
	var numero;
	var contador=0;
	var contadorpares=0;
	var sumatotal=0;
	var promedio=0;
	var maximo;
	var minimo;
	while(respuesta!="no")
		{
		numero=prompt("ingrese un numero:");
		numero=parseInt(numero);
		while(numero<0)
			{
			numero=prompt("re-ingrese un numero:");
			numero=parseInt(numero);
			}
		if((numero%2)==0) //cantidad de numeros pares
			contadorpares++;
		sumatotal=sumatotal+numero;
		if(contador==0){
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
	promedio=sumatotal/contador;
	document.write("<br>La cantidad de números pares: "+contadorpares);
	document.write("<br>Promedio de todos los números ingresados: "+promedio);
	document.write("<br>La suma de todos los números: "+sumatotal);
	document.write("<br>Cantidad de negativos: "+contadornegativos);
	document.write("<br>El número maximo: "+maximo);
	document.write("<br>El número minimo: "+minimo);
}