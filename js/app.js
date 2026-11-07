//ejercicio 1
let nombre = "juan";
let edad = 20;
let activo = true;
console.log(nombre);
console.log(edad);
//ejercicio 2
let nombre1 = "Rufino";
let edad1 = 30;
let Carrera = "Ingenieria en sistemas";
let promedio = 61;
console.log(nombre);
console.log(edad);
console.log(Carrera);
console.log(promedio);
//ejemplo
let nombre2 = prompt("ingrese su nombre");
console.log("Bienvenido" + nombre2);
//ejercio
let nombre3 = prompt("ingrese su nombre");
console.log("Bienvenido" + nombre3);
let ciudad = prompt("ingrese su ciudad");
console.log("Bienvenido" + ciudad);
let edad3 = prompt("ingrese su edad");
console.log("Bienvenido" + edad3);
//ejemplo
let edad5 = prompt("ingrese su edad");
if (edad5 >= 18) {
    console.log("mayor de edad");
}
//ejercicio
let nume1 = Number(prompt("ingrese su valor"));
let nume2 = Number(prompt("ingrese su valor"));
if (nume1 == nume2) {
    console.log("son iguales");
}
else if (nume1 > nume2) {
    console.log("el primer numero es mayor");
} else{
  console.log("el segundo numero es mayor");
}
let nota = Number(prompt("ingrese su nota"));
if (nota >= 61) {
    console.log("aprobado");
} else{
  console.log("reprobado");
}
//ejercicio 4
let edad7 = Number(prompt("ingrese su edad"));
if (edad7 >= 18) {
    console.log("mayor de edad");
  } else{
    console.log("menor de edad");
  }
  //ejemplo
  let nota = Number(prompt("ingrese nota"));
  if(nota >= 90){
    console.log("excelente");
  }
  else if(nota >= 70){
    console.log("bueno");
  }
  else if(nota >= 51){
    console.log("regular");
  }
  else{
    console.log("reprobado");
  }
  //ejercicio 5
  //ejemplo
  let opcion = Number(prompt("ingrese una opcion"));
  switch(opcion){
    case 1:
      console.log("registrar");
      break;
    case 2:
      console.log("modificar");
      break;
      default:
        console.log("opcion invalida");
  }