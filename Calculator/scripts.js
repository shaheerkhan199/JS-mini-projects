function showValue(val){
    document.getElementById("result").value += val;
}
function clearScreen(){
    document.getElementById("result").value = "";
}
function computeResult(){
    var expression = document.getElementById("result").value;
    if(expression == ""){
        alert("Please input some number with operators");
    }
    else{
        var answer = eval(expression);
        document.getElementById("result").value = answer; 
    }
    // console.log(expression);
}