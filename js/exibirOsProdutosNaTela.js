import { conectaApi } from "./main.js";

const lista = document.querySelector("[data-lista]");

async function listaProdutos() {
    try {
        const listaApi = await conectaApi.listaProdutos();
        listaApi.forEach(elemento => lista.appendChild(constroiProduto(elemento.imagem, elemento.alt, elemento.titulo, elemento.descricao, elemento.valor)));
    } catch {
        lista.innerHTML = `<h3 class="produtos__titulo">Não foi possível carregar a lista de produtos</h3>`;
    }
}

export default function constroiProduto(imagem, alt, titulo, descricao, valor) {
    const produto = document.createElement("li");
    produto.className = "produto";
    produto.innerHTML = `
                <img src="${imagem}" alt="${alt}"
                class="produto__imagem">
                <div class="produtos__descricao">
                    <h3 class="produto__titulo">${titulo}</h3>
                    <p class="produto__texto">${descricao}</p>
                    <p class="produto__valor">R$ ${valor.toFixed(2)}</p>
                    <button type="button" class="produto__botao" data-btnProduto>Ver
                    mais</button>
                </div>
        `
    return produto;
}

listaProdutos();