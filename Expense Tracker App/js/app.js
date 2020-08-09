var sNo = 1;
function add_expense(){
    var totalIncome = 25000;
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
    sNo++;
}