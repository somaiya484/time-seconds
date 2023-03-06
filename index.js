let seconds = 0;
let timer = false;

let start = () =>{
    timer = true;
    setTimer()
}
let stop = () =>{
    timer = false
}
let reset = () =>{
    seconds = 0;
    document.getElementById('time').innerHTML = '0';
}

let setTimer = () =>{
    if(timer === true){
        seconds++;
        document.getElementById('time').innerHTML = seconds;
        setTimeout(setTimer, 1000);
    }
}
