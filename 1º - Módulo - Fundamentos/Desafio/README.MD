Os alunos deverão desempenhar as seguintes atividades:
    Na carga inicial da aplicação, obter os dados de: https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo (Links para um site externo.)
    Carregar os dados dos usuários em um array.
    Permitir a filtragem de usuários através de um input com interação do usuário.
    O usuário poderá filtrar dados quando digitar pelo menos um caractere no input.
    O usuário poderá filtrar os dados tanto digitando "Enter" quanto clicando no botão correspondente, conforme imagens mais abaixo.
    Montar dois painéis.
    No painel da esquerda, listar os usuários filtrados.
    No painel da direita, calcular e mostrar algumas estatísticas sobre esses usuários, conforme imagens abaixo.

Dicas:

  Após executar a requisição à API, filtre somente os dados necessários ao app. Esses são: name (first + last), picture, dob.age e gender.
    Monitore o input com o evento "keyup".
    Filtrem os dados a partir de qualquer posição no nome, ou seja, o nome "Brenda" (caso exista na API) deve ser retornado se o filtro for "a".
    Para filtrar, considere todo o texto em minúsculas. Assim, o filtro "E" trará tanto "Elena" quanto "Helena", caso existam na API.
    Dê um console.log() nos dados do evento de digitação e você descobrirá como "cercar" a tecla "Enter".
    Foque mais no código JavaScript e menos na interface. O mais importante é que o filtro e os cálculos estejam corretos.
    Quebre o seu código em funções bem definidas.
    Será necessária uma boa dose de manipulação manual do DOM. Isso pode ser feito tanto com innerHTML + string (recomendo a utilização de template literals) ou com os comandos document.createElement, appendChild etc.
    Se quiserem fazer uma interface semelhante à das imagens, utilizem o Materialize (https://materializecss.com (Links para um site externo.)).
    Não deixem de assistir o vídeo desse desafio, onde demonstro a aplicação em funcionamento e dou mais algumas dicas.

 
07174 

24*992132195 vilma 


function renderSummaryContacts(){
  countCountries.textContent = allContacts.length;
}

function filterContactsMenAndWomen(){
  const totalContactsMen = allContacts.filter(person =>{
    return person.gender === "male"
  })
  const totalContactsWomen = allContacts.filter(person =>{
    return person.gender === "female"
  })
  countMen.textContent = totalContactsMen.length;
  countWomen.textContent = totalContactsWomen.length;
}

function summaryAges() {
  const totalAges = allContacts.reduce((accumulator, current) =>{
    return accumulator + current.ageContact;
  },0)
  
  sumAges.textContent = totalAges;
}
function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.querySelector("#myInput");
  filter = input.value.toUpperCase();
  ul = document.querySelector("#myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}


<input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name">


<img src="${photo.thumbnail}" alt="Image" />

       <li id="li"><a>${name.first}</a></li>   
	   
	   https://pt.stackoverflow.com/questions/121115/filtrar-elementos-de-uma-lista-e-mostrar-em-outra
	   
	   https://www.w3schools.com/howto/howto_js_filter_lists.asp
	   
	   
	   https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_list
	   
	   https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_list
	   
	   https://medium.com/@programadriano/javascript-conhecendo-map-filter-e-reduce-ce072d8f0ec5
	   
	   https://maujor.com/tutorial/10-exemplos-de-funcionalidades-es6.php
	   
	   https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filtro