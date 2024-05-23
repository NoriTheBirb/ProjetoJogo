function playGame(userChoice) {
    const choices = ['pedra', 'papel', 'tesoura'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const result = document.getElementById('result');

    if (userChoice === computerChoice) {
        result.textContent = `Empate! Ambos escolheram ${userChoice}.`;
        result.style.color = 'blue';
    } else if (
        (userChoice === 'pedra' && computerChoice === 'tesoura') ||
        (userChoice === 'papel' && computerChoice === 'pedra') ||
        (userChoice === 'tesoura' && computerChoice === 'papel')
    ) {
        result.textContent = `Você venceu! ${userChoice} vence ${computerChoice}.`;
        result.style.color = 'green';
    } else {
        result.textContent = `Você perdeu! ${computerChoice} vence ${userChoice}.`;
        result.style.color = 'red';
    }
}

function resetGame() {
    document.getElementById('result').textContent = '';
}