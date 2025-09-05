function updateClock(){

    let clockText=document.getElementById("clock");

    const date = new Date();

    let hours=date.getHours().toString().padStart(2,"0");

    let minutes=date.getMinutes().toString().padStart(2,"0");

    let seconds=date.getSeconds().toString().padStart(2,"0");

    let meridian=hours < 12? "AM" :"PM";

    clockText.textContent=`${hours}:${minutes}:${seconds} ${meridian}`
}

updateClock();

setInterval(updateClock,1000);


