Console.log ("HOLA,MUNDO!")
// Esta es la forma de comentar en js
// CONSOLE.LOG -> la forma de enviar mensajes a la consola del navegador
console.log("HOLA DESARROLLADORES Y PSICOLOGOS")
console.log ("mi") 

//CONCEPTOS BASICOS EN JAVASCRIPT

//1. Tipos de variables
//2. Manejo del DOM
//3. Condicionales
//4. Ciclos

// LAS VARIABLES EN JS

//Hay 3 tipos de variables en js

// VAR -> un tipo de variable que ya no se usa (NO LA VAMOS A USAR) -> Cambiar en el tiempo

// LET -> Es una variable que  cambia en el tiempo

resultado =5+3
resultado ="Luisa"
//CONST -> una variable que no puede cambiar en el tiempo


//TIPOS DE DATOS O INFORMACION QUE PODEMOS ALMACENAR

//Numericos
let numeros= 7;

// Cadena de caracteres -> texto -> string (en programacion)
// El texto SIEMPRE debe estar dentro de comillas
let texto= "hola,mundo"

//Booleanos -> n dato que puede ser vardadero o falso
let esVERDADERO = true; //TRUE -> VERDADERO
let esFALSO = FALSE; //false -< falso

//Arreglos -> arrays (en programacion)-> me permite almacenar varios datos al mismo tiempo en una misma variable
// let arregloNombres =["Luisa","Emanuel","Dayannna"]
let arregloNumeros = ["1","2","3","4"]

//Objetos -> " una representacion de la vida real,pero en nuestro codigo"

// -> Atributos-> caracteristicas de este objeto
// ->Metodos -> acciones

//(){}[]
// ()-> parentesis -> nos permite ejecutar acciones -> invocar
// {}-> llaves -> para declarar objetos
//[]-> corchetes -> son para declarar arreglos


const celular ={
    color:"blanco",
    modelo: "Galaxy A7",
    ancho:350,
    alto:800,
    enviarMensajes:function(){
        //entre estos corchetes al lado de unos parentesis yo establezco la accion a realizar
        console.log("Mensaje enviado");
    },
    //El metodo -> las acciones -> directamente una operacion
    sumar: function(){
        console.log(5+4);
    }

}
//Funciones -> pueden no recibir datos de entrada -> un procesamiento de datos y luego nos devuelve un resultado
function buscarObjeto(){
    console.log("le muestra lo que esta buscando")

}
function filtrarInformacion(){
    console.log("me muetra solo informacion de la depresion");
}


//en la carpeta script van TODOS los archivos JS PERO destinados a darle dinamismo al sitio web NO SE RELACIONAN CON LA FUNCIONALIDADDEL SITIO A NIVEL DE BACKEND

//NODE JS -> Utilizamos para poder implementar JS en nuestro icken -> operaciones logicas nos permite el FUNCIONAMIENTO de nuestro sitio web






