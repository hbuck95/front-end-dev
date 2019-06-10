const increBtn = document.getElementById("increment_counter")
let count = 0;

increBtn.addEventListener("click", incrementBy1);

function incrementBy1() {
    console.log("increment");
    document.getElementById("history").innerText += (count == 0 ? " " : ", ") + count;
    count++;
    document.getElementById("counter").innerHTML = "Count: "+count;
} 