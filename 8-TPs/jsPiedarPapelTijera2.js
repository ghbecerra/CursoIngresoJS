/* 8. Piedra, Papel o Tijera (v 2.0): 
Ahora debemos informar cuantas veces se ganó, perdió o empató desde la última recarga de página */
var eleccionMaquina;
var eleccionHumano;
var numeroSecreto;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;
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
	if(eleccionHumano==eleccionMaquina){
		alert("empate");	
		ContadorDeEmpates++;	
		}else{
			if(eleccionMaquina=="tijera"){
				alert("vos ganastes");
				ContadorDeGanadas++;
				}else{
					alert("ganó la Maquina");
					ContadorDePerdidas++;
					}
			}
mostarResultado();
}
function papel()
{
	alert("la maquina selecciono: "+eleccionMaquina);
	eleccionHumano="papel";
	if(eleccionHumano==eleccionMaquina){
		alert("empate.");
		ContadorDeEmpates++;		
		}else{
			if(eleccionMaquina=="piedra"){
				alert("vos ganastes.");
				ContadorDeGanadas++;
				}else{
					alert("ganó la Maquina.");
					ContadorDePerdidas++;
					}
			}
mostarResultado();
}
function tijera()
{
	alert("la maquina selecciono: "+eleccionMaquina);
	eleccionHumano="tijera";
	if(eleccionHumano==eleccionMaquina){
		alert("empate.");
		ContadorDeEmpates++;		
		}else{
			if(eleccionMaquina=="papel"){
				alert("vos ganastes.");
				ContadorDeGanadas++;
				}else{
					alert("ganó la Maquina.");
					ContadorDePerdidas++;
					}
			}		
mostarResultado();
}
function mostarResultado()
{
document.getElementById('empatadas').value=ContadorDeEmpates+" partidas empatadas.";
document.getElementById('perdidas').value=ContadorDePerdidas+" partidas perdidas.";
document.getElementById('ganadas').value=ContadorDeGanadas+" partidas ganadas.";
comenzar();
}