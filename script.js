'use strict';

async function speakingComputer(speech) {
    const sample = await window.speechSynthesis.speak(
        new SpeechSynthesisUtterance(speech)
    );
    const this1 = await console.log('The');
}

const userName = 'Dee';

const testBtn = document.getElementById('test-btn');

testBtn.addEventListener('click', () => {
    speakingComputer(
        `What, the fuck, are you doing? What is that cunt doing? ${userName}, I recommend pausing to consider.`
    );
});
