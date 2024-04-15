//1. SIEMPRE SE DEBE HACER -> VERIFICAR QUE SI ESTE CONECTADO CON EL THML

console.log("HOLA, SOY LA ACTIVIDAD DE HOY 10/04/2024");


//2.TRAER LOS ELEMENTOS QUE NECESITA DE SU THML -> los que teiene id ->los elementos que me traiga deben estar en una variable -> debe ser constante

//Document-> me accede a mi thml
//getElementById-> me trae un elemento en particular por su identificador unico
//dentro de los parentesisi DEBO PONER EL MISMO ID que puse en mi thml
const edadInput = document.getElementById("edadInput");
console.log(edadInput);