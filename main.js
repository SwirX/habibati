// Modern JavaScript with smoother transitions
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader');
    const body = document.body;
    const candle = document.querySelector('.candle');
    const flame = document.querySelector('.flame');
    const fireworks = document.querySelectorAll('.firework');
    const instruction = document.querySelector('.instruction');

    // Loader handling
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 500);
        }, 2000);
    });

    // Candle interaction
    candle.addEventListener('click', () => {
        flame.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
        flame.style.opacity = '0';
        flame.style.transform = 'scale(0)';
        instruction.innerHTML = 'I LOVEEEEEE UUUUUUU🙃❤️❤️❤️❤️❤️';

        fireworks.forEach(firework => {
            firework.classList.remove('hidden');
            setTimeout(() => {
                firework.style.opacity = '0';
                setTimeout(() => firework.remove(), 1000);
            }, 3000);
        });

        // Add confetti effect
        setTimeout(createConfetti, 500);
    });

    // Mobile touch support
    candle.addEventListener('touchstart', (e) => {
        e.preventDefault();
        candle.click();
    });
});

function createConfetti() {
    // Add a proper confetti library or custom implementation here
    console.log('Add confetti effect!'); // Replace with actual confetti
}