const colors = ["green", "red", "blue", "rgba(133,122,200)", "#f15025"];

const color = document.querySelector(".color");
const button = document.getElementById("btn");

button.addEventListener("click", () =>{
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

let getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length);
}