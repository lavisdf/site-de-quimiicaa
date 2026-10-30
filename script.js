//ACORDEÃO (ABRIR E FECHAR CONTEÚDOS)
document.querySelectorAll(".titulo-acordeao").forEach(botao => {
    botao.addEventListener("click", () => {
        let conteudo = botao.nextElementSibling; //pegue o próximo elemento
        let simbolo = botao.querySelector("span");

        // Alterna entre block e none usando operador ternário
        conteudo.style.display = conteudo.style.display === "block" ? "none" : "block";
        simbolo.textContent = conteudo.style.display === "block" ? "−" : "+";
    });
});

//LINHA DO TEMPO
function mostrarAno(id, botao) {
    // Esconde todos os eventos de uma vez só
    document.querySelectorAll(".evento").forEach(ev => ev.style.display = "none");
    
    // Remove a classe 'ativo' de todos os botões de anos
    document.querySelectorAll(".anos button").forEach(btn => btn.classList.remove("ativo"));

    // Mostra o evento selecionado e ativa o botão atual
    let eventoSelecionado = document.getElementById(id);
    eventoSelecionado.style.display = "block";
    botao.classList.add("ativo");

    // Rolar suavemente até o marco
    eventoSelecionado.scrollIntoView({ behavior: "smooth", block: "center" });
}

//EIXO E ALIADOS
function mostrarBlocoGuerra(id) {
    let conteudo = document.getElementById(id);
    let estavaAberto = conteudo.style.display === "block";

    // Fecha todos os blocos de guerra em uma linha
    document.querySelectorAll(".conteudo-guerra").forEach(bloco => bloco.style.display = "none");

    // Só reabre se ele já não estivesse aberto antes
    if (!estavaAberto) conteudo.style.display = "block";
}

//QUIZ (DADOS E LÓGICA)
const perguntas = [
    {
        pergunta: "O cloreto de sódio (NaCl) e o sulfato de cálcio (CaSO4) são exemplos de sais. Quimicamente, um sal pode ser definido como um composto iônico que:",
        alternativas: ["Libera exclusivamente íons H+ em solução aquosa.", "É formado pela união de cátions (exceto H+) e ânions (exceto OH-).", "Possui apenas ligações covalentes em sua estrutura molecular.", "Resulta sempre da reação entre dois ácidos fortes."],
        correta: 1,
        explicacao: "Os sais são compostos iônicos formados por cátions diferentes de H⁺ e ânions diferentes de OH⁻."
    },
    {
        pergunta: "Em condições normais de temperatura e pressão (CNTP), os sais apresentam propriedades físicas bem definidas. Assinale a alternativa que descreve corretamente uma característica dos sais:",
        alternativas: ["São ótimos condutores de eletricidade no estado sólido.", "Apresentam baixos pontos de fusão e de ebulição.", "São sólidos cristalinos que conduzem corrente elétrica quando fundidos ou dissolvidos em água.", "Têm baixa densidade."],
        correta: 2,
        explicacao: "Os sais conduzem eletricidade quando estão fundidos ou dissolvidos em água, pois seus íons ficam livres para se movimentar."
    },
    {
        pergunta: "O bicarbonato de sódio (NaHCO₃) é classificado como qual tipo de sal?",
        alternativas: ["Neutro.", "Básico (ou hidroxissal).", "Ácido (ou hidrogenossal).", "Duplo ou misto."],
        correta: 2,
        explicacao: "O bicarbonato de sódio é um sal ácido porque apresenta hidrogênio ionizável em sua fórmula (NaHCO₃)."
    },
    {
        pergunta: "O composto Al(OH)Cl2 é formado através da neutralização parcial dos grupos hidroxila do hidróxido de alumínio pelo ácido clorídrico. Esse composto pertence à categoria dos:",
        alternativas: ["Hidroxissais (ou sais básicos).", "Hidrogenossais (ou sais ácidos).", "Sais hidratados.", "Sais puros e neutros."],
        correta: 0,
        explicacao: "O Al(OH)Cl₂ é um hidroxissal, pois apresenta o grupo hidroxila (OH) em sua composição."
    },
    {
        pergunta: "A regra de nomenclatura dos sais depende diretamente do nome do ácido que lhe deu origem. Se o ácido clorídrico (HCl) reagir totalmente com o hidróxido de sódio (NaOH), o sal formado (NaCl) receberá o nome de:",
        alternativas: ["Perclorato de sódio.", "Nitrato de sódio", "Cloreto de sódio", "Carbonato de sódio"],
        correta: 2,
        explicacao: "O NaCl é chamado de cloreto de sódio, pois o ácido clorídrico termina em “-ídrico”, formando um sal terminado em “-eto”."
    },
    {
        pergunta: "O sal NaNO3 é amplamente utilizado na indústria de conservantes de alimentos e fertilizantes (conhecido como Salitre do Chile). Sabendo que ele deriva do ácido nítrico (HNO3), seu nome oficial é:",
        alternativas: ["Nitrito de sódio.", "Nitrato de sódio.", "Nitreto de sódio.", "Pernitrato de sódio."],
        correta: 1,
        explicacao: " O NaNO₃ é chamado de nitrato de sódio, pois deriva do ácido nítrico (HNO₃)."
    },
    {
        pergunta: "A reação química clássica que dá origem a um sal neutro e água é chamada de reação de neutralização. Qual das equações abaixo representa corretamente a formação do sulfato de sódio (Na2SO4)?-",
        alternativas: ["2 NaOH + H₂SO₄ → Na₂SO₄ + 2 H₂O", "NaOH + H₂SO₄ → NaHSO₄ + H₂O", "Na₂SO₄ + H₂O → 2 NaOH + H₂SO₄", "NaCl + H₂SO₄ → NaHSO₄ + HCl"],
        correta: 0,
        explicacao: "O hidróxido de sódio reage com o ácido sulfúrico, formando sulfato de sódio e água: 2 NaOH + H₂SO₄ → Na₂SO₄ + 2 H₂O."
    },
    {
        pergunta: "O 'vitríolo azul' é o nome vulgar do sulfato de cobre II penta-hidratado, cuja fórmula química é CuSO4·5H2O. A expressão 'penta-hidratado' significa que:",
alternativas: [
  "O sal foi dissolvido em exatamente 5 litros de água.",
  "Existem 5 moléculas de água associadas a cada unidade do sal em seu retículo cristalino.",
  "O sal produz 5 gases diferentes em contato com a água.",
  "O composto possui 5 átomos de hidrogênio em sua molécula principal."
],
correta: 1,
explicacao: "Penta-hidratado significa que cada unidade do sal cristalino está associada a cinco moléculas de água (CuSO₄·5H₂O)."
    },
    {
        pergunta: "Alguns metais podem formar cátions com cargas diferentes (Nox variável), como o ferro, que pode ser Fe2+ ou Fe3+. O composto FeCl3 é muito utilizado no tratamento de água. O nome correto desse sal é:",
        alternativas: ["Cloreto de ferro.", "Cloreto de ferro (II).", "Cloreto de ferro (III).", "Clorato de ferro comum."],
        correta: 2,
        explicacao: "O FeCl₃ é chamado de cloreto de ferro (III), pois o ferro apresenta número de oxidação +3."
    },
    {
    pergunta: "O gesso hospitalar e de construção civil, o mármore das pias e o sal de cozinha são compostos formados por sais. Assinale a alternativa que associa corretamente a fórmula química à sua aplicação prática diária:",
    alternativas: [
        "NaCl - Utilizado na fabricação de gesso e giz escolar.",
        "CaCO₃ - Utilizado na fabricação de mármore e calcário.",
        "KNO₃ - Utilizado na fabricação de gesso e giz escolar.",
        "HCl - Utilizado em processos de limpeza."
    ],
    correta: 1,
    explicacao: "O carbonato de cálcio (CaCO₃) é o principal componente do mármore e está presente no calcário."
}
];

