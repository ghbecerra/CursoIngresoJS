/* al seleccionar un mes informar. 
si es Febrero: "Este mes no tiene más de 29 días." 
si NO es Febrero: "Este mes tiene 30 o más días" */
function Mostrar()
{
var mes;
mes=document.getElementById('mes').value;
console.log("mes seleccionado: "+mes);
switch(mes){
	default:
		alert("Este mes tiene 30 o más días");
		break;
	case "Febrero":
		alert("Este mes no tiene más de 29 días.");
		break;
	}//fin switch
}//FIN DE LA FUNCIÓN