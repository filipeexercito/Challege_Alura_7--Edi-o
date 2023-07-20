const modalProduto = document.getElementById("modal__produto");
const modalNewsletter = document.getElementById("modal__newsletter");
const formularioNewsletter = document.getElementById("novoEmail");

const lista = document.querySelector("[data-lista]");

lista.addEventListener("click", function (event) {
    const btn = event.target.closest("[data-btnProduto]");
    if (btn) {
        // O botão foi clicado
        const produto = btn.closest(".produto");
        // Obtenha informações específicas do produto
        const titulo = produto.querySelector(".produto__titulo").textContent;
        const valor = produto.querySelector(".produto__valor").textContent;
        const descricao = produto.querySelector(".produto__texto").textContent;
        const imagem = produto.querySelector(".produto__imagem");
        const srcImagem = imagem.getAttribute("src");
        const altImagem = imagem.getAttribute("alt");

        // Abra a modal e exiba as informações do produto
        criaModal(srcImagem, altImagem, titulo, descricao, valor);
        // Implemente o código para abrir a modal e exibir as informações do produto
    }
});

function criaModal(src, alt, titulo, descricao, valor) {
    constroiModalProduto(src, alt, titulo, descricao, valor);
    abreModal(modalProduto);
    fechaModal(modalProduto);
}

formularioNewsletter.addEventListener("submit", (evento) => {
    evento.preventDefault();
    abreModal(modalNewsletter);
    fechaModal(modalNewsletter);
})

function abreModal(modal) {
    modal.classList.toggle("modal-active");
    modal.showModal();
}

function fechaModal(modal) {
    const botaoFechaModal = modal.querySelector(".modal__cabecalho__botaoFechar");
    botaoFechaModal.addEventListener('click', fecharModal);

    function fecharModal() {
        modal.classList.toggle("modal-active");
        modal.close()

        // Remover o evento de clique após a execução
        botaoFechaModal.removeEventListener('click', fecharModal);
    }
}

function constroiModalProduto(src, alt, titulo, descricao, valor) {
    modalProduto.innerHTML = `
        <div class="modal__cabecalho">
            <div class="modal__cabecalho__descricao">
                <img src="./img/Vector_Modal.svg" alt="vector da modal">
                <h2 id="dialog-title">Confira detalhes sobre o produto</h2>
            </div>
            <button type="button" class="modal__cabecalho__botaoFechar" aria-label="Fechar modal"></button>
        </div>
        <div class="modal__card">
            <img src="${src}" alt="${alt}">
            <div class="modal__card__descricao">
                <h3 class="modal__card__descricao__titulo">${titulo}</h3>
                <p class="modal__card__descricao__texto">${descricao}.</p>
                <p class="modal__card__descricao__valor">${valor}</p>
                <p class="modal__card__descricao__loja">Vendido e entregue por Riachuelo</p>

                <div class="modal__inputs">
                    <h4>Cores:</h4>
                    <ul class="modal__inputs__lista">
                        <li class="modal__inputs__lista__item">
                            <input type="radio" name="grupo-cores" id="azul-claro" />
                            <label for="azul-claro">Azul Claro</label>
                        </li>
                        <li class="modal__inputs__lista__item">
                            <input type="radio" name="grupo-cores" id="offwhite" />
                            <label for="offwhite">Offwhite</label>
                        </li>
                        <li class="modal__inputs__lista__item linha">
                            <input type="radio" name="grupo-cores" id="preto" />
                            <label for="preto">Preto</label>
                        </li>
                    </ul>
                </div>
                <div class="modal__inputs">
                    <h4>Tamanho:</h4>
                    <ul class="modal__inputs__lista tamanho">
                        <li class="modal__inputs__lista__item">
                            <input type="radio" id="P" name="grupo-tamanhos" />
                            <label for="P">P</label>
                        </li>
                        <li class="modal__inputs__lista__item">
                            <input type="radio" id="PP" name="grupo-tamanhos" />
                            <label for="PP">PP</label>
                        </li>
                        <li class="modal__inputs__lista__item">
                            <input type="radio" id="M" name="grupo-tamanhos" />
                            <label for="M">M</label>
                        </li>
                        <li class="modal__inputs__lista__item">
                            <input type="radio" id="G" name="grupo-tamanhos" />
                            <label for="G">G</label>
                        </li>
                        <li class="modal__inputs__lista__item">
                            <input type="radio" id="GG" name="grupo-tamanhos" />
                            <label for="GG">GG</label>
                        </li>
                    </ul>
                </div>
                <button id="adicionar__sacola">Adicionar à sacola</button>
            </div>
        </div>
    `;
}
