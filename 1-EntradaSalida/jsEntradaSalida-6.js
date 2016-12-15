/* Debemos lograr tomar Los numeros por ID, transformarlos
 a enteros (parseInt) y Sumarlos. Mostar el resulto por 
 medio de "ALERT" */
function sumar()
{
	//id="numeroUno"
	//id="numeroDos"
	//variables puede comenzar con _ pero no con un numero
	var numeroUno;
	var numeroDos;
	var suma;
	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	//v. 1.0
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	suma=numeroUno+numeroDos;
	//v. 2.0
	//suma=parseInt(numeroUno)+parseInt(numeroDos);
	alert("la suma es "+suma);
}