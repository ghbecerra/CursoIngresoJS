/* Al presionar el botón pedir un sexo 'f' para femenino, 'm' para masculino. */
function Mostrar()
{
	var sexo;
	sexo=prompt("ingrese sexo, f ó m: ");
	//console.log("sexo: "+sexo);
	while(sexo!='f' && sexo!='m') // ---aca va el error---
		{		
		sexo=prompt("re-ingrese sexo, f ó m: ");
		//console.log("sexo: "+sexo);	
		}
	//document.write("<br>sexo: "+sexo);
	//alert("su sexo es: "+sexo);
	document.getElementById('Sexo').value=sexo;
}