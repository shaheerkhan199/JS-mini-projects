var fontSize = 16;
function zoomIn(){
    var paragraph = document.getElementById("para");
    fontSize += 10;
    paragraph.style.fontSize = fontSize+"px";
}
function zoomOut(){
    var paragraph = document.getElementById("para");
    if(fontSize > 20){
        fontSize -= 10;
    }
    paragraph.style.fontSize = fontSize+"px";
}