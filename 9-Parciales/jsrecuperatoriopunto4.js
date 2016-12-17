/*4- (IF) realizar el algoritmo que pida dos números por prompt, lo 
sume e informe si el resultado de la suma “positivo”,” negativo” 
o “cero” por document.write.*/
function puntoCuatro()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	numeroUno=prompt("ingrese un número: ");
	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("ingrese otro número: ");
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno+numeroDos;
	if(resultado>0)
		{
		document.write("positivo");
		}else{
			if(resultado<0)
				{
				document.write("negativo");
				}else{
					document.write("cero");
					}//fin if (resultado<'0')
			}//fin if (resultado>'0')
}