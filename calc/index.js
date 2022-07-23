
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