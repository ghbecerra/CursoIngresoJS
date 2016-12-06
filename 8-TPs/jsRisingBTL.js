/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos 
nos pide realizar una carga de datos validada e ingresada por ventanas emergentes 
solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	var edad;
	var sexo;
	var estadocivil;
	var sueldo;
	var legajo;

	edad=prompt("ingrese edad, entre 18 y 90 años inclusive: ");
	edad=parseInt(edad);
	while(edad<18 || edad>90)
	{
		edad=prompt("re-ingrese edad, entre 18 y 90 años inclusive: ");
		edad=parseInt(edad);
	}
	
	sexo=prompt("ingrese sexo, “M” para masculino y “F” para femenino: ");
	while(sexo!='F' && sexo!='M')
	{
		sexo=prompt("re-ingrese sexo, “M” para masculino y “F” para femenino: ");
	}
	
	estadocivil=prompt("ingrese estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos: ");
	estadocivil=parseInt(estadocivil);
	while(estadocivil<1 || estadocivil>4)
	{
		estadocivil=prompt("re-ingrese estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos: ");
		estadocivil=parseInt(estadocivil);
	}
	switch(estadocivil){
		case 1:
			estadocivil="Soltero";
			break;
		case 2:
			estadocivil="Casado";
			break;
		case 3:
			estadocivil="Divorciado";
			break;
		case 4:
			estadocivil="Viudo";
			break;
	}
	
	sueldo=prompt("ingrese sueldo bruto, no menor a 8000: ");
	sueldo=parseInt(sueldo);
	while(sueldo<8000)
	{
		sueldo=prompt("re-ingrese sueldo bruto, no menor a 8000: ");
		sueldo=parseInt(sueldo);
	}

	legajo=prompt("ingrese número de legajo, numérico de 4 cifras, sin ceros a la izquierda: ");
	legajo=parseInt(legajo);
	while(legajo<999 || legajo>9999)
	{
		legajo=prompt("re-ingrese número de legajo, numérico de 4 cifras, sin ceros a la izquierda: ");
		legajo=parseInt(legajo);
	}

	nacionalidad=prompt("ingrese nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados: ");
	while(nacionalidad!='A' && nacionalidad!='E' && nacionalidad!='N')
	{
		nacionalidad=prompt("re-ingrese nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados: ");
	}
	switch(nacionalidad){
		case "A":
			nacionalidad="Argentino";
			break;
		case "E":
			nacionalidad="Extranjero";
			break;
		case "N":
			nacionalidad="Nacionalizado";
			break;
	}

	document.getElementById('Edad').value=edad;
	document.getElementById('Sexo').value=sexo;
	document.getElementById('EstadoCivil').value=estadocivil;
	document.getElementById('Sueldo').value="$ "+sueldo;
	document.getElementById('Legajo').value=legajo;
	document.getElementById('Nacionalidad').value=nacionalidad;
}