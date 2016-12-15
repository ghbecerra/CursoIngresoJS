/* Debemos lograr tomar Los numeros por ID, transformarlos 
a enteros (parseInt), realizar la operación correcta y 
mostar el resulto por medio de "ALERT" ej.: "la Resta es 750" */ 

var numeroUno;
var numeroDos;

function sumar()
{	
	//parseInt se utiliza para suma para evitar la concatenacion
	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	var sumar=parseInt(numeroUno)+parseInt(numeroDos);
	alert("la suma es "+sumar);
}

function restar()
{
	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	var restar=numeroUno-numeroDos;
	alert("la resta es "+restar);
}

function multiplicar()
{ 
	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	var multiplicar=numeroUno*numeroDos;
	alert("la multiplicacion es "+multiplicar);
}

function dividir()
{
	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	var dividir=numeroUno/numeroDos;
	alert("la division es "+dividir);
}