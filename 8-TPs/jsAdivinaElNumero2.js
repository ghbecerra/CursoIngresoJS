/* 6. En esta oportunidad el juego evaluará tus aptitudes a partir de la cantidad
 de intentos, por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/
var numeroSecreto; 
var contadorIntentos;
function comenzar()
{
	contadorIntentos=0;
	numeroSecreto=Math.floor((Math.random()*100)+1);
	console.log("numero secreto: " +numeroSecreto); 
}
function verificar()
{
	var numero;
	contadorIntentos++;
	document.getElementById('intentos').value=contadorIntentos;
	numero=document.getElementById('numero').value;
	if(numero==numeroSecreto)
		{ 
		/*if (contadorIntentos==1)
			alert("usted es un Psíquico");
		if (contadorIntentos==2)
			alert("excelente percepción");
		if (contadorIntentos==3)
			alert("Esto es suerte");
		if (contadorIntentos==4)
			alert("Excelente técnica");
		if (contadorIntentos==5)
			alet("usted está en la media");
		if (contadorIntentos>5 && contadorIntentos<11)
			alert("falta técnica");
		if (contadorIntentos>10)
			alert("afortunado en el amor!!");*/
		switch(contadorIntentos){
 			case 1:
 				alert("usted es un Psíquico");
				break;
			case 2:
 				alert("excelente percepción");
				break;
			case 3:
 				alert("Esto es suerte");
				break;
			case 4:
 				alert("Excelente técnica");
				break;
			case 5:
 				alert("usted está en la media");
				break;
 			default:
				alert("afortunado en el amor!!");
				break;
			}//finde switch
		}else{
			if(numero>numeroSecreto)
				{
				alert("se pasó...");
				}else{
					alert("falta...");
					}
			}
}