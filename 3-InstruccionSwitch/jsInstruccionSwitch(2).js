function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
console.log("mes seleccionado: " +mesDelAño);
//alert (mesDelAño);
switch (mesDelAño) {
	default:
		alert("Falta para el invierno.");
		break;
	case "Julio":
	case "Agosto":
		alert("Abrigate que hace frio.");
		break;
	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
		alert("Ya pasamos el frio, ahora calor!!!.");
		break;
	}//fin switch
}//FIN DE LA FUNCIÓN