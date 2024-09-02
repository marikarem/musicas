const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "muitas pessoas tem diferentes gostos musicais,o estilo musical dominante no Brasil, é o sertanejo, você gosta desse estilo?",
        alternativas: [
            {
                texto: "SIM!",
                afirmacao: " "
            },
            {
                texto: "NÃO!",
                afirmacao: " "
            }
        ]
    },
    {
        enunciado: "Vamos fazer algumas perguntas sobre musicas para você. Quem você acha que é o REI DO POP?",
        alternativas: [
            {
                texto: "Michael Jackson",
                afirmacao: " "
            },
            {
                texto: "Freddie Mercury",
                afirmacao: " "
            }
        ]
    },
    {
        enunciado: "Se você escolheu Michael Jackson, você está correto!o Freddie Mercury é o rei do rock. Continuando sobre cantores, você sabe quem é um dos mais famosos do brasil?",
        alternativas: [
            {
                texto: "Anitta",
                afirmacao: " "
            },
            {
                texto: "Marília Mendonça",
                afirmacao: " "
            }
        ]
    },
    {
        enunciado: " Você esta correto nas duas opções, Anitta transita entre pop e funk, e Marília Mendonça no sertanejo. Mudando um pouco agora, quem você acha que é o mais famoso no forró?",
        alternativas: [
            {
                texto: "Wesley Safadão.",
                afirmacao: " "
            },
            {
                texto: " Xand Avião",
                afirmacao: " "
            }
        ]
    },
    {
        enunciado: " Bom se você colocou Wesley Safadão você acertou! O que achou das curiosidades dadas sobre o mundo da musica, você gostou? ",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: " "
            },
            {
                texto: "Não",
                afirmacao: " "
            }
        ]
    },
    

];



let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Então foi essas as pequenas informações sobre o mundo da musica. Muito obrigado!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();