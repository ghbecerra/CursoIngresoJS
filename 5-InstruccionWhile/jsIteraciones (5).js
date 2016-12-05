function Mostrar()
{
	var sexo = prompt("ingrese f ó m .");
	while(sexo!='f' && sexo!='m') //aca va el error
		{		
		sexo = prompt("re ingrese f ó m .");	
		}
	//document.write("<br>sexo: "+sexo);
	//alert("su sexo es: "+sexo);
	document.getElementById('Sexo').value=sexo;
}//FIN DE LA FUNCIÓN