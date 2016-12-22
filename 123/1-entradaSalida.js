/* 1-Realizar el algoritmo  que al presionar el bot&oacute;n "Mostrar" lea
 la base  de un triangulo equilatero por ID, e informar el perímetro del
 mismo por alert. */
function Mostrar()
{
	var base;
	var perimetro;
	base=document.getElementById('lado').value;
	base=parseInt(base);
	perimetro=base*3;
	alert("El perimetro es: "+perimetro);
}