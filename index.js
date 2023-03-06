let second = 0;

let timer = false
function start(){
    timer = true;
    stopWatch()

}

function stop(){
    timer = false;
}

function reset(){
    second = 0;
    document.getElementById('time').innerHTML = "0";
}

function stopWatch(){
    if(timer === true){
        second = second + 1;
        document.getElementById('time').innerHTML = second;
        setTimeout("stopWatch()", 1000)
    }
}