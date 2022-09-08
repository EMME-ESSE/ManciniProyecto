instruct()

   class Alumnos {
    constructor(nombre, apellido, promedio) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.promedio = promedio;
    }
}

//VARIABLES
const btnagregar = document.getElementById('agregar')
const btnalumnos = document.getElementById('btnalumnos')
const btnpromedio = document.getElementById('btnpromedio')
const btnborrarlista = document.getElementById("borrarlista")



const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const nota = document.getElementById('nota');


let Usoalumnos = []
let notas = []



//VARIABLES


//funcion ajax con sweet alert
function Ajax(){
  Swal.fire({
    title: 'Escribe tu nombre de GitHub',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Aceptar',
    showLoaderOnConfirm: true,
    preConfirm: (login) => {
      return fetch(`//api.github.com/users/${login}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText)
          }
          return response.json()
        })
        .catch(error => {
          Swal.showValidationMessage(
            `Request failed: ${error}`
          )
        })
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `Avatar de ${result.value.login}`,
        imageUrl: result.value.avatar_url
      })
    }
  })
}

//FUNCION DE MANUAL 
async function instruct(){(Swal.fire({
  title: 'Manual de uso',
  icon: 'warning',
  text: 'Los primeros dos campos de texto son para el ingreso de nombre y apellido del alumno. El tercer campo es para la nota del alumno la cual se ingresara de una en una para calcular posteriormente el promedio, y junto al cuarto campo de texto el porcentaje en caso de hacer promedio ponderado',
  
}), 2000);

}


  //VALIDAR CAMPO VACIO       

function validaVacio(valor) {
        valor = valor.replace("&nbsp;", "");
        valor = valor == undefined ? "" : valor;
        if (!valor || 0 === valor.trim().length) {
            return true;
            }
        else {
            return false;
            }
        }

      



//AGREGO NOTA

agregar.addEventListener('click', (e) => {
    e.preventDefault()
    if ( validaVacio(nombre.value) || validaVacio(apellido.value) || validaVacio(nota.value)) {  //COMPRUEBA CAMPOS VACIOS
      Swal.fire({
        icon: 'error',
        title: 'Cuidado!',
        text: 'Alguno de los ingresos obligatorios esta vacío',
      })
        return false;
    }
    else{
      let notaAlumno = parseInt(nota.value);
      notas.push(notaAlumno); 
      nota.value=""  
    return true;
  }
})
//AGREGO UN ALUMNO CON LOCAL STORAGE Y LO "DIBUJO" EN EL HTML
btnalumnos.addEventListener('click', (e) => {
    e.preventDefault()

    if (( validaVacio(nombre.value) || validaVacio(apellido.value) || notas.length==0)) {  //COMPRUEBA CAMPOS VACIOS
      Swal.fire({
        icon: 'error',
        title: 'Cuidado!',
        text: 'Alguno de los ingresos obligatorios esta vacío',
      })
      return false;
      
    
    }
     else{
           let nombreAlumno = nombre.value;
       let apellidoAlumno = apellido.value;
       let promedioAlumno = ((notas.reduce((a, b) => a + b, 0)) / notas.length).toFixed(2);
       let nuevoAlumno = new Alumnos(nombreAlumno, apellidoAlumno, promedioAlumno);
       Usoalumnos.push(nuevoAlumno);
       localStorage.setItem('Usoalumnos', JSON.stringify(Usoalumnos));     
       
      


       dibujarAlumnos()
       notas.length = 0;
       Usoalumnos.length = 0;
      

    return true;}
})
//DIBUJO EN EL HTML

const dibujarAlumno = document.getElementById('muestra')
const dibujarAlumnos = () => { 
    for (let i = 0; i < Usoalumnos.length; i++) {
        const entradaalumnos = Usoalumnos[i];
        dibujarAlumno.innerHTML += `<tr>
        <td>${entradaalumnos.nombre}</td>
        <td>${entradaalumnos.apellido}</td>
        <td>${entradaalumnos.promedio}</td>
        </tr>`
        nombre.value=""
        apellido.value=""
        nota.value=""
    }
}

//BORRO LOS DATOS Y EL HTML
btnborrarlista.addEventListener('click', (e) => {
  e.preventDefault()
 dibujarAlumno.innerText = "";
 localStorage.clear();
 
})










