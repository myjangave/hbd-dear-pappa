const countdown = () => {
    const countDate = new Date("June 22, 2021 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    //how does time work
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;


    //calculate time
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;

    if (gap <= 1000) {
        soham();
        completed();
      }
};

setInterval(countdown, 1000);

function soham() {        
        animItem.goToAndPlay(100,true);
        
}

 function completed() {



     let elm = document.getElementById("sohamop");
     
        elm.innerHTML = "<h2>Happy Birthday Pappa</h2>";

 }