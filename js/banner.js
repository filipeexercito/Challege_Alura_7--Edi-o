// a função alterarSrcImagem() é responsável por verificar o tamanho da tela usando as media queries min-width para tablet e desktop. Dependendo da resolução da tela, o atributo src das imagens será alterado para a imagem correspondente.
function alterarSrcImagem() {
    const imagens = document.querySelectorAll("[data-imagem]");
    const mediaQueryTablet = window.matchMedia('(min-width: 768px)');
    const mediaQueryDesktop = window.matchMedia('(min-width: 1440px)');

    if (mediaQueryDesktop.matches) {
        imagens.forEach(imagem => {
            const novoSrc = obterNovoSrc(imagem.src, '1440');
            imagem.src = novoSrc;
        })
    } else if (mediaQueryTablet.matches) {
        imagens.forEach(imagem => {
            const novoSrc = obterNovoSrc(imagem.src, '0768');
            imagem.src = novoSrc;
        })
    } else {
        imagens.forEach(imagem => {
            const novoSrc = obterNovoSrc(imagem.src, '0375');
            imagem.src = novoSrc;
        })
    }
}

// A função obterNovoSrc recebe a string (src da imagem) e a resolução correspondente (em quatro dígitos) como argumentos. Ela encontra o índice do último ponto na string usando lastIndexOf('.'). Em seguida, subtrai 4 do índice para obter o índice inicial dos quatro últimos caracteres desejados. Usando substring, a função divide a string em duas partes: o prefixo antes dos quatro últimos caracteres e o sufixo após o último ponto. Em seguida, concatena o prefixo, os quatro caracteres desejados (no caso, a resolução condicionada pelo if) e o sufixo para formar a nova string (nova src da imagem).
function obterNovoSrc(string, resolucao) {
    const lastIndex = string.lastIndexOf('.');
    const startIndex = lastIndex - 4;
    const prefix = string.substring(0, startIndex);
    const sufix = string.substring(lastIndex);
    const novaString = prefix + `${resolucao}` + sufix;
    return novaString;
}

alterarSrcImagem();

// Adicionar o evento de resize para atualizar as imagens quando o tamanho da tela for alterado!
window.addEventListener('resize', alterarSrcImagem);