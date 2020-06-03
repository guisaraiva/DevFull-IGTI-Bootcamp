const fs = require('fs');
let files = []


  fs.readFile('./data/Estados.json','utf8', function (err, data){
     let guardaNome = [];
        // console.log(JSON.parse(data))
        let json = JSON.parse(data);
    //json = Object.keys(json.Name);
      for (let i =0; i< json.length; i++){
          guardaNome[i] = json[i].Nome;
      }
      console.log(guardaNome)
   fs.reFile('./data/example.json',json, function(err){
      console.log('Arquivo criado.')
    })
    // // console.log(json.Nome);
   // console.log(nome)
        //  files = {Estado: Nome}
        //  console.log(files)
 })


// fs.readdirSync('./data').forEach(files => {
//   fs.readFile('./data/'+files,'utf8', function (err, data){
  
//     console.log(JSON.parse(data.name))
//   })
// })
  // globalCidades =[];
  
  //  fs.readFile('Trabalho Prático/data/Cidades.json', (err, dataCidades) => {
  //   if (err) throw err;
  //   globalCidades = JSON.parse(dataCidades);
  // });