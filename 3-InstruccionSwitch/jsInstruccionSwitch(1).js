/* al seleccionar un mes informar:
si es Enero: que comiences bien el año! 
si es Marzo: a clases!
si es Julio: se vienen las vacaciones!
si es Diciembre: Felices fiesta! */
function Mostrar()
{
var mes;
mes=document.getElementById('mes').value;
console.log("mes seleccionado: " +mes);
switch (mes) {
    case "Enero":
        alert("que comiences bien el año!");
        break;
    case "Marzo":
        alert("a clase!");
        break;
    case "Julio":
        alert("se vienen las vacaciones!");
        break;
    case "Diciembre":
        alert("Felices fiestas!");
        break;
	}//fin switch
}//FIN DE LA FUNCIÓN