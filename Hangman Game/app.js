var random_word;
function start_game() {
    var boxDiv = document.getElementById("boxes");
    var words = ["TREE", "OCEAN", "PARADISE", "HOUSE", "RIVER", "TOYOTA", "COUNTRY", "WORLD"];
    // Generating random number in order to access random word from array
    const random_num = Math.floor(Math.random() * words.length);
    random_word = words[random_num];
    var length_of_word = random_word.length;
    // document.write(random_word);
    // console.log(random_num);
    // console.log(random_word);
    // console.log(boxDiv);
    var half_length = Math.floor(length_of_word / 2);
    console.log(half_length);
    // Randomly remove characters from textbox
    var list_of_random_num = [];
    for (j = 1; j <= half_length; j++) {
        // console.log("random char");
        if (getRandomNumber(0, length_of_word) != list_of_random_num[i]) {
            list_of_random_num.push(getRandomNumber(0, length_of_word));

        } else {
            list_of_random_num.push(getRandomNumber(0, length_of_word));
        }
    }
    console.log(list_of_random_num);
    // Generating Textboxes and append each character to text box
    // console.log(length_of_word);
    for (var i = 0; i < length_of_word; i++) {
        var textBox = document.createElement("input");
        textBox.setAttribute("type", "text");
        if (i <= half_length) {
            textBox.setAttribute("value", random_word[i]);
            textBox.setAttribute("disabled", "true");
        } else {
            textBox.setAttribute("value", "");
        }
        boxDiv.appendChild(textBox);
    }
    var check_button = document.createElement("button");
    check_button.innerHTML = "Check";
    boxDiv.appendChild(check_button);
}

start_game();

function check_guess() {

}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//   var r =randomNumber(1,10);
// console.log(r);