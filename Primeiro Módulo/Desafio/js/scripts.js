window.addEventListener('load', start)



function start(){

  const btnPesquisaUsuario = document.querySelector("#btnPesquisaUsuario")
  btnPesquisaUsuario.addEventListener("click", event => {
  event.PreventDefault();
})
const url = "https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo";
fetch(url).then(response =>{
  return response.json();
}).then(data=>{
  if(data.erro)
  {
  alert("O CEP DIGITADO ESTÁ INVÁLIDO");
  return ;
  }
  atribuirCampos(data);
})
}

function atribuirCampos(data){
  const picture = document.querySelector("#picture");
  picture.value = data.picture;
}










function buscaDadosApi(){
  fetch("https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo")
}