'use strict';

const testBtn = document.getElementById('test-btn');

testBtn.addEventListener('click', () => {
    async function speakingComputer(speech) {
        const sample = await window.speechSynthesis.speak(
            new SpeechSynthesisUtterance(speech)
        );
        const this1 = await console.log('The');
    }

    // speakingComputer("I don't fucking believe it. What is that cunt doing? Turn left at the end of Clifford Bridge Road. You're doing great Dee. Try your best not to crash. You are almost at work now.")

    speakingComputer(
        "What, the fuck, are you doing? Don't be a cunt, Gareth Hunt. If you're not going to follow my directions, what the fuck is the point of any of this"
    );
});
