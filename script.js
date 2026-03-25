const meusProjetos = [
    { nome: "Sistema de Gestão", descricao: "Projeto focado em automação de processos." },
    { nome: "Landing Page Marketing", descricao: "Página otimizada para conversão digital." },
    { nome: "MVP de Portfólio", descricao: "Primeira versão do meu portfólio profissional." }
];

const container = document.getElementById('lista-projetos');

meusProjetos.forEach(projeto => {
    const card = document.createElement('div');
    card.classList.add('projeto-card');
    card.innerHTML = `
        <h3>${projeto.nome}</h3>
        <p>${projeto.descricao}</p>
    `;
    container.appendChild(card);
});