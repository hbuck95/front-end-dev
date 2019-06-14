
    const resultDisplay = document.getElementById("result");
    resultDisplay.value = sessionStorage.getItem("a") + " " +sessionStorage.getItem("operator") + " " + sessionStorage.getItem("b") + " = " + sessionStorage.getItem("result");
