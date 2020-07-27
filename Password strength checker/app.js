var passBox = document.getElementById("passwordBox");
var warningPara = document.getElementById("warning");
var progressBar = document.getElementById("meter");
var strength = 0;
function check_strength() {
    progressBar.style.display = "inline";
    // progressBar.value = strength;
    // strength += 10;
    // console.log("A key is press");
    if (passBox.value != "") {
        // if (passBox.value.length < 8) {
        //     warningPara.innerHTML = "Password should contain at least 8 characters";
        //     warningPara.style.color = "red";
        //     for(var i=0; i<passBox.value; i++){
        //         console.log(passBox.value[i]);
        //     }
        // } else {
        //     warningPara.innerHTML = "";
        // }
        // console.log(passBox.value[0]);
        var matchedCase = new Array();
        matchedCase.push("[$@$!%*#?&]"); // Special Charector
        matchedCase.push("[A-Z]");      // Uppercase Alpabates
        matchedCase.push("[0-9]");      // Numbers
        matchedCase.push("[a-z]");     // Lowercase Alphabates

        // Check the conditions
        var ctr = 0;
        for (var i = 0; i < matchedCase.length; i++) {
            if (new RegExp(matchedCase[i]).test(passBox.value)) {
                ctr++;
            }
        }
        if(passBox.value.length >= 8){
            ctr++;
        }
        var color = "";
        var strength = "";
        switch (ctr) {
            case 0:
                strength = 0;
                color = "red";
                break;
            case 1:
                strength = 20;
                color = "red";
                break;
            case 2:
                strength = 40;
                color = "red";
                break;
            case 3:
                strength = 60;
                color = "orange";
                break;
            case 4:
                strength = 80;
                color = "orange";
                break;
            case 5:
                strength = 100;
                color = "green";
                break;
        }
        console.log(strength);
        console.log(color);
        progressBar.value = strength;
        progressBar.style.backgroundColor = color;

    } else {
        strength = 0;
        console.log(strength);
        console.log(color);
        warningPara.innerHTML = "Please enter some characters ";
        warningPara.style.color = "red";
    }

    // console.log(passBox.value.length);
}