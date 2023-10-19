let clickBtn = document.getElementById("clickMe");
// let main = document.getElementById(".main");
let color = ["Red","Yellow","Blue","Green","Skyblue","Brown","Cyan","Pink",]

let no = Math.floor(Math.random()*7);
clickBtn.addEventListener('click',()=>{
document.body.style.backgroundColor=color[no];
document.getElementById("colorName").textContent = color[no];
console.log(no);
no = Math.floor(Math.random()*7);
})