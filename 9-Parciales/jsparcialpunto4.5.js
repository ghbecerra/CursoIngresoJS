/* 4- (IF) realizar el algoritmo que pida dos números por prompt, 
si son iguales que los multiplique, si el primero es mayor al 
segundo que los reste y si no que los sume, mostrar el resultado
 por document.write.
 5- (SWITCH) realizar el algoritmo que pida un día de la semana por
prompt, si es un “Sábado” o “Domingo” informar por alert “es fin
de semana” de lo contrario informar por alert “a trabajar !!!” */
function puntoCuatro()
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
function puntoCinco()
{
	var dia;
	dia=prompt("ingrese un día de la semana: ");
	switch(dia){
		case "Sábado":
		case "Domingo":
			alert("es fin de semana !!!");
			break;
		default:
			alert("a trabajar !!!");
			break;
		}
}