window.addEventListener('load', function() {
  const timer = document.querySelector('#timer')
  let count = 0;
  
  // Bloco do setInterval:
  // posterga e repete as execuções a cada X milissegundos.
  const interval = setInterval(()=>{
    timer.textContent = ++count;
    
    // Bloco para parar o setInterval. 
    // Ele precisa de um comando para encerrar o ciclo.
    if(count === 10) {
      this.clearInterval(interval);
      return;
    }
    
    if(count % 5 === 0 ){
      this.setTimeout(()=>{
        timer.textContent = count + ',5';
      },500);
    }
  },1000);
});

