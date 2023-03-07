let cinput=document.querySelector('#Celcius > input')
let finput=document.querySelector('#Fahrenheit > input')
let kinput=document.querySelector('#Kelvin > input')

let btn=document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

cinput.addEventListener('input',function(){
    let ctemp=parseFloat(cinput.value)
    let ftemp=(ctemp*(9/5))+32
    let ktemp=ctemp+273.15

    finput.value=roundNumber(ftemp)
    kinput.value=roundNumber(ktemp)
})

finput.addEventListener('input',function(){
    let ftemp=parseFloat(finput.value)
    let ctemp=(ftemp-32)*(5/9)
    let ktemp=(ftemp-32)*(5/9)+273.15

    cinput.value=roundNumber(ctemp)
    kinput.value=roundNumber(ktemp)
})

kinput.addEventListener('input',function(){
    let ktemp=parseFloat(kinput.value)
    let ctemp=ktemp-273.15
    let ftemp=(ktemp-273.15)*(9/5)+32

    cinput.value=roundNumber(ctemp)
    finput.value=roundNumber(ftemp)
})

btn.addEventListener('click',()=>{
    cinput.value=""
    finput.value=""
    kinput.value=""
})