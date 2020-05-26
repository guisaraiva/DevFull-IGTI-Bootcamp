'use strict'; //JavaScript acusa mais erros

// Var x Let

// var tem escopo abrangente
// let tem escopo reduzido

function withVar(){
    for ( var i = 0; i < 10; i++){
        console.log('var' + i);
    }
    i = 20;
    console.log(i)
}

function withLet(){
    for ( let i = 0; i < 10; i++){
        console.log('var' + i);
    }
//    i = 20;
//    console.log(i)
}

// Const não recebe reatribuição

//const c = 10;
//c = 20;

//withVar();
//withLet();

function sum(a,b){
    return a + b;
}
// function anônina
const sum2 = function(a,b) {
    return a + b;
}
// arrow function 
const sum3 = (a,b) => {return a + b;};

// arrow function reduzida
const sum4 = (a , b) => a + b;

/* console.log(sum(2,3));
console.log(sum2(2,3));
console.log(sum3(2,3));
console.log(sum4(2,3));
 */

// Templates literals
const name = 'Guilherme'
const surName = 'Saraiva'
const text1 = 'Meu nome é ' + name + ' '+ surName;
const text2 = `Meu nome é ${name} ${surName}`;

console.log(text1);
console.log(text2);

