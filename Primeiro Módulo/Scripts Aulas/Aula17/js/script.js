/**
 * (✓) Criar variáveis de estado da aplicação
(✓) Criar eventListnener de load com função start
(✓) Implementar start() com mapeamento de elementos 
   do DOM e invocação à função fetchCountries
(✓) Implementar fetchCountries() com async/await 
   com busca em 'https://restcountries.eu/rest/v2/all' 
   e transformação para obtenção de id, name, population e flag. 
   Ao final, invocar render();
(✓) Implementar render(), com invocação a funções menores: 
   renderCountryList, renderFavorites, renderSummary e handleCountryButtons.
(✓) Implementar renderCountryList com template literals.
(✓) Implementar renderFavorites com template literals.
(✓) Implementar renderSummary com reduce.
(✓) Implementar handleCountryButtons com querySelectorAll 
   e foreach, adicionando listener nos botões passando button.id
(✓) Implementar addToFavorites(id)
(✓) Implementar removeFromFavorites(id)
(✓) Implementar formatação de valores numéricos

 * Variáveis de estado da aplicação.
 */
let tabCountries = null;
let tabFavorites = null;

let allCountries = [];
let favoriteCountries = [];

let countCountries = 0;
let countFavorites = 0;

let totalPopulationsList = 0;
let totalPopulationsFavorites = 0;

let numberFormat = null;

window.addEventListener('load', ()=>{
  // Mapeando as informações do DOM
  tabCountries = document.querySelector('#tabCountries');
  tabFavorites = document.querySelector('#tabFavorites');
  countCountries = document.querySelector('#countCountries');
  countFavorites = document.querySelector('#countFavorites');

  totalPopulationsList = document.querySelector('#totalPopulationList');
  totalPopulationsFavorites = document.querySelector('#totalPopulationFavorites');

  numberFormat = Intl.NumberFormat('pt-BR');

  fetchCountries();

});
// Utilizando async / await no fetch para retornar os dados do arquivo Json.
async function fetchCountries(){
  const countriesData = await fetch('https://restcountries.eu/rest/v2/all');
  const data = await countriesData.json();
  allCountries = data.map(country =>{
    const{ numericCode, translations, population, flag } = country; 
    //Se os nomes do destruct repetir, podemos eliminar a repetição no return.
    return {
      id: numericCode,
      name: translations.pt,
      population,
      formattedPopulation: formatNumber(population),
      flag
    }
  });
  render();
}

function render(){
  //Função responsável por renderizar os dados na tela.
  //console.log('rendering...')
  renderCountryList();
  renderFavorites();
  renderSummary();
  handleCountryButtons();
}

function renderCountryList(){
  let countriesHTML = '<div>';

  allCountries.forEach(country => {
    const {name, flag, id, population, formattedPopulation} = country;
    //Utilizando template literals
    const countryHTML = `
    <div class="country">
      <div>
        <a id="${id}" class="waves-effect waves-light btn">+</a>
      </div>
      <div>
        <img src="${flag}" alt="${name}"/>
      </div>
      <div>
        <ul>
          <li>${name}</li>
          <li>${formattedPopulation}</li>
        </ul>
      </div>
    </div>
    `;
    countriesHTML += countryHTML;
    
  })
  countriesHTML += "</div>"
  tabCountries.innerHTML= countriesHTML;

}
function renderFavorites(){
  let favoritesHTML = "<div>"
  favoriteCountries.forEach(country => {
    const {name, flag, id, population, formattedPopulation} = country;
  const favoriteCountryHTML = `
    <div class="country">
      <div>
        <a id="${id}" class="waves-effect waves-light btn red darken-4 ">-</a>
      </div>
      <div>
        <img src="${flag}" alt="${name}"/>
      </div>
      <div>
        <ul>
          <li>${name}</li>
          <li>${formattedPopulation}</li>
        </ul>
      </div>
    </div>
    `;
  favoritesHTML += favoriteCountryHTML;
  
})
  favoritesHTML += "</div>"
  tabFavorites.innerHTML = favoritesHTML;
}

function renderSummary(){
  countCountries.textContent = allCountries.length;
  countFavorites.textContent = favoriteCountries.length;

  const totalPopulation = allCountries.reduce((accumulator, current) =>{
    return accumulator + current.population;
  }, 0);

  const totalFavorites = favoriteCountries.reduce((accumulator, current) =>{
    return accumulator + current.population;
  }, 0);

  totalPopulationsList.textContent = formatNumber(totalPopulation);
  totalPopulationsFavorites.textContent = formatNumber( totalFavorites);
}

function handleCountryButtons(){
  const countryButtons = Array.from(tabCountries.querySelectorAll('.btn'));
  const favoriteButtons = Array.from(tabFavorites.querySelectorAll('.btn'));

  countryButtons.forEach(button => {
    button.addEventListener('click', ()=> addToFavorites(button.id));
  })

  favoriteButtons.forEach(button => {
    button.addEventListener('click', ()=> removeFromFavorites(button.id));
  })

}
function addToFavorites(id){
  const countryToAdd = allCountries.find(country => country.id === id);
  favoriteCountries = [...favoriteCountries, countryToAdd]; //Usando o spred
  favoriteCountries.sort((a, b)=>{
    return a.name.localeCompare(b.name);
  });
  //Reatribui todos os objetvos, menos os ID´s iguais.
  allCountries = allCountries.filter(country => country.id !== id);

  render();
}

function removeFromFavorites(id){
  const countryToRemove = favoriteCountries.find(country => country.id === id);
  allCountries = [...allCountries, countryToRemove]; //Usando o spred

  allCountries.sort((a, b)=>{
    return a.name.localeCompare(b.name);
  });
  //Reatribui todos os objetvos, menos os ID´s iguais.
  favoriteCountries = favoriteCountries.filter(country => country.id !== id);

  render();

}

function formatNumber (number){
  return numberFormat.format(number);
}