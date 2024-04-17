//1. SIEMPRE SE DEBE HACER -> VERIFICAR QUE SI ESTE CONECTADO CON EL THML

console.log("HOLA, SOY LA ACTIVIDAD DE HOY");
f

//2.TRAER LOS ELEMENTOS QUE NECESITA DE SU HTML -> los que tiene id ->los elementos que me traiga deben estar en una variable -> debe ser constante

//Document-> me accede a mi html
//getElementById-> me trae un elemento en particular por su identificador unico
//dentro de los parentesisi DEBO PONER EL MISMO ID que puse en mi thml

//Mi elemento 1 -> forma 1-> se llevan directamente a su js
const edadInput = document.
getElementById("edadInput");
console.log(edadInput);

//Mi elemento 2 -> una forma
 //Const btn = document.getElementById("boton");
getElementById("boton");
//console.log(btn);

const mensaje= document.getElementById("mensajeEdad");
console.log(mensaje);

//2da forma es mediante eventos y crean funciones asociadas
function verificarEdad(){
    //Yo quiero que cada que le de click al boton, me salga un mensaje de "hola"

    console.log("Entro a mi funcion verificar edad");
     //Para acceder no al elemento de thml si no a su valor,se debe escribir el . value
    let edad = edadInput. value; 
    console.log(edad);
  //UTILIZAR CONDICIONALES  

    if(edad>= 18){
        //aca esto es lo que sucede si la condicion es verdadera
        console.log("Eres mayor de edad")
    } else{
         //aca se define lo que sucede cuando la condicion
         console.log("eres menor de edad");

         mensaje.textContent="eres menor de edad";

    }

}

