var min = document.getElementById("minute");
var sec = document.getElementById("second");
var startTimer=null;
function start(){
    if (sec.value!=0) {
        sec.value--;
    }
    else if (min.value!=0 && sec.value==0) {
        sec.value=59;
        min.value--;
    } 
}
var x = setInterval(start,1000);
function reset(){
    sec.value = 0;
    min.value = 0;
}
/*start.addEventListener('click',function(){
    function startIntervel(){
        startTimer=setInterval(function() {
            start();
        },1000)
    }
})*/
