function saber(){
    
let contenedor = document.querySelector('#dinamic');


let input_num = parseInt(prompt("Ingrese numero de alumnos"));//agrega la cantidad de filas de input text igual a la cantidad de alumnos
for (let j = 1 ; j <= input_num; j++){



/**
 * Método que se ejecuta cuando se da clic al botón de agregar elementos
 */
    let div = document.createElement('div');
    div.innerHTML = `<input type="text" name="nombre[]" placeholder="Nombre" required> - <input type="text" name="apellido[]" placeholder="Apellido" required> - <input type="text" name="campdenota[]" placeholder="Nota final de lalumno" required>`;
    contenedor.appendChild(div);


    
/* ESTA FUNCION LA CAMBIARIA POR LA DE ABAJO PERO NO SE POR QUE NO FUNCIONA 

let div = document.createElement('div');
    div.innerHTML = `<input type="text" name="nombre[]" placeholder="Nombre" required> - <input type="text" name="apellido[]" placeholder="Apellido" required> - <input type="text" name="campdenota[]" placeholder="Nota final de lalumno" required>`;
    contenedor.appendChild(div);
const nombre = getElementByclass("nombre");
nombre.innerHTML(nombre)
const apellido = getElementByclass("apellido");
apellido.innerHTML(apellido)
const campodenota = getElementByclass("campodenota");
campodenota.innerHTML(campodenota) */





/**
 * Método para actualizar el contador de los elementos agregados
*/
const actualizarContador = () => {
    let divs = contenedor.children;
    total = 1;
    for (let i = 0; i < divs.length; i++) {
        divs[i].children[0].innerHTML = total++;
    }
};
}}

//funcion para promedio ponderado
function prompond(){
    let input_num = parseInt(prompt("Ingrese numero de alumnos"));
for (let j = 1 ; j <= input_num; j++){
    let caso_uno = parseInt(prompt("Ingrese porcentaje de primer parcial"));
    let nota_uno = parseInt(prompt("Ingrese nota del alumno"));
    let caso_dos = parseInt(prompt("Ingrese porcentaje de segundo parcial"));
    let nota_dos = parseInt(prompt("Ingrese nota del alumno"));
    let cuenta = ((caso_uno * nota_uno)+(caso_dos * nota_dos))/(caso_dos + caso_uno);
    alert(cuenta)

//ciclo para repetir el caso con el numero de alumnos que de ingreso

if (cuenta <= 0){
    alert("Debe recursar la materia")
}

if (cuenta > 0 & cuenta < 4){
    alert("Se le hará una prueba final")

}if (cuenta > 4 & cuenta < 11){
    alert("Ha aprobado el curso")

}
} 
}
function contarnombres(){
    const nombres = []
    let input_num = parseInt(prompt("Ingrese numero de alumnos"));//mostrar la cantidad de alumnos que ingreso
    for (let j = 1 ; j <= input_num; j++){
    let ingreso = String(prompt("Ingrese un nombre"))
    nombres.push(ingreso)  
}
    alert(nombres)//mostrar la lista de nombres
   
  
    
    
    
}
//funcion del promedio "normal"
function promedio(){
    let nota1 = parseInt(prompt("Ingrese la primera nota del alumno"));
    let nota2 = parseInt(prompt("Ingrese la segunda nota del alumno"));
    let cuentaprom = (nota1+nota2)/2;
    alert(cuentaprom)
}
//cuando se oprime el boton esto pasa, se toma campodenota como el campo en el cual la nota de va a encontrar
function cambiarcolor(){

    let value = cuentaprom;
    let campodenota = document.getElementByclass(campodenota);
    campodenota.innerHTML = value;
    if (campodenota.innerHTML <= 0) {
        campodenota.style.backgroundColor = "rgb(112, 24, 24);";
        campodenota.style.Color = "rgb(255,255,255)";
    }
    if (campodenota.innerHTML > 0 & campodenota.innerHTML < 4) {
        campodenota.style.backgroundColor = "rgb(49, 226, 13)";
        
    
    }if (campodenota.innerHTML > 4) {
        campodenota.style.backgroundColor = "rgb(95, 95, 95)";
        campodenota.style.Color = "rgb(255,255,255)";
    }

  

 
}


