document.getElementById("plus").addEventListener("click", function () { calculate("+"); });
document.getElementById("minus").addEventListener("click", function () { calculate("-"); });
document.getElementById("multi").addEventListener("click", function () { calculate("*"); });
document.getElementById("divide").addEventListener("click", function () { calculate("/"); });

function calculate(operator) {
    let a = Number(document.getElementById("InputA").value);
    let b = Number(document.getElementById("InputB").value);
    var result;

    switch (operator) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "/":
            result = a / b;
            break;
        case "*":
            result = a * b;
            break;
        default:
            console.log(`Could not parse operator '${operator}'`)
            return;
    }

    sessionStorage.setItem("operator", operator);
    sessionStorage.setItem("result", result);
    sessionStorage.setItem("a", a);
    sessionStorage.setItem("b", b);
    window.location.assign("result.html")
}
