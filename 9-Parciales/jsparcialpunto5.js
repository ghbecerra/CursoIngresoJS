/* 5- (SWITCH) realizar el algoritmo que pida un día de la semana por
prompt, si es un “Sábado” o “Domingo” informar por alert “es fin
de semana” de lo contrario informar por alert “a trabajar !!!” .*/
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