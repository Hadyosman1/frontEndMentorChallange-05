let days = document.getElementById('Days');
let Hours = document.getElementById('Hours');
let Minutes = document.getElementById('Minutes');
let Seconds = document.getElementById('Seconds');

let countDownDate = new Date("Apr 23 2024 19:17:59"); 

let  x = setInterval(() => {
    let nowDate = new Date();
    let dateDiff = countDownDate - nowDate;
    let numberOfDays = Math.floor(dateDiff / (1000*60*60*24));
    let numberOfHours = Math.floor((dateDiff % (1000*60*60*24)) /(1000*60*60));
    let numberOfMinutes = Math.floor((dateDiff % (1000*60*60)) /(1000*60));
    let numberOfSeconds = Math.floor((dateDiff % (1000*60)) /(1000))
   
    days.innerText =  numberOfDays < 10 ? `0${numberOfDays}`: numberOfDays;
    Hours.innerText= numberOfHours < 10 ? `0${numberOfHours}`: numberOfHours;
    Minutes.innerText= numberOfMinutes < 10 ? `0${numberOfMinutes}`: numberOfMinutes;
    Seconds.innerText= numberOfSeconds < 10 ? `0${numberOfSeconds}`: numberOfSeconds;

    let numberDivs = document.querySelectorAll('.number');
    numberDivs.forEach((div)=>{
        let  divValue = div.innerText
        setTimeout(() => {
            if (div.innerHTML != divValue) {
                Seconds.classList.toggle("changed-seconds")
                if (div.id == "Minutes") {
                    div.classList.toggle('changed');
                    div.style.transition = "transform 1s"
                }else if (div.id == "Hours"){
                    div.classList.toggle('changed');
                    div.style.transition = "transform 1.5s";
                }else if (div.id == "Days") {
                    div.classList.toggle('changed');
                    div.style.transition = "transform 2s";
                }
            }
        },1000)
        
    })
    if (dateDiff < 0) {
        countDownDate.setDate(countDownDate.getDate() + 14);   
    }
}, 1000)

