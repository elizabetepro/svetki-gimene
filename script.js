function openPage(page) {
    window.location.href = page;
}


function openPage(page) {
    window.location.href = page;
}

function celebrate() {
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");
        confetti.innerHTML = "🎉";
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize = "24px";
        document.body.appendChild(confetti);

        let fall = setInterval(() => {
            confetti.style.top = confetti.offsetTop + 5 + "px";
            if (confetti.offsetTop > window.innerHeight) {
                confetti.remove();
                clearInterval(fall);
            }
        }, 30);
    }
}
