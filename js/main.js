const endpointDaAPI = "http://localhost:3000/produtos";

async function listaProdutos() {
    const conexao = await fetch(endpointDaAPI);
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function buscaProduto(termoDeBusca) {
    const conexao = await fetch(`${endpointDaAPI}?q=${termoDeBusca}`);
    const conexaoConvertida = conexao.json();
    return conexaoConvertida;
}

async function buscaProdutoPorCategoria(categoria) {
    const conexao = await fetch(`${endpointDaAPI}?q=${termoDeBusca}`);
    const conexaoConvertida = conexao.json();
    return conexaoConvertida;
}

export const conectaApi = {
    listaProdutos,
    buscaProduto,
    buscaProdutoPorCategoria
}