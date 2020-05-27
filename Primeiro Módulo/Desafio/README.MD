Os alunos deverão desempenhar as seguintes atividades:
    Na carga inicial da aplicação, obter os dados de: https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo (Links para um site externo.)
    Carregar os dados dos usuários em um array.
    Permitir a filtragem de usuários através de um input com interação do usuário.
    O usuário poderá filtrar dados quando digitar pelo menos um caractere no input.
    O usuário poderá filtrar os dados tanto digitando "Enter" quanto clicando no botão correspondente, conforme imagens mais abaixo.
    Montar dois painéis.
    No painel da esquerda, listar os usuários filtrados.
    No painel da direita, calcular e mostrar algumas estatísticas sobre esses usuários, conforme imagens abaixo.

Dicas:

  Após executar a requisição à API, filtre somente os dados necessários ao app. Esses são: name (first + last), picture, dob.age e gender.
    Monitore o input com o evento "keyup".
    Filtrem os dados a partir de qualquer posição no nome, ou seja, o nome "Brenda" (caso exista na API) deve ser retornado se o filtro for "a".
    Para filtrar, considere todo o texto em minúsculas. Assim, o filtro "E" trará tanto "Elena" quanto "Helena", caso existam na API.
    Dê um console.log() nos dados do evento de digitação e você descobrirá como "cercar" a tecla "Enter".
    Foque mais no código JavaScript e menos na interface. O mais importante é que o filtro e os cálculos estejam corretos.
    Quebre o seu código em funções bem definidas.
    Será necessária uma boa dose de manipulação manual do DOM. Isso pode ser feito tanto com innerHTML + string (recomendo a utilização de template literals) ou com os comandos document.createElement, appendChild etc.
    Se quiserem fazer uma interface semelhante à das imagens, utilizem o Materialize (https://materializecss.com (Links para um site externo.)).
    Não deixem de assistir o vídeo desse desafio, onde demonstro a aplicação em funcionamento e dou mais algumas dicas.

 
