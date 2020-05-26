window.addEventListener('load', ()=>{
    doSpread();
   
})

    function doSpread(){
     const marriedMen = people.results.filter(person =>{
         person.name.title === "Mr" 
     })   
    }