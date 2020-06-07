let globalCidades =[];
let globalEstados = [];
let globalEstadosECidades = [];

async function start(){
  
  await carregaCidades();
  await carregaEstados();
  
  mergeEstadosECidades();
  render();
  
}


async function carregaCidades () {
  const resultado = await fetch('../data/Cidades.json')
  const json = await resultado.json();

  globalCidades = json.map(({Nome, Estado}) => {
    return {
      nomeCidade: Nome,
      correspEstado: Estado,
    }
  })

}

async function carregaEstados () {

  const resultado = await fetch('../data/Estados.json')
  const json = await resultado.json();

  globalEstados = json.map(({ID, Sigla, Nome}) => {
    return {
      idEstado: ID,
      siglaEstado: Sigla,
      nomeEstado: Nome,
    }
  })
}
function mergeEstadosECidades(){
  globalCidades.forEach((cidade)=>{
    const retornaEstado = globalEstados.find((estado)=>{
      return cidade.correspEstado ===  estado.idEstado;
    })
    globalEstadosECidades.push({
      ...cidade, ...retornaEstado})
  })
};

function render() {
  let html = '';
  globalEstadosECidades.forEach(function (resultado){
    html += `
        <li>${resultado.siglaEstado} - ${resultado.nomeEstado} / ${resultado.nomeCidade}</li>
          `
    document.getElementById('resultado').innerHTML = html;
  })
}
start();