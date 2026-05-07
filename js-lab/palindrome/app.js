const textInput = document.querySelector(".inputs input");
const checkBtn = document.querySelector(".inputs button");
const infoTxt = document.querySelector(".info-txt");

checkBtn.addEventListener("click", () => {
    let reverseInput = filterInput.split("").reverse().join("");
    infoTxt.style.display = "block";
    if(filterInput != reverseInput) {
        return infoTxt.innerHTML = `No, <span>'${textInput.value}'</span> isn't a palindrome!`;
    } else {
        return infoTxt.innerHTML = `Yes, <span>'${textInput.value}'</span> is a palindrome!`;
    }
})

textInput.addEventListener("keyup", () => {
    window.filterInput = textInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(window.filterInput) {
        return checkBtn.classList.add("active");
    }
    infoTxt.style.display = "none";
    checkBtn.classList.remove("active");
    
});