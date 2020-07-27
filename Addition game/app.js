var num1, num2, correctAns, score=0;
function gernerate_random_num(){
    num1 = Math.floor(Math.random()*100);
    num2 =  Math.floor(Math.random()*100);
    correctAns = num1+num2;
    var para  = document.getElementById("question");
    para.innerHTML = "what is "+num1+" + " +num2 + "?";
}
gernerate_random_num();

function check_answer(){
    var userAnswer = document.getElementById("answer").value;
    var warningPara = document.getElementById("warning");
    var scorePara = document.getElementById("score");
    if(userAnswer == correctAns){
        score++;
        warningPara.innerHTML = "";
        scorePara.innerHTML = "Your score: "+ score;
        scorePara.style.color = "green";
        document.getElementById("answer").value = "";
        gernerate_random_num();
    }else{
        warningPara.innerHTML = "Your answer is wrong...Try again";
        warningPara.style.color = "red";
        document.getElementById("answer").value = "";
        gernerate_random_num();
        score = 0;
    }
}