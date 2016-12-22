/* 5-Realizar el algoritmo que al presionar el bot&oacute;n "Mostrar"
 pida un mes del año por prompt, si es un "enero" o "febrero" informar
 por alert “Veranito!!!!” de lo contrario informar por alert “extraño
 enero y febrero!!!” */
function Mostrar()
{
	var mes;
	mes=prompt("ingrese un mes: ");
	switch(mes){
		case "enero":
		case "febrero":
			alert("Veranito!!!");
			break;
		default:
			alert("extraño enero y febrero!!!");
			break;
		}
}