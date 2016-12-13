function Mostrar()
{
/*
var limite;
var contadorpares=0;
limite=prompt("ingrese un número:");
limite=parseInt(limite);
for (var indice=1;indice<limite;indice++)
	{
	if (indice%2==0)
		{
		contadorpares++;
		document.write("<br>" +indice);	
		}
	}
document.write("<br> números pares: " +contadorpares);
*/
	var random;
	var contador;
	var cont1=0;
	var cont2=0;
	var cont3=0;
	var cont4=0;
	var cont5=0;
	var cont6=0;
	var cont7=0;
	var cont8=0;
	var cont9=0;
	var cont10=0;
	var total;
	var contPar=0;
	var contImpar=0;
	var sumaPar=0;
	var sumaImpar=0;
	var conttirada=0;
	var tiro;

	for (contador=0;contador<1000;contador++)
		{
		random=Math.floor((Math.random() * 10) + 1);
		//console.log(random);
		switch(random){
			case 1:
				cont1++;
				break;
			case 2:
				cont2++;
				break;
			case 3:
				cont3++;
				break;
			case 4:
				cont4++;
				break;
			case 5:
				total=cont1+cont2+cont3+cont4+cont5+cont6+cont7+cont8+cont9+cont10;
				porc=(cont5/total)*100;
				if(porc<7)
					{
					cont5++;
					} else {
						contador--;
						continue; //igual que el break pero para el for
						}	
				break;
			case 6:
				cont6++;
				break;
			case 7:
				total=cont1+cont2+cont3+cont4+cont5+cont6+cont7+cont8+cont9+cont10;
				porc=(cont7/total)*100;
				if(porc<2)
					{
					cont7++;
					} else {
						contador--;
						continue; //igual que el break pero para el for
						}	
				break;
			case 8:
				cont8++;
				break;
			case 9:
				cont9++;
				break;
			case 10:
				cont10++;
				break;
			}
		if ((random%2)==0)
			{
			contPar++;
			sumaPar=sumaPar+random;
			}else{
				contImpar++;
				sumaImpar=sumaImpar+random;
				}
		if (cont1!=0 && cont2!=0 &&cont3!=0 &&cont4!=0 &&cont5!=0 &&cont6!=0 &&cont7!=0 &&cont8!=0 &&cont9!=0 && cont10!=0 && conttirada==0)
			{
			conttirada=1;
			tiro=contador;
			}
		}
	total=cont1+cont2+cont3+cont4+cont5+cont6+cont7+cont8+cont9+cont10;
	console.log("el numero 1 salio: "+cont1+" veces, equivale al "+(cont1/total)*100+"%");
	console.log("el numero 2 salio: "+cont2+" veces, equivale al "+(cont2/total)*100+"%");
	console.log("el numero 3 salio: "+cont3+" veces, equivale al "+(cont3/total)*100+"%");
	console.log("el numero 4 salio: "+cont4+" veces, equivale al "+(cont4/total)*100+"%");
	console.log("el numero 5 salio: "+cont5+" veces, equivale al "+(cont5/total)*100+"%");
	console.log("el numero 6 salio: "+cont6+" veces, equivale al "+(cont6/total)*100+"%");
	console.log("el numero 7 salio: "+cont7+" veces, equivale al "+(cont7/total)*100+"%");
	console.log("el numero 8 salio: "+cont8+" veces, equivale al "+(cont8/total)*100+"%");
	console.log("el numero 9 salio: "+cont9+" veces, equivale al "+(cont9/total)*100+"%");
	console.log("el numero 10 salio: "+cont10+ " veces, equivale al  " +(cont10/total)*100+"%");
	console.log("el total es: "+total);
	console.log("cantidad numeros pares: "+contPar+ ", equivale al " +(contPar/total)*100+"%");
	console.log("cantidad numeros impares: "+contImpar+ ", equivale al " +(contImpar/total)*100+"%");
	console.log("suma de numeros Par: "+sumaPar);
	console.log("suma de numeros Impar: "+sumaImpar);
	console.log("salieron en la tirada: "+tiro);
}//FIN DE LA FUNCIÓN