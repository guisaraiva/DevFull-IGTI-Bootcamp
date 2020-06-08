import { promises } from "fs";
const { readFile, writeFile} = promises;
const EstadosEcidades = []

init();
async function init(){
  try{
          const respCidades = await readFile("Cidades.json");
          const respEstados = await readFile("Estados.json");
          const dataCidade = JSON.parse(respCidades);
          const dataEstado = JSON.parse(respEstados);

         // montando array de Estados com cidades
         // Esta varregando cada Estado, verificando qual Cidade tem atributo Estado igual ao ID.
             for(let contE = 0; contE < dataEstado.length; contE ++) {
               for (let contC = 0; contC < dataCidade.length; contC++){
                  if (dataEstado[contE].ID === dataCidade[contC].Estado){
                    EstadosEcidades.push({
                      "cidade": dataCidade[contC].Nome 
                    })
                }
               }
               //Criar o arquivo com a Sigla de cada Estado
               await writeFile("./cidades/"+dataEstado[contE].Sigla + ".json", JSON.stringify(EstadosEcidades));
               EstadosEcidades.splice(0, EstadosEcidades.length); // Limpo o array a cada iteração
             }

             


        //   //Ordenando o time de forma crescente ou decrescente
        //   times.sort((a, b) =>{
        //     return b.pontuacao - a.pontuacao;
        //   });
  }
    catch (err){
      console.log()
    };
  
}