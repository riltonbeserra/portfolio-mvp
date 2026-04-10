// Validação do Formulário
const formulario = document.querySelector('#meu-formulario');
formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = document.querySelector('#nome').value;
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
    formulario.reset();
});

// Troca de Tema
const btnTema = document.querySelector('#btn-tema');
btnTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    btnTema.innerText = document.body.classList.contains('dark-theme') ? "Claro" : "Escuro";
});

// Renderização de Projetos
const meusProjetos = [
    { titulo: "Projeto 01 - MVP", descricao: "Primeira versão do meu portfólio profissional.", link: "https://github.com/riltonbeserra/portfolio-mvp" },
    { titulo: "Projeto 02 - Gestão", descricao: "Sistema focado em administração pública.", link: "https://github.com/riltonbeserra/portfolio-react" }
    { titulo: "Projeto 03 - Web", descricao: "Estudos de sistemas para internet.", link: "https://portfolio-react-w5k1.vercel.app/" }
];

const container = document.querySelector('.projetos-container');
meusProjetos.forEach(projeto => {
    container.innerHTML += `
        <article class="card-projeto">
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
            <a href="${projeto.link}" style="color: var(--primary-color); font-weight: bold;">Ver no GitHub</a>
        </article>
    `;
});
