const reload = document.querySelector(".reload");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const info = document.querySelector(".info");
const timeText = document.querySelector(".timer");
const playStop = document.getElementById("play_stop");


class Pomodoro{
    constructor(){
        this.countdown = 0;
        this.seconds = 1500; 
        this.workTime = 25;
        this.breakTime = 5;
        this.isBreak = true;
        this.isPaused = true; 
        this.minutes = Math.floor(this.seconds / 60);
        this.remainderSeconds = this.seconds % 60;
    };
    start(){
        clearInterval(this.countdown);
        this.isPaused = !this.isPaused;
        if(!this.isPaused){
            this.countdown = setInterval(this.timer.call(this),1000);
            this.minutes = Math.floor(this.seconds / 60);
            this.remainderSeconds = this.seconds % 60;
        }else{
            clearInterval(this.countdown);
        }
    };
    reset(){
        clearInterval(this.countdown);
        this.seconds = this.workTime*60;
        this.countdown = 0;
        this.isBreak = true;
        this.isPaused = true; 
    };
    timer(){
        console.log(this.seconds);
        this.seconds -= 1;
        if(this.seconds < 0){
            clearInterval(this.countdown);
            this.seconds = (this.isBreak ? this.breakTime : this.workTime) * 60;
        }
    };
    countdownDisplay(){
        let minutes = Math.floor(this.seconds / 60);
        let remainderSeconds = this.seconds % 60;
        timeText.innerHTML = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    };
    update(){
        this.timer();
        this.countdownDisplay();
    }
}

let pomodoro = new Pomodoro();
let pause = true;
let circleLength = 100;
const staticWorkTime = pomodoro.seconds;
const staticBreakTime = pomodoro.breakTime;
function Update(){
    pomodoro.update();
    let timeLoopCircle = 100/pomodoro.seconds;
    circleLength -= (((timeLoopCircle*pomodoro.seconds)/staticWorkTime));
    setProgress(circleLength);
}
function UpdateSmall(){
    let timeLoopCircle = 100/(staticBreakTime*60);
    circleLength -= (((timeLoopCircle*(pomodoro.seconds*60))/staticBreakTime));
    setProgress(circleLength);
}


let loop;
playStop.addEventListener("click",function(){
    if(pause == true){
        loop = setInterval(Update, 1000);
        pause = false;
        play.style.display = "none";
        stop.style.display = "block";
        
    }else if(pause == false){
        clearInterval(loop);
        pause = true;
        play.style.display = "block";
        stop.style.display = "none";
    }
})
reload.addEventListener("click",function(){
    pomodoro.reset();
    circleLength = 100;
})

var circle = document.querySelector('circle');
var radius = circle.r.baseVal.value;
var circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
  const offset = circumference - percent / 100 * circumference;
  circle.style.strokeDashoffset = offset;
}



