document.getElementById("plus").addEventListener("click", addition);
document.getElementById("minus").addEventListener("click", subtraction);
document.getElementById("multi").addEventListener("click", multiply);
document.getElementById("divide").addEventListener("click", division);

const resultDisplay = document.getElementById("result");

/*function calculate(){
    let numA = Number(document.getElementById("InputA").value);
    let numB = Number(document.getElementById("InputA").value);
}*/

function addition() {
    let a = parseInt(document.getElementById("InputA").value, 10);
    let b = parseInt(document.getElementById("InputA").value, 10);
    let r = a + b;
    resultDisplay.value = r;
    console.log(r);
    return r;
}

function subtraction() {
    let a = parseInt(document.getElementById("InputA").value, 10);
    let b = parseInt(document.getElementById("InputA").value, 10);
    let r = a - b;
    resultDisplay.value = r;
    console.log(r);
    return r;
}

function multiply() {
    let a = parseInt(document.getElementById("InputA").value, 10);
    let b = parseInt(document.getElementById("InputA").value, 10);
    let r = a * b;
    resultDisplay.value = r;
    console.log(r);
    return r;
}

function division() {
    let a = parseInt(document.getElementById("InputA").value, 10);
    let b = parseInt(document.getElementById("InputA").value, 10);
    let r = a / b;
    resultDisplay.value = r;
    console.log(r);
    return r;
}
