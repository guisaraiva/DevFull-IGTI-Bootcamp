const fs = require('fs');

// fs.readFile('Trabalho Prático/data/Estados.json', (err, dataEstados) => {
//   if (err) throw err;
//   console.log(JSON.parse(dataEstados));
// });
// globalCidades =[];

//  fs.readFile('Trabalho Prático/data/Cidades.json', (err, dataCidades) => {
//   if (err) throw err;
//   globalCidades = JSON.parse(dataCidades);
// });

// console.log(globalCidades)


// function readDataCities (){
//   fs.readFile('Trabalho Prático/data/Cidades.json', (err, data) => {
//   console.log(JSON.parse(data));
// });
// }
let globalCities =   fs.readFile('Trabalho Prático/data/Cidades.json', (err, data) => {
  console.log(JSON.parse(data));
});

function returnEstados(data){
  return data.Estado === '8';
}

const Estados = globalCities.filter(returnEstados);

console.log(Estados)