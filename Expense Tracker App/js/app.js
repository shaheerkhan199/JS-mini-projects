var sNo = 1;
var totalIncome;
var incomeSpan = document.getElementById("income");
var boardBox = document.getElementById("box");
var startBox = document.getElementById("start");
function show_board(){
    var incomeTextBox = document.getElementById("totalIncome");
    totalIncome = incomeTextBox.value;
    // console.log(boardBox);
    console.log(incomeSpan);
    incomeSpan.innerHTML = totalIncome;
    startBox.style.display = "none";
    boardBox.style.display = "block";
}
function add_expense(){
    var expenseName = document.getElementById("expenseName");
    var expenseAmount = document.getElementById("expenseAmount");
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
    expenseName.value = "";
    expenseAmount.value = "";
    totalIncome = totalIncome-expenseAmount;
    incomeSpan.innerHTML = totalIncome;
    sNo++;
}