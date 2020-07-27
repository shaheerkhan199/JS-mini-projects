// This is the function that shift next image
function previous_image() {
    var image = document.getElementById("sliderImage");
    var image_source = image.getAttribute("src");
    var image_num = image_source.slice(7, 8);
    if (image_num > 1) {
        var image_num = --image_num;
        var next_image = "images/" + image_num + ".jpg";
        image.setAttribute("src", next_image);
    }
    else {
        next_image = "images/5.jpg"
        image.setAttribute("sr  c", next_image);
    }
    console.log(next_image);
}
// This is the function that shift(rewind) previous image
function next_image() {
    var image = document.getElementById("sliderImage");
    var image_source = image.getAttribute("src");
    var image_num = image_source.slice(7, 8);
    if (image_num < 5) {
        var image_num = ++image_num;
        var next_image = "images/" + image_num + ".jpg";
        image.setAttribute("src", next_image);
    }
    else {
        next_image = "images/1.jpg"
        image.setAttribute("src", next_image);
    }
    console.log(next_image);
}
/*
    Converted both functions into a single function that 
    can toogle between forward image and backward image
*/
function change_image(direction) {
    var image = document.getElementById("sliderImage");
    var image_source = image.getAttribute("src");
    var image_num = image_source.slice(7, 8);
    if (direction == "forward") {
        if (image_num < 5) {
            var image_num = ++image_num;
            var next_image = "images/" + image_num + ".jpg";
            image.setAttribute("src", next_image);
        }
        else {
            next_image = "images/1.jpg"
            image.setAttribute("src", next_image);
        }
    } else {
        if (image_num > 1) {
            var image_num = --image_num;
            var next_image = "images/" + image_num + ".jpg";
            image.setAttribute("src", next_image);
        }
        else {
            next_image = "images/5.jpg"
            image.setAttribute("src", next_image);
        }
    }
}