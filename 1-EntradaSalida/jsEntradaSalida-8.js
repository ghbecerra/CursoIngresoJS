/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//id="numeroDividendo"
	//id="numeroDivisor"
	var numeroDividendo,numeroDivisor;
	numeroDividendo=document.getElementById('numeroDividendo').value;
	numeroDivisor=document.getElementById('numeroDivisor').value;
	var resto=parseInt(numeroDividendo)%parseInt(numeroDivisor);
	alert("El resto es "+resto);
}