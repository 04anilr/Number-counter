let countElement = document.getElementById("count");
let increment = document.getElementById("increase");
let decrement = document.getElementById("decrease");


function addOne(){
    let currentCount = parseInt(countElement.innerText);
    countElement.innerText = currentCount + 1;
}

function subOne(){
    let CurrentCount = parseInt(countElement.innerText);
    if(CurrentCount > 0){
         countElement.innerText = CurrentCount - 1;  
    }
}
document.getElementById("reset").addEventListener("click", ()=>{
    count=0;
    countElement.textContent = count;
})
   

increment.addEventListener("click", addOne)
decrement.addEventListener("click", subOne)