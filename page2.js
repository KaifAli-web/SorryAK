document.addEventListener('DOMContentLoaded', () => {
    const typingText = document.querySelector('.typing2');

    const text = `Arey mere pyaari Armeen ji 🥺
    
    Dekho kitne cute puppy eyes se dekh raha hoon main!
    
    Tumhare bina toh meri life ekdum boring boring hai 😔
    Aise gussa mat karo na... pretty please with cherry on top? 🍒
    Main promise karta hoon aage se dhyaan rakhunga! 🤞
    `;

    let charIndex = 0;
    function typeText() {
        if (charIndex < text.length) {
            if (typingText) {
                typingText.innerHTML += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeText, 50);
            }
        }
    }

    setTimeout(typeText, 1000);

    // Fix for missing elements
    const okayBtn = document.getElementById('okayBtn');
    const stillNoBtn = document.getElementById('stillNoBtn');

    if (okayBtn) {
        okayBtn.addEventListener('click', () => {
            window.location.href = 'thankyou.html';
        });
    }

    if (stillNoBtn) {
        stillNoBtn.addEventListener('click', () => {
            window.location.href = 'page3.html';
        });
    }
}); 