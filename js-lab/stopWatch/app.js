const playBtn = document.querySelector(".play");
const lapBtn = document.querySelector(".lap");
const resetBtn = document.querySelector(".reset");
const clearBtn = document.querySelector(".lap-clear-btn");
const minute = document.querySelector(".minute");
const second = document.querySelector(".sec");
const centuSecond = document.querySelector(".msec");
const laps = document.querySelector(".laps");



let isPlay = false;
let setCounter = 0;
let min;
let sec;
let centiSec;
let centiCounter = 0;
let minCounter = 0;
let lapItem = 0;
let isReset = false;

const toggleBtn = () => {
    lapBtn.classList.remove("hidden");
    resetBtn.classList.remove("hidden");
}

const play = () => {
    if (!isPlay && !isReset) {
        playBtn.innerHTML = 'Pause';
        min = setInterval(() => {
            minute.innerHTML = `${++minCounter} :&nbsp;`;
        }, 60*1000);
        sec = setInterval(() => {
            if(setCounter === 60) {
                setCounter = 0;
            }
            second.innerHTML = `&nbsp;${++setCounter} :`;
        }, 1000);
        centiSec = setInterval(() => {
            if (centiCounter === 100) {
                centiCounter = 0;
            }
            centuSecond.innerHTML = `&nbsp;${++centiCounter}`;
        }, 10)
        isPlay = true;
        isReset = true;
    } else {
        playBtn.innerHTML = 'Play';
        clearInterval(min);
        clearInterval(sec);
        clearInterval(centiSec);
        isPlay = false;
        isReset = false;
    }
    toggleBtn();
};

const reset = () => {
    isReset = true;
    play()
    lapBtn.classList.add("hidden");
    resetBtn.classList.add("hidden");
    second.innerHTML = '&nbsp;0 :'
    centuSecond.innerHTML = '&nbsp;0';
    minute.innerHTML = '0 :';
};

const lap = () => {
    const li = document.createElement("li");
    const number = document.createElement("span");
    const timeStamp = document.createElement("span");

    li.setAttribute("class", "lap-item");
    number.setAttribute("class", "number");
    timeStamp.setAttribute("class", "time-stamp");

    number.innerHTML = `#${++lapItem}`
    timeStamp.innerHTML = `${minCounter} : ${setCounter} : ${centiCounter}`;

    li.append(number, timeStamp);
    laps.append(li);

    clearBtn.classList.remove("hidden");
}

const clearAll = () => {
    laps.innerHTML = '';
    laps.append(clearBtn);
    clearBtn.classList.add("hidden");
};

playBtn.addEventListener("click", play);
resetBtn.addEventListener("click", reset);
lapBtn.addEventListener("click", lap);
clearBtn.addEventListener("click", clearAll)

