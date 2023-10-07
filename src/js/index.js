/*
O que vamos fazer? Quando passar o mouse em cima do personagem  na lista temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que está sendo selecionado.

OBJETIVO1: Quando passar o mouse em cima do persoangem da lista, devemos selecioná-lo.
Passo1: Pegar os personagens no js para poder verificar quando o usuário passar o mouse em cima deles.

Passo2: Adicionar a classe selecionado no personagem que o usuário passar o mouse.

Passo3: Verfificar se já exite um personagem selecionado, se sim, devemos remover a seleção dele.


OBJETIVO2: Quando passar o mouse em cima do personagem da lista, trocar a imagem, o nome e a descrição do personagem grande.
Passo1: Pegar o elemento  do personagem grande para adicionar as infomações nele.
PAsso2: Alterar a imagem do persoangem grande.
Passo3: Alterar o nome do personagem grande.
PAsso4: Alterar a descrição do personagem grande.
 */
// OBJETIVO1: Quando passar o mouse em cima do persoangem da lista, devemos selecioná-lo.
// Passo1: Pegar os personagens no js para poder verificar quando o usuário passar o mouse em cima deles

const personagens = document.querySelectorAll('.personagem');


// Passo2: Adicionar a classe selecionado no personagem que o usuário passar o mouse.
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        
        // Passo3: Verfificar se já exite um personagem selecionado, se sim, devemos remover a seleção dele.
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado')

        // OBJETIVO2: Quando passar o mouse em cima do personagem da lista, trocar a imagem, o nome e a descrição do personagem grande.

        // Passo1: Pegar o elemento  do personagem grande para adicionar as infomações nele.
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        // PAsso2: Alterar a imagem do persoangem grande.
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        // Passo3: Alterar o nome do personagem grande.
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        // PAsso4: Alterar a descrição do personagem grande.
        const descriçãoPersonagem = document.getElementById('descricao-personagem');
        descriçãoPersonagem.innerText = personagem.getAttribute('data-description');

    })  
})