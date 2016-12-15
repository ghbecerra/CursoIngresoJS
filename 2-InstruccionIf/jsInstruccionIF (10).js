/* Al presionar el Botón, asignar una nota RANDOM al examen y
 mostar: "EXCELENTE" para notas igual a 9 o 10, "APROBÓ" para
 notas mayores a 4, "Vamos, la proxima se puede" para notas
 menores a 4. */
function Mostrar()
{
	var random;
	random=Math.floor((Math.random() * 10) + 1);
	alert("nota de examen: "+random);
	if (random>8)
		{ 
		alert("EXELENTE");
		}else{
			if (random>4)
				{
				alert("APROBO");
				}else{
					alert("Vamos, la proxima se puede.");
					}//fin if (random>4)
			}//fin if (random>8)
}