let startTime = null;
let isRunning = false;
const button = document.getElementById("toggleButton");
const log = document.getElementById("log");

button.addEventListener("click", function() {
    let now = new Date().toLocaleTimeString();
    
    if (!isRunning) {
        startTime = now;
        button.textContent = "Parar";
        button.classList.remove("start");
        button.classList.add("stop");
        log.textContent = `Início: ${startTime}`;
    } else {
        log.textContent = `Início: ${startTime} | Fim: ${now}`;
        button.textContent = "Começar";
        button.classList.remove("stop");
        button.classList.add("start");
        startTime = null;
    }
    isRunning = !isRunning;
});
