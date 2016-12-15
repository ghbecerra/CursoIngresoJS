/* Debemos lograr tomar Los numeros por ID, transformarlos
 a enteros (parseInt), realizar la operación correcta y 
 mostrar el resto entre el dividendo y el divisor. Ej.: 
 "El resto es 0." */

function SacarResto()
{
	//id="numeroDividendo"
	//id="numeroDivisor"
	var numeroDividendo;
	var numeroDivisor;
	var resto;
	numeroDividendo=document.getElementById('numeroDividendo').value;
	numeroDivisor=document.getElementById('numeroDivisor').value;
	resto=parseInt(numeroDividendo)%parseInt(numeroDivisor);
	alert("El resto es "+resto);
}