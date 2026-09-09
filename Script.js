// Rotação de Frases
let indiceFraseAtual = 0;
const frases = document.querySelectorAll('.card-frase');

function atualizarFrase() {
    frases.forEach((f, i) => {
        f.classList.toggle('ativa', i === indiceFraseAtual);
    });
}

function mudarFrase(direcao) {
    indiceFraseAtual += direcao;
    if (indiceFraseAtual < 0) indiceFraseAtual = frases.length - 1;
    if (indiceFraseAtual >= frases.length) indiceFraseAtual = 0;
    atualizarFrase();
}

// Rotação automática suave (8 segundos na tela)
setInterval(() => mudarFrase(1), 8000);

// Controle da Seção "Sobre o Site/Projeto"
function abrirSobre() {
    document.getElementById('tela-sobre').classList.add('ativo');
}

function fecharSobre() {
    document.getElementById('tela-sobre').classList.remove('ativo');
}

// Navegação de Telas
function iniciarChecklist() {
    document.getElementById('tela-inicio').classList.remove('ativa');
    document.getElementById('tela-checklist').classList.add('ativa');
}

function voltarInicio() {
    document.getElementById('tela-checklist').classList.remove('ativa');
    document.getElementById('tela-inicio').classList.add('ativa');
}

// Troca de Categorias do Checklist
function trocarCategoria(nomeCat, botao) {
    document.querySelectorAll('.btn-categoria').forEach(b => b.classList.remove('ativa'));
    document.querySelectorAll('.lista-categoria').forEach(l => l.classList.remove('ativa'));

    botao.classList.add('ativa');
    document.getElementById(`cat-${nomeCat}`).classList.add('ativa');
}

// Efeito e Validação de Conclusão do Checklist
function toggleItem(checkbox) {
    const item = checkbox.parentElement;
    if (checkbox.checked) {
        item.classList.add('concluido');
    } else {
        item.classList.remove('concluido');
    }

    verificarConclusaoCategoria();
}

function verificarConclusaoCategoria() {
    const listaAtiva = document.querySelector('.lista-categoria.ativa');
    if (!listaAtiva) return;

    const checkboxes = listaAtiva.querySelectorAll('input[type="checkbox"]');
    const marcados = listaAtiva.querySelectorAll('input[type="checkbox"]:checked');

    if (checkboxes.length > 0 && checkboxes.length === marcados.length) {
        document.getElementById('modal-conclusao').classList.add('ativo');
    }
}

function fecharModal() {
    document.getElementById('modal-conclusao').classList.remove('ativo');
}