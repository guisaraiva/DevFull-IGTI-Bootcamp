// Para consumir uma api com javaScript
window.addEventListener('load', function(){
  doFetch();
  doFetchAsync();

  //console.log(divisionPromisse(10 / 5)); Retorna uma promisse. Temos que pegar os dados com then
  // divisionPromisse(12,6).then(result =>{
  //   console.log(result);
  // });
  // divisionPromisse(12,0).then(result =>{
  //   console.log(result);
  // }).catch(errorMessage => {
  //   console.log('Falha na divisão. ' + errorMessage);
  // });
  executeDivisionPromise();
  executeDivisionPromiseAsyncAwait();

});

function doFetch(){
  fetch('https://api.github.com/users/rrgomide').then(res =>{ // sempre temos um return da promisse
    //console.log(res); Exibindo o res da promisse.
    res.json().then(data => {
      // Trabalhamos com os dados neste ponto.
      showData(data);
    });
  }).catch(error =>{
    console.log("Erro na requisição!!");
  });
}

async function doFetchAsync(){
  const res = await fetch('https://api.github.com/users/rrgomide');
  const json = await res.json();
  //showData(data);
  console.log(json);
}

function showData(data){
  const user = document.querySelector('#user');
  user.textContent = data.login + ' ' + data.name;
} 

function divisionPromisse(a, b) {
  return new Promise((resolve, reject) => {
    if(b === 0) {
      reject('Não é possível dividir por 0.');
    }
    resolve(a / b);
  })
}

function executeDivisionPromise(){
  divisionPromisse(12, 4)
    .then(result => {
      console.log(result);
    })
    .catch(errorMessage => {
      console.log('Falha na divisão ' + errorMessage);
    })
}

async function executeDivisionPromiseAsyncAwait(){
  const division = await divisionPromisse(12,2);
  console.log(division);
}

