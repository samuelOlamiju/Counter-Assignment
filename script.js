'use strict'

let valueE1 = 0;
let value = document.querySelector('#value');



document.querySelector(".increase").addEventListener('click', function(){
    valueE1++;
    value.textContent = valueE1;
    if (valueE1 === 0){
    value.style.color = "black";
}
    valueE1 > 0 ? value.style.color = "green" : value.style.color = "red";
    
})

document.querySelector(".decrease").addEventListener('click', function(){
    valueE1--;
    value.textContent = valueE1;
    if (valueE1 === 0){
    value.style.color = "black";
}
    valueE1 < 0 ? value.style.color = "red" : value.style.color = "green";
})

document.querySelector(".reset").addEventListener('click', function(){
    location.reload();
})
