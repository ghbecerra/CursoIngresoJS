/*al seleccionar un mes informar. 
si tiene 28 días. 
si tiene 30 días. 
si tiene 31 días. */
function Mostrar()
{
var mes;
mes=document.getElementById('mes').value;
console.log("mes seleccionado: "+mes);
switch (mes) {
	default:
		alert("Este mes tiene 31 días.");
		break;
	case "Febrero":
		alert("Este mes tiene 28 días.");
		break;
	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":
		alert("Este mes tiene 30 días.");
		break;
	}//fin del switch
}//FIN DE LA FUNCIÓN