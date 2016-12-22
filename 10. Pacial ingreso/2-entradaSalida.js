/* 2-Realizar el algoritmo que al presionar el bot&oacute;n "Mostrar"
 lea un importe  de un producto por <strong>prompt</strong> y muestre
 el importe final sumándole el IVA (21%) */
function Mostrar()
{
	var importe;
	var iva;
	var resultado;
	importe=prompt("ingrese importe","$$$");
	importe=parseInt(importe);
	iva=importe*0.21;
	resultado=importe+iva;
	alert('Importe final: '+resultado);
}