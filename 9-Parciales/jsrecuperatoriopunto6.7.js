/* 6- realizar el algoritmo que pida el peso en kilos (validar que sea
 mayor a 0, ”cero”) de cada uno de los 50 contenedores (pedir 50 veces)
 de un deposito por prompt, e informar cual fue el más pesado y cuál fue
 el menos pesado.
7- realizar el algoritmo que permita el ingreso por prompt de edades
 (validar entre 0 y 100) y el sexo (validar el sexo “f” o “m”) de 100
  personas, informar por alert:
a) el promedio de edad.
b) la edad más baja.
c) la cantidad de varones que su edad sea mayor o igual a 20. */
function puntoSeis()
{
	var peso;
	var pesado;
	var liviano;
	var contador=1;
	while(contador<51)
		{
		peso=prompt("ingrese peso del contador n° "+contador);
		peso=parseInt(peso);
		while(peso<1)
			{
			peso=prompt("re-ingrese peso del contador n° "+contador);
			peso=parseInt(peso);
			}
		console.log("contenedor "+contador+": "+peso+" kilos");
		if(contador==1)
			{
			pesado=peso;
			liviano=peso;
			}else{
				if(peso>pesado)
					pesado=peso;
				if(peso<liviano)
					liviano=peso;
				}
		contador++;
		}
	document.write("<br>Contenedor mas pesado: "+pesado+" kilos");
	document.write("<br>Contenedor menos pesado: "+liviano+" kilos");
}
function puntoSiete()
{
	var edades;
	var sexo;
	var edadmasbaja;
	var sumaedades=0;
	var promedioedades;
	var contadorvaronesmayores=0;
	var contador=1;
	while(contador<6) //contador de 1 a 5
		{
		edad=prompt("ingrese edad entre 0 y 100: "+contador);
		edad=parseInt(edad);
		while(edad<0 || edad>100)
			{
			edad=prompt("re-ingrese edad entre 0 y 100: "+contador);
			edad=parseInt(edad);
			}
		sexo=prompt("ingreso sexo f o m: "+contador);
		while(sexo!='f' && sexo!='m')
			{
			sexo=prompt("re-ingreso sexo f o m: "+contador);
			}
		sumaedades=sumaedades+edad;
		if(contador==1)
			edadmasbaja=edad;
		if(edad<edadmasbaja)
			edadmasbaja=edad;
		if(sexo=='m' && edad>19)
			contadorvaronesmayores++;
		contador++;
		}
	promedioedades=sumaedades/(contador-1);
	document.write("<br>El promedio de edades es: "+promedioedades+ " años");
	document.write("<br>La edad mas baja es: "+edadmasbaja+" años");
	document.write("<br>Cantidad de varones mayores a 19 años: "+contadorvaronesmayores);
}