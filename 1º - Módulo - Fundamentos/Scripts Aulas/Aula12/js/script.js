window.addEventListener('load', ()=>{
    doSpread();
    doRest();
    doDestructuring()
})
function doSpread(){
    const marriedMen = people.results.filter(person =>
         person.name.title === "Mr" 
     )
     const marriedWomen = people.results.filter(person =>
        person.name.title === "Ms" 
    )
    // console.log(marriedMen);
    // console.log(marriedWomen);
    const marriePeople = [...marriedMen,...marriedWomen, {nome: "Guilherme"}];
    console.log(marriePeople);
}

function doRest(){
    console.log(infiniteSum(1,2));
    console.log(infiniteSum(1,2,1000));
    console.log(infiniteSum(1,2,1000,155,16,25,658,58,94,7,866));
}

function infiniteSum(...numbers){
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

function doDestructuring(){
    const first = people.results[0];

    //Repetitivo
    //const username = first.login.username;
    //const password = first.login.password;

    //Usando o destructuring
    const {username, password} = first.login;

    console.log(username);
    console.log(password);
}

