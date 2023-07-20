import { conectaApi } from "./main.js";
import constroiProduto from "./exibirOsProdutosNaTela.js";

const botaoDePesquisa = document.getElementById("btnCabecalhoPesquisa");
botaoDePesquisa.addEventListener('click', evento => filtrarProdutosPorNome(evento));

async function filtrarProdutosPorNome(evento) {
    evento.preventDefault();

    const inputPesquisa = document.getElementById("inputCabecalhoPesquisa");
    const dadosDePesquisa = inputPesquisa.value;
    const busca = await conectaApi.buscaProduto(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild); //remove vários itens filhos de itens pais!!!
    }

    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="produtos__titulo">Não existem produtos com esse termo</h2>`
    } else {
        busca.forEach(elemento => lista.appendChild(constroiProduto(elemento.imagem, elemento.alt, elemento.titulo, elemento.descricao, elemento.valor)));
    }
    inputPesquisa.value = '';
}