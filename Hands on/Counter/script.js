let increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");
let resetBtn = document.getElementById("reset");

var countNo=0;
increaseBtn.addEventListener('click',increase);
decreaseBtn.addEventListener('click',decrease);
resetBtn.addEventListener('click',reset);




function increase(){
    countNo++;
    document.getElementById("count").textContent = countNo;
}

function decrease(){
    countNo--;
    document.getElementById("count").textContent = countNo;
}

function reset(){
    countNo=0;
    document.getElementById("count").textContent = countNo;
}
