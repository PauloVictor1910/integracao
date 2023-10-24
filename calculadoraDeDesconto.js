// calculadoraDeDesconto.js
function calcularDesconto(preco, desconto) {
    const valorComDesconto = preco - (preco * (desconto / 100));
    return valorComDesconto.toFixed(2);
}

module.exports = calcularDesconto;
