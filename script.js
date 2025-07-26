let principalInput = document.getElementById("principal");
let rateInput = document.getElementById("rate");
let timeInput = document.getElementById("time");
let calculateBtn = document.getElementById('calculate-btn');
let result = document.getElementById("result");

calculateBtn.addEventListener('click', function(){
    let principal = Number(principalInput.value);
    let rate = Number(rateInput.value);
    let time = Number(timeInput.value);

    if(principal === 0 || isNaN(principal)){
        principal = 0;
    }
    
    if(rate === 0 || isNaN(rate)){
        rate = 0;
    }

    if(time === 0 || isNaN(time)){
        time = 0;
    }

    
    const A = principal * Math.pow(1 + rate / 100, time);
    const compoundInterest = A - principal;

    result.innerHTML = `Compound Interest : $${compoundInterest} <br><br>Total Amount : $${compoundInterest + principal}`;

})





