const envelope = document.querySelector('.envelope-wrapper');
const letter = document.querySelector('.letter');


document.addEventListener('click', (e) => {
    if (
        e.target.matches(".envelope") || 
        e.target.matches(".tap-right") || 
        e.target.matches(".tap-left") || 
        e.target.matches(".heart")
    ) {
        envelope.classList.toggle('flap');
    } else if (e.target.matches(".envelope *")) {
        if (!letter.classList.contains('opened')) {
            letter.classList.add("letter-opening");

            setTimeout(() => {
                letter.classList.remove('letter-opening');
                letter.classList.add('opened');
            }, 500);
            envelope.classList.add("disable-envelope")
        } else {
            letter.classList.add('closing-letter')
            envelope.classList.remove("disable-envelope")
            letter.classList.remove('opened')
            setTimeout(() => {
                letter.classList.remove('closing-letter');
                letter.classList.remove('opened');
            }, 500);
        }
    }
});
const btnNo = document.querySelector("#btn-random")

function moverAleatoriamente(btn) {
    btn.style.position = "absolute";
    btn.style.fontWeight = "bolder";
    btn.style.top = Math.floor(Math.random() * 90 + 5) + "%"
    btn.style.left = Math.floor(Math.random() * 90 + 5) + "%"
}

btnNo.addEventListener("mouseenter", function (e) {
    moverAleatoriamente(e.target)
})
