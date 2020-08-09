var sNo = 1;
var totalIncome;
var incomeSpan = document.getElementById("income");
var boardBox = document.getElementById("box");
var startBox = document.getElementById("start");
var incomeTextBox = document.getElementById("totalIncome");
var totalSpan = document.getElementById("total");
var total = 0;
var circle = document.getElementById("circle");
function show_board() {
    totalIncome = incomeTextBox.value;
    incomeSpan.innerHTML = totalIncome;
    startBox.style.display = "none";
    boardBox.style.display = "block";
}
function add_expense() {
    var remaining_income = incomeSpan.innerHTML;
    totalIncome = incomeTextBox.value;
    var expenseName = document.getElementById("expenseName");
    var expenseAmount = document.getElementById("expenseAmount");
    if(expenseName.value == "" || expenseAmount.value == ""){
        alert("Please Enter Something");
        return "";
    }
    if (parseInt(remaining_income) >= parseInt(expenseAmount.value) && parseInt(expenseAmount.value) != 0) {
        var table = document.getElementById("table");
        var row = document.createElement("tr");
        var column1 = document.createElement("td");
        var column2 = document.createElement("td");
        var column3 = document.createElement("td");
        column1.appendChild(document.createTextNode(sNo));
        column2.appendChild(document.createTextNode(expenseName.value));
        column3.appendChild(document.createTextNode(expenseAmount.value));
        row.appendChild(column1);
        row.appendChild(column2);
        row.appendChild(column3);
        table.appendChild(row);

        var exp = parseInt(expenseAmount.value);
        var inc = parseInt(remaining_income);
        var rem_inc = inc - exp;
        incomeSpan.innerHTML = rem_inc;
        total += exp;

        totalSpan.innerHTML = "Total: " + total;

        expenseName.value = "";
        expenseAmount.value = "";
        sNo++;

        if (rem_inc == "0") {
            console.log("red circle");
            circle.style.backgroundColor = "red";
        }
    } else {
        alert("You dont't have enough income left");
    }

}