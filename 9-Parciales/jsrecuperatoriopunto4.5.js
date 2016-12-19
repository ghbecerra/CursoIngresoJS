/*4- (IF) realizar el algoritmo que pida dos números por prompt, lo 
sume e informe si el resultado de la suma “positivo”,” negativo” 
o “cero” por document.write.
5- (SWITCH) realizar el algoritmo que pida un MES por prompt, si 
es “Diciembre” informar por alert “Se vienen las fiestas” ,si 
es “Enero” informar por alert “comienza el año”, de lo contrario 
informar por alert “no es enero, ni diciembre”. */
function puntoCuatro()
{
	var numeroUno;
	var numeroDos;
	var suma;
	numeroUno=prompt("ingrese un número: ");
	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("ingrese otro número: ");
	numeroDos=parseInt(numeroDos);
	suma=numeroUno+numeroDos;
	if(suma>0)
		{
		document.write("positivo");
		}else{
			if(suma<0)
				{
				document.write("negativo");
				}else{
					document.write("cero");
					}
			}
}
function puntoCinco()
{
	var mes;
	mes=prompt("ingrese un Mes: ");
	switch(mes){
		case "Diciembre":
			alert("Se vienen las fiestas!!");
			break;
		case "Enero":
			alert("Comienza el año!");
			break;
		default:
			alert("No es enero, ni diciembre...");
			break;
		}
}