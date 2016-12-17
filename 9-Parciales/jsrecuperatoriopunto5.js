/*5- (SWITCH) realizar el algoritmo que pida un MES por prompt, si 
es “Diciembre” informar por alert “Se vienen las fiestas” ,si 
es “Enero” informar por alert “comienza el año”, de lo contrario 
informar por alert “no es enero, ni diciembre” .*/
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