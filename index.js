let count=0;

const countResult = document.getElementById("count");
const countAddBtn = document.getElementById("add");
const countSubtract = document.getElementById("subtract");

countResult.innerText = count

countAddBtn.addEventListener("click",()=>{
    count++;
    countResult.innerText = count
});

countSubtract.addEventListener("click",()=>{
    count--;
    countResult.innerText = count
});