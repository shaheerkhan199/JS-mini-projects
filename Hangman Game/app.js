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
    // Generating a list of random numbers(half length of word) to Randomly remove characters from textbox
    var list_of_random_num = [];
    while (list_of_random_num.length < half_length) {
        var randomNum = getRandomNumber(0, length_of_word);
        if (list_of_random_num.indexOf(randomNum) === -1)
        {
            list_of_random_num.push(randomNum);
        }
    }
    list_of_random_num.sort();
    console.log(list_of_random_num);
    // Generating Textboxes and append each character to text box
    // console.log(length_of_word);
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