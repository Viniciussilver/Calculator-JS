const hours= document.getElementById("static")

const Tempo=()=>{
    let date= new Date();
    let hr= date.getHours();
    let min= date.getMinutes();
    let ss= date.getSeconds();

    hr = hr <10 ? `0${hr}` : hr;
    min = min <10 ? `0${min}` : min;
    ss = ss <10 ? `0${ss}` : ss;

    let time= `${hr}:${min}:${ss}`
    hours.innerHTML= time
};

Tempo(setInterval(Tempo,1000));
