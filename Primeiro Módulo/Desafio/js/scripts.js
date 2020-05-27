// Declaração das variáveis que serão utilizadas no projeto.
let countlMen = 0;
let countWomen = 0;
let sumAges = 0;
let averageAges =0;

let countCountries = 0;

let tabCountries = null;

let totalContactsList = 0;

let allContacts = [];

window.addEventListener('load', ()=>{
  countCountries = document.querySelector('#countCountries');
  tabCountries = document.querySelector('#tabCountries');
  getContacts();
})

async function getContacts (){
  const contactList = await fetch('https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo');
  const dataContacts = await contactList.json();

  allContacts = dataContacts.results.map(contact => {
    const { name, dob, picture, gender } = contact;    // Realizando um destructuring
      return {
        name: name,
        ageContact: dob.age,
        photo: picture,
        gender: gender
      }
  });
  //console.log(allContacts);
  render();
}

function render(){
  // Executar todas as funções posteriores.
  renderContactsList();
  renderSummaryContacts();
}
function renderContactsList(){
  let contactsHTML = "<div>";
  console.log(allContacts);
  allContacts.forEach(contact => {
    const { name, ageContact, photo, gender } = contact;
    const contactHTML = `
    <div class="country">
       <img src="${photo.thumbnail}" alt="Image" />
       ${name.first} 
       ${name.last} 
       ,${ageContact} anos
      </div>
    </div>    
    `
    contactsHTML += contactHTML;
  })
  contactsHTML += "</div>";
  tabCountries.innerHTML = contactsHTML;
}

function renderSummaryContacts(){
  countCountries.textContent = allContacts.length;
}