/* 9. Debemos mostrar dos números Random  del 1 al 10 y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar el resultado de la operación y presionar el
 botón Aceptar se debe informar si el resultado es el correcto o no. */
var respuesta;
function comenzar()
{
	var randomUno;
	var randomDos;
	var randomOperacion;
	randomUno=Math.floor((Math.random()*10)+1);
	randomUno=parseInt(randomUno);
	randomDos=Math.floor((Math.random()*10)+1);
	randomDos=parseInt(randomDos);
	randomOperacion=Math.floor((Math.random()*4)+1);
	switch(randomOperacion){
		case 1:
			resultado=randomUno+randomDos;
			document.getElementById('Operador').value="más";
			break;
		case 2:
			if(randomUno<randomDos){
				comenzar();
			}else{
				resultado=randomUno-randomDos;
				document.getElementById('Operador').value ="menos";
				break;
				}
		case 3:
			if((randomUno<randomDos)&&((randomUno%randomDos)!=0)){
				comenzar();
				}else{
					resultado=randomUno/randomDos;
					document.getElementById('Operador').value="dividido";
					break;
					}
		case 4:
			resultado=randomUno*randomDos;
			document.getElementById('Operador').value="por";
			break;
		}
document.getElementById('PrimerNumero').value=randomUno;
document.getElementById('SegundoNumero').value=randomDos;
}
function Responder()
{
	respuesta=document.getElementById('Respuesta').value;
	if(respuesta==resultado){
		alert("Correcto");
	}else{
		alert("Incorrecto");
		}
	comenzar();	
}