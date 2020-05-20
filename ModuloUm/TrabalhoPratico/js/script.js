window.addEventListener('load',start);

//Criação de variáveis de forma global
  
const rangeRed = document.querySelector('.rangeRed');
const valueColorRed = document.querySelector('.spanRed');
const rangeGreen = document.querySelector('.rangeGreen');
const valueColorGreen = document.querySelector('.spanGreen');
const rangeBlue = document.querySelector('.rangeBlue');
const valueColorBlue = document.querySelector('.spanBlue');

function start(){
  //Retornar valor do range Red
  rangeRed.addEventListener('input', function(){
    valueColorRed.textContent = this.value;
  })
  //Retornar valor do range Red
  rangeGreen.addEventListener('input', function(){
    valueColorGreen.textContent = this.value;
  })
  //Retornar valor do range Red
  rangeBlue.addEventListener('input', valueBlue)
}
const valueBlue = function (){
  valueColorBlue.textContent = this.value;
}
console.log(valueBlue)
