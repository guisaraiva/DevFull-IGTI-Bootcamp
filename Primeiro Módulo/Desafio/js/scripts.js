// Declaração das variáveis que serão utilizadas no projeto.
let countlMen = 0;
let countWomen = 0;
let sumAges = 0;
let averageAges =0;
let countCountries = 0;
let tabCountries = null;
let totalContactsList = 0;
let allContacts = [];
let clickButton = null;
let inputName = null;
let hasText = null;

window.addEventListener('load', ()=>{
  clickButton = document.querySelector('#clickButton')
  countCountries = document.querySelector('#countCountries');
  tabCountries = document.querySelector('#tabCountries');
  inputName = document.querySelector('#getContact')
  getContacts();
})

async function getContacts (){
  const contactList = await fetch('https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo');
  const dataContacts = await contactList.json();
  
  allContacts = dataContacts.results.map(contact => {
    const { name, dob, picture, gender } = contact;    // Realizando um destructuring
      return {
        first: name.first,
        lastName: name.last,
        age: dob.age,
        picture: picture,
        gender: gender
      }
  });
  render();
}

function render(){
  renderContactsList();
}

function renderContactsList(){
  function handleTyping(event){
    hasText = event.target.value.toLowerCase();
    if(event.key === 'Enter'){
      let contactsHTML = "<div>";  
      for(let i = 0; i < allContacts.length; i++){
          let firsta = allContacts[i].first.toLowerCase().includes(hasText);
          if(firsta){
               const { first, lastName, age, picture, gender } = allContacts[i];
               const contactHTML = `
               <div class="country">
                  <img src="${picture.thumbnail}" alt="Image" />
                  ${first} ${lastName}, ${age} anos
                 </div>
               </div>    
               `
               contactsHTML += contactHTML;
            }
        }
        contactsHTML += "</div>";
        tabCountries.innerHTML = contactsHTML;
}}
  inputName.addEventListener('keyup', handleTyping)
  inputName.focus()
}

