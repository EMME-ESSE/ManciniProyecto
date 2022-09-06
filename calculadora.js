//OPERACIONES
var operandoa;
var operandob;
var operacion;
//inicio esta funcion para escribir solo una vez cada situacion y hacer mas legible el codigo

   
  const resultado = document.getElementById('resultado');
  const reset = document.getElementById('reset');
  const  suma = document.getElementById('suma');
  const  resta = document.getElementById('resta');
  const  multiplicacion = document.getElementById('multiplicacion');
  const  division = document.getElementById('division');
  const  igual = document.getElementById('igual');
  const  uno = document.getElementById('uno');
  const  dos = document.getElementById('dos');
  const  tres = document.getElementById('tres');
  const  cuatro = document.getElementById('cuatro');
  const  cinco = document.getElementById('cinco');
  const  seis = document.getElementById('seis');
  const  siete = document.getElementById('siete');
  const  ocho = document.getElementById('ocho');
  const  nueve = document.getElementById('nueve');
  const  cero = document.getElementById('cero');
  
  //EVENTOS DE CLICK---------------------------------------------
  uno.onclick = function(e){
      resultado.textContent = resultado.textContent  + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent  + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent  + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent  + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent  + "5";
    }
    seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}




reset.onclick = function(e){
    resetear();
}
suma.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function(e){
    operandob = resultado.textContent;
    resolver();
}


//FUNCIONES----------------------------------------------
function limpiar(){
    resultado.textContent = "";
}
function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}


function resolver(){
    var resul = 0;
    switch(operacion){
        case "+":
            resul = parseFloat(operandoa) + parseFloat(operandob);
            break;
            case "-":
                resul = parseFloat(operandoa) - parseFloat(operandob);
                break;
                case "*":
                    resul = parseFloat(operandoa) * parseFloat(operandob);
                    break;
                    case "/":
                        resul = parseFloat(operandoa) / parseFloat(operandob);
                        break;
                    }
                    resetear();
                    resultado.textContent = resul;
                }
                
                
                
                
            