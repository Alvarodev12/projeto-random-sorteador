function generateNumber() {
    // Obtém os valores dos inputs e converte para inteiros
    const min = Math.ceil(parseInt(document.querySelector('.input-min').value));
    const max = Math.floor(parseInt(document.querySelector('.input-max').value));

    if (isNaN(min) || isNaN(max)) {
        alert('Por favor, insira valores válidos');
        return;
    }

    if (min >= max) {
        alert('O valor mínimo tem que ser MENOR que o valor máximo');
    } else {
        // Gera um número aleatório entre min e max (inclusive)
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        // Exibe o resultado na tela
        document.getElementById('result').textContent = `Resultado do Sorteio: ${result}`;
    }
}
