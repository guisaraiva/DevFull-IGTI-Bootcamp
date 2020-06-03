// importação do módulo file system do node.
const fs = require('fs');
// Estou armazenando os dados JSON em duas variáveis.
// São do tipo objeto.
const dataStates = require('./data/Estados.json');
const dataCities = require('./data/Cidades.json');

//console.log(dataCities);

// Declaração dos arrays globais.
let globalCities, globalStates, globalCityState =[];

function fetchCities (){
  globalCities = dataCities.map(({Nome, Estado}) => {
    return {
      nameCity: Nome,
      stateCity: Estado
    };
  });
}

function fetchStates (){
  globalStates = dataStates.map(({ID, Sigla, Nome}) => {
    return {
      idState: ID,
      initialsState: Sigla,
      nameState: Nome
    };
  });
}

function mergeCitiesAndStates (){
  globalCities.forEach((city) => {
    const foundState = globalStates.find((state) =>{
      return city.stateCity === state.idState;
    });

    globalCityState.push({
       ...foundState, Nome})
    console.log(globalCityState)

  })
}
// Eu tenho que chamar as funções em suas respectivas ordens

fetchCities();
fetchStates();
mergeCitiesAndStates();



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
/*
let globalCities =   fs.readFile('Trabalho Prático/data/Cidades.json', (err, data) => {
  console.log(JSON.parse(data));
});

function returnEstados(data){
  return data.Estado === '8';
}

const Estados = globalCities.filter(returnEstados);

console.log(Estados)*/