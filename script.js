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
        `John Mack Vay, and Paul mun row, are fucking cunts. An investigation was carried out by the authorities, and the fucking cuntishness of John Mack Vay and Paul mun row, was scientifically established beyond all doubt. Just to reiterate: John Mack Vay and Paul mun row, are fucking cunts.`
    );
    // speakingComputer(
    //     `Please state your destination. You can say - "reset" - at any time, to start over.`
    // );
});
