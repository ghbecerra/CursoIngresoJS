/* 4-Realizar el algoritmo que al presionar el bot&oacute;n "Mostrar"
 pida dos números por prompt, si son iguales que los multiplique, si el
 primero es mayor al segundo que los reste y si no que los sume, mostrar
 el resultado por document.write. */
function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	numeroUno=prompt("ingrese un número: ");
	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("ingrese otro número: ");
	numeroDos=parseInt(numeroDos);
	if(numeroUno==numeroDos)
		{
		resultado=numeroUno*numeroDos;
		}else{
			if(numeroUno>numeroDos)
				{
				resultado=numeroUno-numeroDos;
				}else{
					resultado=numeroUno+numeroDos;
					}
			}
	document.write("El resultado es: " +resultado);	
}