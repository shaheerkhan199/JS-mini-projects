var random_word;
function start_game() {
    var boxDiv = document.getElementById("boxes");
    var words = ["MOBILE", "TREE", "OCEAN", "PARADISE", "HOUSE", "RIVER", "TOYOTA", "COUNTRY", "WORLD"];
    // Generating random number in order to access random word from array
    const random_num = Math.floor(Math.random() * words.length);
    random_word = words[random_num];
    var length_of_word = random_word.length;
    var half_length = Math.floor(length_of_word / 2);
    // Generating a list of random numbers(half length of word) to Randomly remove characters from textbox
    var list_of_random_num = [];
    while (list_of_random_num.length < half_length) {
        var randomNum = getRandomNumber(0, length_of_word);
        if (list_of_random_num.indexOf(randomNum) === -1) {
            list_of_random_num.push(randomNum);
        }
    }
    list_of_random_num.sort();
    // Generating Textboxes and append each character to text box
    var counter = 0;
    for (var i = 0; i < length_of_word; i++) {
        var textBox = document.createElement("input");
        textBox.setAttribute("type", "text");
        if (i == list_of_random_num[counter]) {
            textBox.setAttribute("value", "");
            counter++;
        } else {
            textBox.setAttribute("value", random_word[i]);
            textBox.setAttribute("disabled", "true");
        }
        boxDiv.appendChild(textBox);
    }
    var check_button = document.createElement("button");
    check_button.innerHTML = "Check";
    check_button.setAttribute("onclick", "check_guess()");
    boxDiv.appendChild(check_button);
}

start_game();
var limit = 3;
var alertPara = document.getElementById("alert");
function check_guess() {
    console.log("hello");
    var textBoxes = document.getElementsByTagName("input");
    var user_guessed = "";
    for (var i = 0; i < textBoxes.length; i++) {
        var char = textBoxes[i].value.toUpperCase();
        user_guessed += char;
    }
    // console.log(user_guessed);
    // console.log(random_word);
    if (user_guessed === random_word) {
        // alert("You won!!!!!");
        alertPara.innerHTML = "You Won......!";
        alertPara.style.color = "green";
    } else {
        alert("Your lost");
        limit--;
    }
    console.log(limit);
    // start_game();
}

// Function to generate a random number within a specific range lower and upper bound passed as a parameter to function
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
