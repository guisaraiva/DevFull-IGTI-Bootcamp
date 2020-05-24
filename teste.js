function naipeDeTruco(naipe){
  var resultado =[]
  for (var i = 0; i <= 12; i++){
      resultado.push(i + " de " + naipe)
      if(i === 0 || i === 8 || i === 9){
        resultado.pop()
      }
  }
  return resultado
}
console.log(naipeDeTruco("copas"))