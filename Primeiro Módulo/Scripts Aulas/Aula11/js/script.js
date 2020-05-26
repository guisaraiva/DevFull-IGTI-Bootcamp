//console.log(people);
window.addEventListener('load', ()=>{
    doMap();
    doFilter();
    doForEach();
    doReduce();
    doFind();
    doSome();
    doEvery();
    doSort();
});
// Realiza o mapeamente do array e retorna os dados 
// em um novo array contendo apenas os dados passados no parâmetro.
function doMap(){
    const nameEmailArray = people.results.map(person =>{
        return {
            name: person.name,
            email: person.email
        };
    });
    //console.log(nameEmailArray);
    return nameEmailArray;
};
// Retornar os dados filtrados de acordo com as informações passadas no parâmetro.
function doFilter(){
    const olderThan50 = people.results.filter(person => {
        return person.dob.age > 50;
    });
    //console.log(olderThan50);
};

function doForEach() {
    const mappedPeople = doMap();

    mappedPeople.forEach(person => {
        person.nameSize = 
        person.name.title.length + 
        person.name.first.length + 
        person.name.last.length;
    });
    //console.log(mappedPeople);
};
// Retorna o somatório de um determinado campo. Retornando os dados de acordo com o parâmetro.
function doReduce(){
    const totalAges = people.results.reduce((accumulator, current) =>{
        return accumulator + current.dob.age;
    }, 0);
    //console.log(totalAges);

    // let sumAges = 0;
    // for( let i =0; i < people.results.length; i++){
    //     var current = people.results[i];
    //     sumAges += current.dob.age;
    // }
    // console.log(sumAges);
}
// Retorna a primeira ocorrência de acordo com o parâmetro do return.
function doFind(){
    const found = people.results.find(person => { 
        return person.location.state === "Minas Gerais";
    });

    //console.log(found);
}
// Retorna um boleano true ou false
function doSome(){
    const foundSome = people.results.some(person =>{
        return person.location.state === "Amazonas";
    });

   // console.log(foundSome);
}
// Retorna todos os dados de acordo com o parâmetro.. o return é um boleano.
function doEvery(){
    const every = people.results.every(person =>{
        return person.nat === "BR";
    })
    //console.log(every);
}

function doSort() {
    const mappedNames = people.results.map(person => {
        return {
            name: person.name.first
        }
    }).filter(person =>{
        return person.name.startsWith('A');
    }).sort((x, y) => {
        //return x.name.localeCompare(y.name);
        return x.name.length - y.name.length;
        //return y.name.length - x.name.length;
    }) ;
    console.log(mappedNames);
}