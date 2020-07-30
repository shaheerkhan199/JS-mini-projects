function start_game() {
    // document.write("Game is start Now");
    var boxDiv = document.getElementById("boxes");
    var words = ["TREE", "OCEAN", "PARADISE", "HOUSE", "RIVER", "TOYOTA", "COUNTRY", "WORLD"];
    // Generating random number in order to access random word from array
    const random_num = Math.floor(Math.random() * words.length);
    var random_word = words[random_num];
    var length_of_word = random_word.length;
    // document.write(random_word);
    // console.log(random_num);
    // console.log(random_word);
    // console.log(boxDiv);
    console.log(length_of_word);
    for (var i = 0; i < length_of_word; i++) {
        var textBox = document.createElement("input");
        textBox.setAttribute("type", "text");
        textBox.setAttribute("value", random_word[i]);
        // console.log(textBox);
        textBox.setAttribute("disabled","true");
        boxDiv.appendChild(textBox);

    }
    var check_button = document.createElement("button");
    check_button.innerHTML = "Check";
    boxDiv.appendChild(check_button);
        // console.log(check_button);
}

start_game();

function check_guess(){
    
}