
let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Por que o livro tem o nome de Extraordinário?",
    alternativaA : "Porque a doença dele é extraordinariamente rara.",
    alternativaB : "Porque a mãe e o pai de August acham-no extraordinário.",
    alternativaC : "Por que ele vive com pessoas extraordinárias.",
    correta      : "Porque a mãe e o pai de August acham-no extraordinário.",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "De quem August ganhou o seu capacete de astronauta?",
    alternativaA : "Miranda",
    alternativaB : "Cristopher",
    alternativaC : "Scheila",
    correta      : "Miranda",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Quem era o diretor da escola de August?",
    alternativaA : "Dire Dani",
    alternativaB : "Sr. Buzanfa",
    alternativaC : "Sr. Brown",
    correta      : "Sr. Buzanfa",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Quais são os nomes das três crianças que apresentam a escola para August?",
    alternativaA : "Jack Will, Summer e Reid.",
    alternativaB : "Jack Will, Julian e Charlotte.",
    alternativaC : "Charlotte, Julian e Via.",
    correta      : "Jack Will, Julian e Charlotte.",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Qual foi o preceito do Sr. Browne em setembro, no primeiro dia?",
    alternativaA : "Entre estar certo e ser gentil, escolha ser gentil.",
    alternativaB : "Não mude sua vida, mude de amigos.",
    alternativaC : "Insista, persista e nunca desista.",
    correta      : "Entre estar certo e ser gentil, escolha ser gentil.",
}

const q6 = {
    numQuestao   : 6,
    pergunta     : "Qual a matéria preferida de Auggie?",
    alternativaA : "Ciências",
    alternativaB : "Arte",
    alternativaC : "Matemática",
    correta      : "Ciências",
}

const q7 = {
    numQuestao   : 7,
    pergunta     : "Os colegas de August tinham medo tocá-lo por medo de pegar a 'peste negra da feiura' como...",
    alternativaA : "Toque do Mortadela em o Diário de um banana.",
    alternativaB : "Toque do Queijo em o Diário de um banana.",
    alternativaC : "Toque do Calabresa em o Diário de um banana.",
    correta      : "Toque do Queijo em o Diário de um banana.",
}

const q8 = {
    numQuestao   : 8,
    pergunta     : "A trança que August tinha fazia referência a...",
    alternativaA : "Padawan",
    alternativaB : "Harry Potter",
    alternativaC : "Chewbaca",
    correta      : "Padawan",
}

const q9 = {
    numQuestao   : 9,
    pergunta     : "Auggie costumava observar os sapatos das pessoas porque…",
    alternativaA : "Adorava moda.",
    alternativaB : "Achava que o sapato revelava como a pessoa era",
    alternativaC : "Fazia coleção de sapatos",
    correta      : "Achava que o sapato revelava como a pessoa era",
}

const q10 = {
    numQuestao   : 10,
    pergunta     : "Qual é o nome do filme que August foi assistir no acampamento?",
    alternativaA : "O mágico de Oz",
    alternativaB : "A noiva fantasma",
    alternativaC : "Titanic",
    correta      : "O mágico de Oz",
}

const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        pontos += 10 // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 2000)
}