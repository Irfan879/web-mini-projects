let btn = document.querySelector("button");
let heading = document.querySelector("h1")
let div = document.querySelector("div");


btn.addEventListener("click", () => {
    color();
});

let color = () => {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let finalColor = `rgb(${red}, ${green}, ${blue})`
    heading.innerText = finalColor;
    div.style.backgroundColor = finalColor;

}