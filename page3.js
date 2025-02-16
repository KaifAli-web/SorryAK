document.addEventListener('DOMContentLoaded', () => {
    const typingText = document.querySelector('.typing3');
    const finalNoBtn = document.getElementById('finalNoBtn');

    const text = `Dekho ye cute sa panda bhi sorry bol raha hai! 🐼
    
    Panda bhi bol raha hai "Armeen ji, please maaf kardo!" 
    
    Itna pyaara panda dekh ke bhi gussa hai? 🥺
    Main aur panda dono sad ho jayenge...
    
    Panda ke liye hi sahi, maaf kardo na please? 🎋
    
    Ab toh maan jao... bamboo khilaunga! 
    Just kidding, ice cream chalegi? 🍦
    
    By the way, panda aap hi hai khojia mt `;

    let charIndex = 0;
    function typeText() {
        if (charIndex < text.length) {
            typingText.innerHTML += text.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 50);
        }
    }

    setTimeout(typeText, 1000);

    finalNoBtn.addEventListener('mouseover', (e) => {
        const x = Math.random() * (window.innerWidth - e.target.offsetWidth);
        const y = Math.random() * (window.innerHeight - e.target.offsetHeight);
        
        e.target.style.position = 'absolute';
        e.target.style.left = `${x}px`;
        e.target.style.top = `${y}px`;
    });

    document.getElementById('finalYesBtn').addEventListener('click', () => {
        window.location.href = 'thankyou.html';
    });
}); 