// Declaração das variáveis que serão utilizadas no projeto.
let sumGenderMale = 0;
let sumGenderFemale = 0;
let sumAgesContacts = 0;
let averageAges =0;
let countCountries = 0;
let tabCountries = null;
let totalContactsList = 0;
let allContacts = [];
let clickButton = null;
let inputName = null;
let hasText = null;

let valueTotalContacts = 0;

window.addEventListener('load', ()=>{
  sumGenderMale = document.querySelector('#countMen');
  sumGenderFemale = document.querySelector('#countWomen');
  clickButton = document.querySelector('#clickButton');
  countCountries = document.querySelector('#countCountries');
  tabCountries = document.querySelector('#tabCountries');
  inputName = document.querySelector('#getContact')
  averageAges = document.querySelector('#countFavorites');
  sumAgesContacts = document.querySelector('#sumAges');
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
      sumGenderMale = 0;
      sumGenderFemale = 0;
      valueTotalContacts = 0;
      sumAgesContacts = 0;
      averageAges = 0;
      let contactsHTML = "<div>";  
      for(let i = 0; i < allContacts.length; i++){
          let pName = allContacts[i].first.toLowerCase().includes(hasText);
          let fName = allContacts[i].lastName.toLowerCase().includes(hasText);
          if(pName || fName){
               const { first, lastName, age, picture, gender } = allContacts[i];
               const contactHTML = `
               <div class="country">
                  <img src="${picture.thumbnail}" alt="Image" />
                  ${first} ${lastName}, ${age} anos
                 </div>
               </div>    
               `
               contactsHTML += contactHTML;
               valueTotalContacts ++;
               averageAges += age;
               
               if(gender === 'female'){
                sumGenderFemale ++
               }
               else{
                sumGenderMale ++
               }
            }
            countCountries.textContent = valueTotalContacts;
            countFavorites.textContent = ((averageAges/valueTotalContacts).toFixed(2));
            

        }
        contactsHTML += "</div>";
        tabCountries.innerHTML = contactsHTML;
        countWomen.textContent = sumGenderFemale;
        countMen.textContent = sumGenderMale;
        sumAges.textContent = averageAges;
}}
  inputName.addEventListener('keyup', handleTyping)
  inputName.focus()
}

