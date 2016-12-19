/* 1. Para el departamento de facturación:
A. Ingresar tres precios de productos y mostrar la suma de los mismos.
B. Ingresar tres precios de productos y mostrar el promedio de los mismos.
C. ingresar tres precios de productos y mostrar precio final (más IVA 21%). */
function Sumar () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioTres=document.getElementById('PrecioTres').value;
	var sumar=parseInt(PrecioUno)+parseInt(PrecioDos)+parseInt(PrecioTres);
	alert("Precio total : "+sumar);
}
function Promedio () 
{
	var PrecioUno,PrecioDos,PrecioTres;
	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioTres=document.getElementById('PrecioTres').value;
	var sumar=parseInt(PrecioUno)+parseInt(PrecioDos)+parseInt(PrecioTres);
	var promedio=parseInt(sumar)/3;
	alert("El promedio es : "+promedio);
}
function PrecioFinal () 
{
	var PrecioUno,PrecioDos,PrecioTres;
	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioTres=document.getElementById('PrecioTres').value;
	var sumar=parseInt(PrecioUno)+parseInt(PrecioDos)+parseInt(PrecioTres);
	var preciofinal=parseInt(sumar)+(sumar*0.21);
	alert("El promedio es : "+preciofinal);
}