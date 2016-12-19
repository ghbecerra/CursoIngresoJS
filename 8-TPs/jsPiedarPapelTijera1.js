/* 7. Al comenzar el juego generaremos un número RANDOM del 1 al 3 para la selección de la
 máquina, siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente a su opción y le informaremos si ganó,
 empató o perdió. */
var eleccionMaquina;
var numeroSecreto;
function comenzar()
{
	numeroSecreto=Math.floor((Math.random()*3)+1);
	console.log("numero maquina: "+numeroSecreto);
	switch(numeroSecreto){
			case 1:
				eleccionMaquina="piedra";
				break;
			case 2:
				eleccionMaquina="papel";
				break;
			case 3:
				eleccionMaquina="tijera";
				break;
			}
	console.log("eleccion de la maquina: "+eleccionMaquina);
}
function piedra()
{
	alert("la maquina selecciono: "+eleccionMaquina);
	eleccionHumano="piedra";
	switch(eleccionMaquina){
		case "piedra":
			alert("empate");
			break;	
		case "papel":
			alert("ganó la Maquina");
			break;
		case "tijera":
			alert("vos ganastes");
			break;
		}
	comenzar();	
}
function papel()
{
	alert("la maquina selecciono: "+eleccionMaquina);
	eleccionHumano="papel";
	switch(eleccionMaquina){
		case "piedra":
			alert("vos ganastes");
			break;	
		case "papel":
			alert("empate");
			break;
		case "tijera":
			alert("ganó la Maquina");
			break;
		}
	comenzar();	
}
function tijera()
{
	alert("la maquina selecciono: "+eleccionMaquina);
	eleccionHumano="tijera";
	switch(eleccionMaquina){
		case "piedra":
			alert("ganó la Maquina");
			break;	
		case "papel":
			alert("vos ganastes");
			break;
		case "tijera":
			alert("empate");
			break;
		}
	comenzar();	
}