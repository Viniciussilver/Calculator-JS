
const number= document.getElementById("result")

function insert(num){
     number.innerHTML= number.innerHTML + num

} 

function clean(){
    number.innerHTML= ""
}
function back(){
    const result = number.innerHTML
    number.innerHTML= result.substring(0,result.length -1)
}

function calculate(){
        if(number.innerHTML){
        return number.innerHTML= eval(number.innerHTML)
    }
}

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