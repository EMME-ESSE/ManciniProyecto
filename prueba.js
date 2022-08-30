instruct()

   class Alumnos {
    constructor(nombre, apellido, promedio) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.promedio = promedio;
    }
}


const btnagregar = document.getElementById('agregar')
const btnalumnos = document.getElementById('btnalumnos')
const btnpintar = document.getElementById('btnpintar')
const btnpromedio = document.getElementById('btnpromedio')
const btnborrarlista = document.getElementById("borrarlista")
const btnpromediopond = document.getElementById("btnpromediopond")

const porcentaje = document.getElementById('porcentaje');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const nota = document.getElementById('nota');







let listaAlumnos = []
let notas = []
let average = []
let UsoAlumnos = []/*
JSON.stringify(listaAlumnos)------------------------------------------------------
JSON.stringify(notas)
JSON.stringify(average)
localStorage.setItem('Alumnos', JSON.stringify(listaAlumnos));
localStorage.setItem('NotasDe', JSON.stringify(notas));
localStorage.setItem('PorcentajesDe', JSON.stringify(average));-          NO SE CUAL ES EL ERROR PERO NO SE ME GUARDAN LOS DATOS
const storedAlumnos = JSON.parse(localStorage.getItem('Alumnos'));

const storedNotas = JSON.parse(localStorage.getItem('NotasDe'));

const storedPorcentaje = JSON.parse(localStorage.getItem('PorcentajesDe'));--------------------------

/*
btnpromediopond.addEventListener('click', (e) => {
  e.preventDefault()
  for (let i = 0; i < listaAlumnos.length && i < listaAlumnos.length ; i++) {

  }
  let AVGalumno = parseInt(porcentaje.value)
  average.push(AVGalumno)
          porcentaje.value=""  
          let notaAlumno = parseInt(nota.value)
          notas.push(notaAlumno)
          nota.value=""  
         
          let nombreAlumno = nombre.value
          let apellidoAlumno = apellido.value
          let promedioAlumno = ((notas.reduce((a, b) => a + b, 0)) / notas.length).toFixed(2)
          let porcentajeAlumno = ((average.reduce((a, b) => a + b, 0)) / average.length).toFixed(2)
          AVGfinal = ((promedioAlumno[i]*porcentajeAlumno[i])/average[i])
          let nuevoAlumno = new Alumnos(nombreAlumno, apellidoAlumno, AVGfinal)
          listaAlumnos.push(nuevoAlumno)
          dibujarAlumnos()
      })
     ESTO SE CALCULAR COMO: ((NOTA1*PORCENTAJE1 + NOTA2*PORCENTAJE2...) / PORCENTAJE1+PORCENTAJE2+...)

*/







function instruct(){(Swal.fire({
  title: 'Manual de uso',
  icon: 'warning',
  text: 'Los primeros dos campos de texto son para el ingreso de nombre y apellido del alumno. El tercer campo es para la nota del alumno la cual se ingresara de una en una para calcular posteriormente el promedio, y junto al cuarto campo de texto el porcentaje en caso de hacer promedio ponderado',
  
}), 2000);

}


         

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
      let notaAlumno = parseInt(nota.value)
      notas.push(notaAlumno)
      nota.value=""  
    return true;
  }
})

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

    UsoAlumnos.length = 0
    let nombreAlumno = nombre.value
    let apellidoAlumno = apellido.value
    let promedioAlumno = ((notas.reduce((a, b) => a + b, 0)) / notas.length).toFixed(2)
    let nuevoAlumno = new Alumnos(nombreAlumno, apellidoAlumno, promedioAlumno)
    listaAlumnos.push(nuevoAlumno)
    UsoAlumnos.push(nuevoAlumno)
    dibujarAlumnos()
    return true;
})


const dibujarAlumno = document.getElementById('muestra')
const dibujarAlumnos = () => { 
    for (let i = 0; i < UsoAlumnos.length; i++) {
        const entradaalumnos = UsoAlumnos[i];
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
btnpintar.addEventListener('click', (e) => {
  e.preventDefault()
  let aprobadotxt = document.getElementById("aprobado")  
  let aprobado = parseInt(aprobadotxt.value)
 if (promedioAlumno > aprobado){
  element.style.backgroundColor = 'green';
 

}




})

btnborrarlista.addEventListener('click', (e) => {
  e.preventDefault()
 dibujarAlumno.innerText = "";
 listaAlumnos.length = 0
 notas.length = 0
 average.length= 0
 console.log(listaAlumnos)
 
})

 //.........................................................................................................
    /*
    let aprobado = document.getElementById("aprobado").value;
  */
 
   

       /* const guardarLocal = localStorage.setItem(lista);
        guardarLocal(JSON.stringify(lista));


*/
/*

let but1 = document.getElementById("Button1")
but1.addEventListener("click",prompond)
      function prompond(){   
        const nota1 = document.getElementById("intres").value;
        const prom1 = document.getElementById("incuatro").value;
        const nota2 = document.getElementById("incinco").value;
        const prom2 = document.getElementById("inseis").value;
       const nota3 = document.getElementById("insiete").value;
        const prom3 = document.getElementById("inocho").value;
                     let cuenta = ((nota1 * prom1) + (nota2 * prom2) + (nota3 * prom3));
            let suma = (prom1*1) + (prom2*1) + (prom3*1);
            let re = cuenta / suma;
                     console.log(nota1)
                     console.log(prom1)
                     console.log(nota2)
                     console.log(prom2)
                     console.log(nota3)
                     console.log(prom3)
                     console.log(cuenta)
                     console.log(suma)
                     console.log(re)

            alert(re)};
        
  
        
//PREGUNTAR POR COMO DEFINIR AFUERA LA VARIABEL Y COMO HACE LOS IF


    //if (caso_uno == "" || caso_dos == "" || caso_tres == "" || nota_dos == "" || nota_uno == "" || nota_tres == "")
    //{ 
    
    
    //}
    
    let but4 = document.getElementById("Button4")
    but4.addEventListener("click",promedio)
          function promedio(){ 
            const nota1 = document.getElementById("intres").value;
            const prom1 = document.getElementById("incuatro").value;
            const nota2 = document.getElementById("incinco").value;
            const prom2 = document.getElementById("inseis").value;
           const nota3 = document.getElementById("insiete").value;
            const prom3 = document.getElementById("inocho").value;
   
        
//DESDE ACA --------------- TENGO EL PROBLEMA DE PROMFINAL
           
            let cuentaprom = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)+parseFloat(prom1)+parseFloat(prom2)+parseFloat(prom3))/6;
           alert (cuentaprom);
            let promfinal= cuentaprom//usar local storage
        }
        let but2 = document.getElementById("Button2")
        but2.addEventListener("click",contarnombres)
              function contarnombres(){   
                let muestra = document.getElementById("muestra")
                let nombre = document.getElementById("inuno").value;
                let apellido = document.getElementById("indos").value;
          /*ACA INTENTO HACER EL APEND AL DIV MUESTRA*/  
          /* ESTO ACA NO ESTABA let muestreo = muestra.innerHTML = nombre +" "+apellido;
            //lista.append(nombre + apellido);
           lista.append(nombre)/////////////////////////////////////////////////////


             /* let listalum = { nombre:nombre,apellido:apellido,promedio:cuentaprom,promediopond:re };
              const enJSON    = JSON.stringify(lista);
              localStorage.setItem("listaalum", enJSON);
              lista.append(listalum)
              localStorage.setItem("lista", enJSON);
              }// HASTA ACA----------------------*/
              
              
              
              /*}*/