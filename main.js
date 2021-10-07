const reset = document.querySelector('#reset');

reset.addEventListener('click', function(){
    location.reload();
})


// const start = document.querySelector('#start');


            
let second = 0;
let minute = 0;
let hours = 0;


let second_display=0;
let minuts_display = 0;
let hours_display=0;



let interval ;
let status ="Stopped";

function timer(){
    second++;
    if(second==60){
        second =0;
        minute++;
        if(minute==60){
            minute=0;
            hours;
        }
    }
    if(second<10){
        display_second="0" + second.toString();
    }else
    {
      display_second= second;
    }if(minute<10){
        minuts_display="0"+ minute.toString();
    }else{
       minuts_display = minute;
    }
    if(hours<10){
        hours_display="0"+ hours.toString();
    }else{
       hours_display= hours;
    }
    document.getElementById('HH').innerHTML = hours_display+ ":" + minuts_display + ":" + display_second;
}


function startpause(){
   if(status ==="Stopped"){
    interval=window.setInterval(timer, 1000);
    document.getElementById('start').innerHTML = "Pause";
    status = "started"


}
else{ 
    window.clearInterval(interval);
    document.getElementById('start').innerHTML = "Start";
    status = "stopped"


}
}
