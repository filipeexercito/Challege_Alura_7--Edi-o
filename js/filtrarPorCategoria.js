import { conectaApi } from "./main.js";
import constroiProduto from "./exibirOsProdutosNaTela.js";

const botoes = document.querySelectorAll('.categorias__botao');
botoes.forEach(botao => { botao.addEventListener('click', filtrarProdutos) });

async function filtrarProdutos() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    const listaApi = await conectaApi.listaProdutos();
    const produtosFiltrados = listaApi.filter(produto => produto.categoria == categoria);

    const lista = document.querySelector("[data-lista]");
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild); //remove vários itens filhos de itens pais!!!
    }

    produtosFiltrados.forEach(elemento => lista.appendChild(constroiProduto(elemento.imagem, elemento.alt, elemento.titulo, elemento.descricao, elemento.valor)));
}