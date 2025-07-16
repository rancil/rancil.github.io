document.getElementById('step2').style.display = 'none';
document.getElementById('step3').style.display = 'none';
document.getElementById('step1next').addEventListener('click',function(){
    username = document.getElementById('username').value;
    spanname = document.getElementById("spanname");

    spanname.innerHTML = username;
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
})
document.getElementById('step2next').addEventListener('click',function(){
    date = document.getElementById("date").value;
    // payment.innerHTML = text;
    date = new Date(date);
    price = 1;
    price += isWeekend(date);
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'block';
})
document.getElementById('submit').addEventListener('click',function(){
    document.getElementById('step3').style.display = 'none';
    document.getElementById('step1').style.display = 'block';
})


document.getElementById('calculate-cost').addEventListener('click', function(){
    ppl = document.getElementById('pax-no').value;
    result = document.getElementById('result');
    if (parseInt(ppl)< 1 || ppl == ''){
        text = "not enuf ppl";
    }
    else if (parseInt(ppl) < 8){
        text = '$'+ 20*price*parseInt(ppl);
    }
    else{
        text = '$'+ 200*price;
    }
    result.innerHTML = text;
});

function isWeekend(date){
    const day = new Date(date).getDay()
    return (day === 0 || day === 6)*0.5;
}