let cara = 0;
let coroa = 0;

let coin = document.querySelector(".coin")
let flipBtn = document.querySelector("#flip-button")
let resetBtn = document.querySelector("#reset-button")

flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if(i){
        setTimeout(() => {
            coin.style.animation = "spin-cara 3s forwards";
        }, 100);
        cara++;
    }else{
        setTimeout(() => {
            coin.style.animation = "spin-coroa 3s forwards";
        }, 100);
        coroa++;
    }
    setTimeout(updateStats, 3000)
    disableButton();
})

const updateStats = () => {
    document.querySelector("#cara-count").textContent = `Cara: ${cara}`
    document.querySelector("#coroa-count").textContent = `Coroa: ${coroa}`
}

const disableButton = () => {
    flipBtn.disable = true;
    setTimeout(() => {
        flipBtn.disable = false;
    }, 3000);
}

resetBtn.addEventListener("click", () => {
    coin.style.animation = "none";
    cara = 0;
    coroa = 0;
    updateStats();
})