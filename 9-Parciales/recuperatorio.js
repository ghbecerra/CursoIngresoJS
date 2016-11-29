/*4- (IF) realizar el algoritmo que pida dos números por prompt, lo 
sume e informe si el resultado de la suma “positivo”,” negativo” 
o “cero” por document.write.
5- (SWITCH) realizar el algoritmo que pida un MES por prompt, si 
es “Diciembre” informar por alert “Se vienen las fiestas” ,si 
es “Enero” informar por alert “comienza el año”, de lo contrario 
informar por alert “no es enero, ni diciembre” .*/

function puntoCuatro()
{
	var numeroUno;
	var numeroDos;
	numeroUno=prompt("ingrese un número: ");
	numeroDos=prompt("ingrese otro número: ");
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	var resultado=numeroUno+numeroDos;
	if (resultado > 0) {
			document.write("positivo");
		} else {
			if (resultado < 0) {
				document.write("negativo");
				} else {
					document.write("cero");
					}//fin if (resultado<'0')
			}//fin if (resultado>'0')
}//fin function puntoCuatro()

function puntoCinco()
{
		var mes;
		mes=prompt("ingrese un MES: ");
		switch (mes) {
			case "Diciembre":
				alert("Se vienen las fiestas");
				break;
			case "Enero":
				alert("comienza el año");
				break;
			default:
				alert("no es enero, ni diciembre");
				break;
			}//fin del switch
}//fin function puntoCinco()