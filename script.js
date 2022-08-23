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
    speakingComputer(`One, two, buckle, my, shoe.`);
    // speakingComputer(
    //     `Please state your destination. You can say - "reset" - at any time, to start over.`
    // );
});
