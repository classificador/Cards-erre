// Função para alternar entre frente e verso do cartão
function virarCartao(elemento) {
    const conteudo = elemento.querySelector('.cartao__conteudo');
    conteudo.classList.toggle('virado');
}