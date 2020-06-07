import express from "express";
import timesRouter from "./routes/times.js";
import { promises } from "fs";
const { readFile, writeFile} = promises;
const times = []

init();
//Criando instância do express
const app = express();
// Informando ao express para utilizar json
app.use(express.json());

app.use("/times", timesRouter);

//Subindo o servidor
app.listen(3000, ()=>{
  console.log("API started")
})

async function init(){
  try{
          const resp = await readFile("2003.json");
          const data = JSON.parse(resp);
         // montando array de times
          data[0].partidas.forEach(partida =>{
            times.push({ time: partida.mandante, pontuacao: 0});
            times.push({ time: partida.visitante, pontuacao: 0});
          })

        data.forEach(rodada =>{
          rodada.partidas.forEach(partida =>{
              const indexMandante = times.findIndex(item => item.time === partida.mandante);
              const indexVisitante = times.findIndex(item => item.time === partida.visitante);
              let timeMandante = times[indexMandante];
              let timeVisitante = times[indexVisitante];
        
              if (partida.placar_mandante > partida.placar_visitante) {
                timeMandante.pontuacao += 3;
                times[indexMandante] = timeMandante;
              } else if (partida.placar_visitante > partida.placar_mandante) {
                timeVisitante.pontuacao += 3;
                times[indexVisitante] = timeVisitante;
              } else {
                timeMandante.pontuacao += 1;
                timeVisitante.pontuacao += 1;
                times[indexMandante] = timeMandante;
                times[indexVisitante] = timeVisitante;
              }
        
            })

          });
          
          //Ordenando o time de forma crescente ou decrescente
          times.sort((a, b) =>{
            return b.pontuacao - a.pontuacao;
          });

          await writeFile("times.json", JSON.stringify(times));
  }
   catch (err){
    console.log()
  };
}
