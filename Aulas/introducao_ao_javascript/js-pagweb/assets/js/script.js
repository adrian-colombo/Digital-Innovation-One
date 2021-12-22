var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    if (currentNumber < 10){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }
    
    if(currentNumber < 0){
        document.getElementById("currentNumber").style.color="red";
    } else if(currentNumber >= 0){
        document.getElementById("currentNumber").style.color="gray";
    }
}
document.getElementById("increment").addEventListener("click",increment);

function decrement() {
    if(currentNumber > -10){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }
    
    if(currentNumber < 0){
        document.getElementById("currentNumber").style.color="red";
    }  else if(currentNumber >= 0){
        document.getElementById("currentNumber").style.color="gray";
    }
}
document.getElementById("decrement").addEventListener("click",decrement);




/*  Implementados,
    addEventListiner invés de onclick;
    limite de contar até o 10 (negativo e positivo);
    o número fica vermelho se o valor for negativo.
*/