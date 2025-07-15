document.getElementById('step2').style.display = 'none';
document.getElementById('step1next').addEventListener('click',function(){
    username = document.getElementById('username').value;
    spanname = document.getElementById("spanname");

    spanname.innerHTML = username;
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
})


document.getElementById('calculate-cost').addEventListener('click', function(){
    ppl = document.getElementById('pax-no').value;
    result = document.getElementById('result');
    if (parseInt(ppl)< 1 || ppl == ''){
        result.innerHTML = "Not enuf ppl";
    }
    else if (parseInt(ppl) < 8){
        result.innerHTML = '$'+ 20*parseInt(ppl);
    }
    else{
        result.innerHTML = '$'+ 200;
    }
});
