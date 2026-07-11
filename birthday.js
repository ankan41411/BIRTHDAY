const messages = [
" EK BAR DAKH K MAN NEHI BHARA KIYA FIRSE AAGEYI",

" DAKHLO FIRSE SAME HI CHIZ AANE WALA HAI",
 
"HMM To aageyi Web pe ",

 "FAAAAAaaaaahhhhhh",

 "Wo mujhe tumhe kuch batana hai you know 👉👈",

 

"🎂 Happy Birthday! You're getting prettier every year!",

"😂 Another year older... still acting 16.",

"👑 Queen of drama has officially leveled up!",

"🍰 Today's calories are cancelled.",

"😏 Your birthday gift is... my friendship. Expensive, right?",

"🤣 You deserve the best birthday... unfortunately you only got this website.",

"💖 Stay cute... the world already has enough serious people.",

"🎉 Smile! Today everyone has to pretend your jokes are funny.",

"👀 Don't count the candles... count the memories.",

"🎈 Have the happiest birthday ever!",

" KHATAM CHALO NIKLO AAB",

 "Ra Khatam bola naa firse click kiya",

 " KIYA YRR "
 


];

let currentIndex = 0;

function surpriseMe() {

    document.getElementById("meme").innerHTML = messages[currentIndex];

    if (currentIndex < messages.length - 1) {
        currentIndex++;
    }

    // Confetti
    for (let i = 0; i < 80; i++) {

        const c = document.createElement("div");

        c.className = "confetti";

        c.style.left = Math.random() * 100 + "vw";
        c.style.top = "-20px";
        c.style.background = `hsl(${Math.random()*360},100%,60%)`;
        c.style.animationDuration = (Math.random()*3+2) + "s";

        document.body.appendChild(c);

        setTimeout(() => {
            c.remove();
        }, 5000);
    }
}
