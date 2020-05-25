window.addEventListener('load',start);

//Criação de variáveis de forma global
  
const rangeInputs = {};
var relationshipInput = {};
var boxColor = document.querySelector('#box-color');


const rangeRed = document.querySelector('.rangeRed');
const valueColorRed = document.querySelector('.spanRed');
const rangeGreen = document.querySelector('.rangeGreen');
const valueColorGreen = document.querySelector('.spanGreen');
const rangeBlue = document.querySelector('.rangeBlue');
const valueColorBlue = document.querySelector('.spanBlue');
const input = document.querySelector('.colorDiv')

const arrayNumber = []

function start(){
  //Retornar valor do range Red
  rangeRed.addEventListener('input', function Red(){
    return valueColorRed.textContent = this.value;
  })
  //Retornar valor do range Red
  rangeGreen.addEventListener('input', function Green(){
    return valueColorGreen.textContent = this.value;
  })
  //Retornar valor do range Red
  rangeBlue.addEventListener('input', function(){
   valueColorBlue.textContent = rangeBlue.value;

    activateInput()
  })
  function activateInput()  {
    
    rangeBlue.addEventListener('input', handleTyping );
    rangeRed.addEventListener('input', handleTyping );
  }
   
  input.style.backgroundColor = 'rgb(0,55,15)'
  
}



