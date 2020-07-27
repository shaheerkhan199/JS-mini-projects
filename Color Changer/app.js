function changeSelectedColor(){
    var dropDownValue = document.getElementById("list").value;
    var body = document.getElementsByTagName("body");
    body[0].style.backgroundColor = dropDownValue.toLowerCase();
}
function changeColorRandomly(){
    // We have to generate a color randomly in hex e.g #357515
    var body = document.getElementsByTagName("body");
    /* So first we have to generate six digit random number and 
    concatenate # with six digit random number to make a perfect Hex color value*/
    var hexRandomColor = "#"+Math.floor(100000 + Math.random() * 900000);
    console.log(hexRandomColor);
    body[0].style.backgroundColor = hexRandomColor;

}