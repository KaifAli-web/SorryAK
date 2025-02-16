document.addEventListener('DOMContentLoaded', () => {
    const message = document.querySelector('.message');
    const typingText = document.querySelector('.typing');
    const buttons = document.querySelector('.buttons');

    // Show message box after heart animation
    setTimeout(() => {
        message.classList.add('show');
    }, 1000);

    // Text to be typed
    const text = `Armeen ji, main jaanta hoon ki maine galti ki hai 🙈
    Par kya karu, aap se bohot pyaar jo karta hoon! 
    
    aap ki cute si smile ke bina mera din adhura sa lagta hai 🥺
    Please mujhe maaf kardo, main promise karta hoon aage se aisa nahi hoga!
    
    Tum mere liye duniya me sabse special ho ❤️
    
    Ab toh maaf kardo yaar... pretty please? 🥺`;

    // Typing animation
    let charIndex = 0;
    function typeText() {
        if (charIndex < text.length) {
            typingText.innerHTML += text.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 50);
        } else {
            buttons.classList.remove('hidden');
            buttons.classList.add('show');
        }
    }

    setTimeout(typeText, 1500);

    // Fix for missing elements
    const maafKaroBtn = document.getElementById('maafKaroBtn');
    const nopeBtn = document.getElementById('nopeBtn');

    if (maafKaroBtn) {
        maafKaroBtn.addEventListener('click', () => {
            window.location.href = 'thankyou.html';
        });
    }

    if (nopeBtn) {
        nopeBtn.addEventListener('click', () => {
            window.location.href = 'page2.html';
        });
    }
}); 