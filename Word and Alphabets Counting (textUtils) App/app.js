function countWordsAndAlphabets(){
    // console.log("btn 1 click");
    var text = document.getElementById("textBox").value;
    var listOfWords = text.split(" ");
    var noOfWords = listOfWords.length;
    var noOfChars = 0;
    console.log(listOfWords);
    for(var i=0; i<listOfWords.length; i++){
        noOfChars += listOfWords[i].length; 
    }
    console.log(noOfChars);
    document.getElementById("textStats").innerHTML = "No of words are : " + noOfWords + "<br> No of Characters are: "+ noOfChars;
    
}
function convertIntoUpperCase(){
    var text = document.getElementById("textBox").value;
    var text = text.toUpperCase();
    document.getElementById("textBox").value = text;
}
function convertIntoLowerCase(){
    var text = document.getElementById("textBox").value;
    var text = text.toLowerCase();
    document.getElementById("textBox").value = text;
}
function removeDuplicates(){
    var text = document.getElementById("textBox").value.toLowerCase().split(" ");
    for(var i=0; i<text.length; i++){
        var stringSearch = text[i];
        for(var j=i+1; j<=text.length; j++){
            if(stringSearch == text[j]){
                text.splice(j,1);
            }
        }
    }
    console.log(text);
    var modifiedText = "";
    for(var i=0; i<text.length; i++){
        modifiedText += capitalizeFirstLetter(text[i]) + " ";
    }
    document.getElementById("textBox").value = modifiedText;
}
function capitalizeFirstLetter(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
function replacWords(){
    // console.log("btn 5 click");
    var text = document.getElementById("textBox").value;
    var replaceWord = prompt("Enter word that you want to replace");
    var newWord = prompt("Enter new word that you want to place");
    var updatedText = text.replace(replaceWord, newWord);
    document.getElementById("textBox").value = updatedText;
}