
const curriculo = {

    nome: "Gustavo La Salvia Zocchio",

    titulo: "Estudante de Análise e Desenvolvimento de Sistemas",

    contatos: [
        {
            texto: "✉ gustavozocchiolasalvia@gmail.com",
            link: "mailto:gustavozocchiolasalvia@gmail.com"
        },
        {
            texto: "☎ (11) 93945-8982",
            link: "tel:+5511939458982"
        },
        {
            texto: "📍 Suzano - SP",
            link: null
        },
        {
            texto: "GitHub",
            link: "https://github.com/guestkaibola"
        }
    ],

    resumo: `Estudante do segundo ano de Análise e Desenvolvimento
    de Sistemas na UniPiaget, com conhecimentos básicos em Java,
    JavaScript, HTML e CSS. Utiliza o GitHub para organizar e
    compartilhar trabalhos acadêmicos. Busca uma oportunidade
    de estágio para desenvolver habilidades técnicas, adquirir
    experiência profissional e contribuir com projetos de
    desenvolvimento de software.`,

    formacao: [
        {
            instituicao: "UniPiaget",
            curso: "Análise e Desenvolvimento de Sistemas",
            nivel: "Ensino Superior",
            periodo: "2026 - Atual",
            descricao: "Cursando o segundo ano de Análise e Desenvolvimento de Sistemas."
        },
        {
            instituicao: "Ensino Médio",
            curso: "Ensino Médio Completo",
            nivel: "",
            periodo: "",
            descricao: "Ensino Médio concluído."
        }
    ],

    habilidades: {
        tecnicas: [
            "Java",
            "JavaScript",
            "HTML",
            "CSS"
        ],

        ferramentas: [
            "GitHub"
        ],

        comportamentais: [
            "Aprendizado contínuo",
            "Organização",
            "Trabalho em equipe"
        ]
    },

    projetos: [
        {
            nome: "Trabalhos acadêmicos",
            periodo: "2026 - Atual",
            descricao: `Desenvolvimento e organização de atividades
            e trabalhos realizados durante a graduação, utilizando
            o GitHub para armazenar e compartilhar arquivos e códigos.`,
            tecnologias: [
                "GitHub",
                "Java",
                "JavaScript",
                "HTML",
                "CSS"
            ],
            link: "https://github.com/guestkaibola"
        }
    ],

    informacoes: [
        {
            titulo: "Disponibilidade",
            descricao: "Em busca da primeira oportunidade profissional na área de tecnologia."
        }
    ]

};


// Exibir informações pessoais
document.getElementById("nome").textContent = curriculo.nome;

document.getElementById("titulo").textContent = curriculo.titulo;


// Exibir contatos
const contatos = document.getElementById("contatos");

curriculo.contatos.forEach(contato => {

    const elemento = document.createElement("span");

    if (contato.link) {

        const link = document.createElement("a");

        link.href = contato.link;
        link.textContent = contato.texto;

        if (contato.link.startsWith("http")) {
            link.target = "_blank";
            link.rel = "noopener noreferrer";
        }

        elemento.appendChild(link);

    } else {

        elemento.textContent = contato.texto;

    }

    contatos.appendChild(elemento);

});


// Exibir resumo
document.getElementById("resumo").textContent =
    curriculo.resumo;


// Exibir formação acadêmica
const formacao = document.getElementById("formacao");

curriculo.formacao.forEach(item => {

    const div = document.createElement("div");

    div.className = "item-formacao";

    div.innerHTML = `
        <span class="periodo">${item.periodo}</span>

        <h4>${item.instituicao}</h4>

        <p>
            ${item.curso}
            ${item.nivel ? "| " + item.nivel : ""}
        </p>

        <p>${item.descricao}</p>
    `;

    formacao.appendChild(div);

});


// Exibir habilidades
const habilidades = document.getElementById("habilidades");

const grupos = [
    {
        titulo: "Técnicas",
        itens: curriculo.habilidades.tecnicas
    },
    {
        titulo: "Ferramentas",
        itens: curriculo.habilidades.ferramentas
    },
    {
        titulo: "Comportamentais",
        itens: curriculo.habilidades.comportamentais
    }
];

grupos.forEach(grupo => {

    const div = document.createElement("div");

    div.className = "grupo-habilidade";

    const titulo = document.createElement("h4");

    titulo.textContent = grupo.titulo;

    const lista = document.createElement("div");

    lista.className = "lista-habilidades";

    grupo.itens.forEach(item => {

        const habilidade = document.createElement("span");

        habilidade.className = "habilidade";

        habilidade.textContent = item;

        lista.appendChild(habilidade);

    });

    div.appendChild(titulo);
    div.appendChild(lista);

    habilidades.appendChild(div);

});


// Exibir projetos
const projetos = document.getElementById("projetos");

curriculo.projetos.forEach(projeto => {

    const div = document.createElement("div");

    div.className = "item-projeto";

    const tecnologias = projeto.tecnologias.join(", ");

    div.innerHTML = `
        <span class="periodo">${projeto.periodo}</span>

        <h4>${projeto.nome}</h4>

        <p>${projeto.descricao}</p>

        <p>
            <strong>Tecnologias:</strong>
            ${tecnologias}
        </p>

        <p>
            <strong>GitHub:</strong>
            <a href="${projeto.link}"
               target="_blank"
               rel="noopener noreferrer">
                Acessar repositório
            </a>
        </p>
    `;

    projetos.appendChild(div);

});


// Exibir informações adicionais
const informacoes = document.getElementById("informacoes");

curriculo.informacoes.forEach(item => {

    const div = document.createElement("div");

    div.className = "item-informacao";

    div.innerHTML = `
        <h4>${item.titulo}</h4>

        <p>${item.descricao}</p>
    `;

    informacoes.appendChild(div);

});
