function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
console.log("mes seleccionado: " +mesDelAño);
//alert (mesDelAño);
switch (mesDelAño) {
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