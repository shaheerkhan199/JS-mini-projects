// Generating random number between 1 to 20
var random_num = Math.ceil(Math.random() * 20);
console.log(random_num);
var noOfAttempts = 3;
var hintPara = document.getElementById("hint");
var ansBox = document.getElementById("answer");
function check_answer() {
    var userGuess = ansBox.value;
    console.log(userGuess);
    if (noOfAttempts > 0) {
        if (userGuess == random_num) {
            console.log("You won!!! your guess is right");
            noOfAttempts--;
            ansBox.value = "";
            document.getElementById("attempts").innerHTML = noOfAttempts;
            hintPara.innerHTML = "You won!!! your guess is right";
            hintPara.style.color = "green";
        } else if (userGuess < random_num) {
            noOfAttempts--;
            document.getElementById("attempts").innerHTML = noOfAttempts;
            ansBox.value = "";
            hintPara.innerHTML = "Try Something bigger";
            hintPara.style.color = "red";
        } else if (userGuess > random_num) {
            noOfAttempts--;
            document.getElementById("attempts").innerHTML = noOfAttempts;
            ansBox.value = "";
            hintPara.innerHTML = "Try Something Smaller";
            hintPara.style.color = "red";
        }
    }else{  
        hintPara.innerHTML = "You have reached your maximum attempts";
        ansBox.value = "";
        ansBox.disabled = true;
    }

}