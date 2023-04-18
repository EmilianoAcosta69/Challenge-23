// Realizar una pagina con un script que calcule el valor de la letra de un numero de DNI. El numero debe ser en 0 y 99999999.
//Debemos calcular el resto de la division entera entre el numero y el numero 23. Segun el resultado, de 0 a 22, le correspondera una letra de las siguientes:
//(T,R,W,A,G,M,Y,F,P,D,X,B,N,J,Z,S,Q,V,H,L,C,K,E).Si lo introducido no es un numero debera indicarse con un alert y volver a preguntar.
//Debera de repetirse el proceso hasta que el usuario pulse <<Cancelar>>.40773821

let dni = 0;
let letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E']; 
let aceptar = true;

while(aceptar){

    dni = prompt('Ingrese su DNI: ');

if(isNaN (dni) || dni > 0 || dni < 99999999 ){
    alert(`La letra que corresponde a su DNI es: ${letras[dni%23]}`);
}else if(dni != isNaN || dni < 0 || dni > 99999999 || aceptar !== true){
    alert('Usted no ingreso un numero correcto, vuelva a intentarlo.'); 
}
    aceptar = confirm('Desea ingresar su DNI nuevamente? ');
}