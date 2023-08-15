function capturar_numero(){
    let numeroUno = document.getElementById("number-one").value;
    let numeroDos = document.getElementById("number-two").value;
    let numeros = [numeroUno,numeroDos];
    return numeros;
}

function sumar(){
    numeros = capturar_numero();
    let operacion = +numeros[0] + +numeros[1] 
    mostrarResultado(operacion);
}

function restar(){
    numeros = capturar_numero();
    let operacion = +numeros[0] - +numeros[1] 
    mostrarResultado(operacion);
}

function multiplicar(){
    numeros = capturar_numero();
    let operacion = +numeros[0] * +numeros[1] 
    mostrarResultado(operacion);
}

function dividir(){
    numeros = capturar_numero();
    let operacion = +numeros[0] / +numeros[1] 
    mostrarResultado(operacion);
}

function raizCuadrada(){
    numeros = capturar_numero();
    let operacion = Math.sqrt(numeros[1]);
    mostrarResultado(operacion);
}

function potencia(){
    numeros = capturar_numero();
    let operacion = Math.pow(numeros[0],numeros[1]);
    mostrarResultado(operacion);
}

function valorAbsoluto(){
    numeros = capturar_numero();
    let operacion = Math.abs(numeros[1]);
    mostrarResultado(operacion);
}

function generarRandom(){
    let numeros = capturar_numero();
    let minimo = +numeros[0];
    let maximo = +numeros[1] + 1;

    console.log(minimo , maximo);
    let operacion = Math.floor(Math.random() * (maximo-minimo) + minimo);
    mostrarResultado(operacion);
}

function RedondearNumero(){
    let numeroARedondear = document.getElementById("result").textContent;
    console.log(numeroARedondear);
    let operacion = Math.round(+numeroARedondear);
    mostrarResultado(operacion)   
}

function RedondearNumeroCeil(){
    let numeroARedondear = document.getElementById("result").textContent;
    console.log(numeroARedondear);
    let operacion = Math.ceil(+numeroARedondear);
    mostrarResultado(operacion)   
}

function RedondearNumeroFloor(){
    let numeroARedondear = document.getElementById("result").textContent;
    console.log(numeroARedondear);
    let operacion = Math.floor(+numeroARedondear);
    mostrarResultado(operacion)   
}


function mostrarResultado(operacion){
    console.log(operacion);
    let resultado = document.getElementById("result");
    resultado.textContent = operacion;
}