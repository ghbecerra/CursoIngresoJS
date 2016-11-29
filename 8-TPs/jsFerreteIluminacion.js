/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var Marca;
 	var Cantidad;
 	Marca=document.getElementById('Marca').value;
 	Cantidad=document.getElementById('Cantidad').value;
 	precioBruto=Cantidad*35;
 	if (Cantidad>5){
 		precioDescuento=(precioBruto*0.5);
 		}
 	if (Cantidad==5) {
 		if (Marca=="ArgentinaLuz"){
 			precioDescuento=(precioBruto*0.6);
 			} else {
 				precioDescuento=(precioBruto*0.7);
 				}
 		} //(Cantidad==5)
 	if (Cantidad==4) {
 		if (Marca=="ArgentinaLuz" || Marca=="FelipeLamparas"){
 			precioDescuento=(precioBruto*0.75);
 			} else {
 				precioDescuento=(precioBruto*0.8);
 				}
 		}//(Cantidad==4)
 	if (Cantidad==3) {
 		if (Marca=="ArgentinaLuz"){
 			precioDescuento=(precioBruto*0.85);
 			} else {
 				if (Marca=="FelipeLamparas"){
 					precioDescuento=(precioBruto*0.9);
 					} else {
 						precioDescuento=(precioBruto*0.95);
 					}
 				}
 		} //(Cantidad==3)
 	if (precioDescuento>120){
 		var ingresoBruto=(precioDescuento*0.1);
 		alert("Usted pago "+ingresoBruto+" de IIBB");
 		precioDescuento=precioDescuento+ingresoBruto;
 		}
 	document.getElementById('precioDescuento').value=precioDescuento;
}