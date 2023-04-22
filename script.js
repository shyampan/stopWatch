const hrText = document.getElementById('hr');
const minText = document.getElementById('min')
const secText = document.getElementById('sec');
const countText = document.getElementById('count')


let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = false;

const start = () => {
    timer = true;
    stopwatch();
}

const stop = () => {
    timer = false;
}

const reset = () => {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    
    hrText.innerHTML = "00";
    minText.innerHTML = "00";
    secText.innerHTML = "00";
    countText.innerHTML = "00";

}

const stopwatch = () => {

    if(timer == true) {
        count  = count + 1;

        if(count == 100) {
            sec = sec + 1;
            count = 0;
        }

        if(sec == 60){
            min = min + 1;
            sec = 0;
        }

        if(min==60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        var hrStr = hr;
        var minStr = min;
        var secStr = sec;
        var countStr = count;

       

    hrText.innerHTML = hrStr;
    minText.innerHTML = minStr;
    secText.innerHTML = secStr;
    countText.innerHTML = countStr;

    setTimeout("stopwatch()",10);
    }
}