let perguntaAtual = 0;
let pontos = 0;

function mostrarPergunta() {
    let pergunta = perguntas[perguntaAtual];
    
    document.getElementById("progresso").textContent = `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;
    document.getElementById("pergunta").textContent = pergunta.pergunta;
    
    let alternativasContainer = document.getElementById("alternativas");
    alternativasContainer.innerHTML = ""; // Limpa anterior

    pergunta.alternativas.forEach((alternativa, indice) => {
        let botao = document.createElement("button");
        botao.textContent = alternativa;
        botao.onclick = () => verificarResposta(indice);
        alternativasContainer.appendChild(botao);
    });

    document.getElementById("feedback").textContent = "";
    document.getElementById("proxima").style.display = "none";
}

function verificarResposta(indice) {
    let pergunta = perguntas[perguntaAtual];
    let botoes = document.querySelectorAll("#alternativas button");

    botoes.forEach(btn => btn.disabled = true);

    if (indice === pergunta.correta) {
        botoes[indice].classList.add("correta");
        document.getElementById("feedback").textContent = `Resposta correta! ${pergunta.explicacao}`;
        pontos++;
    } else {
        botoes[indice].classList.add("errada");
        botoes[pergunta.correta].classList.add("correta");
        document.getElementById("feedback").textContent = `Resposta incorreta. ${pergunta.explicacao}`;
    }

    document.getElementById("proxima").style.display = "block";
}

function proximaPergunta() {
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    let msg = pontos === perguntas.length ? "Excelente! Você acertou todas!" : 
              pontos >= 7 ? "Muito bom! Ótimo conhecimento." : "Vale a pena revisar o conteúdo.";

    document.getElementById("quiz-container").innerHTML = `
        <h3>Resultado final</h3>
        <p>Você acertou <strong>${pontos}</strong> de <strong>${perguntas.length}</strong> questões.</p>
        <p>${msg}</p>
        <button id='refazer' onclick='refazerQuiz()'>Refazer Quiz</button>
    `;
}

function refazerQuiz() {
    perguntaAtual = 0;
    pontos = 0;
    document.getElementById("quiz-container").innerHTML = `
        <p id="progresso"></p>
        <h3 id="pergunta"></h3>
        <div id="alternativas"></div>
        <p id="feedback"></p>
        <button id="proxima" onclick="proximaPergunta()">Próxima pergunta</button>
    `;
    mostrarPergunta();
}

// Inicialização automática do Quiz
if (document.getElementById("quiz-container")) {
    mostrarPergunta();
}
