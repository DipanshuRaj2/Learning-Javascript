//generate a random color

const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};
let intervalId;

const startChangingColor = function (e) {
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000);
    }
    
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
        console.log(randomColor());
    }

}
const stopChangingColor = function (e) {
    clearInterval(intervalId);
    intervalId = null;
}
document.getElementById("start").addEventListener("click", startChangingColor);
document.getElementById("stop").addEventListener("click", stopChangingColor);
