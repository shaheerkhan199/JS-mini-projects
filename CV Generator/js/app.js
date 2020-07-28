function generate_more_certifications(){
    var mainCertifications = document.getElementById("certifications");
    
    var row = document.createElement("div");
    row.setAttribute("class", "row")
    
    var columnDiv = document.createElement("div");
    columnDiv.setAttribute("class","col-md-12 certifications");
    

    var institite_name = document.createElement("input");
    institite_name.setAttribute("type","text");
    institite_name.setAttribute("placeholder","Institute Name");
    institite_name.setAttribute("class","form-control");

    var certificate = document.createElement("input");
    certificate.setAttribute("type","text");
    certificate.setAttribute("placeholder","Certificate");
    certificate.setAttribute("class","form-control");

    var duration = document.createElement("input");
    duration.setAttribute("type","text");
    duration.setAttribute("placeholder","Duration");
    duration.setAttribute("class","form-control");
    
    columnDiv.appendChild(institite_name);
    columnDiv.appendChild(certificate);
    columnDiv.appendChild(duration);

    row.appendChild(columnDiv)
    mainCertifications.appendChild(row);
    console.log(mainCertifications);
}
function generate_more_qualifications(){
    var mainQualifications = document.getElementById("qualifications");
    
    var row = document.createElement("div");
    row.setAttribute("class", "row")
    
    var columnDiv = document.createElement("div");
    columnDiv.setAttribute("class","col-md-12 academic-qualifications");
    

    var institite_name = document.createElement("input");
    institite_name.setAttribute("type","text");
    institite_name.setAttribute("placeholder","Institute Name");
    institite_name.setAttribute("class","form-control");

    var year = document.createElement("input");
    year.setAttribute("type","text");
    year.setAttribute("placeholder","Year");
    year.setAttribute("class","form-control");

    var degree = document.createElement("input");
    degree.setAttribute("type","text");
    degree.setAttribute("placeholder","Degree");
    degree.setAttribute("class","form-control");

    var grade = document.createElement("input");
    grade.setAttribute("type","text");
    grade.setAttribute("placeholder","Grade");
    grade.setAttribute("class","form-control");
    
    columnDiv.appendChild(institite_name);
    columnDiv.appendChild(year);
    columnDiv.appendChild(degree);
    columnDiv.appendChild(grade);
    
    row.appendChild(columnDiv)
    mainQualifications.appendChild(row);
    console.log(mainQualifications);
}
function generate_cv(){
    // Getting all the values from form.
    var objective = document.getElementById("objective").value;
    var fullName = document.getElementById("fullName").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var contact  = document.getElementById("phone").value;
    var cnic = document.getElementById("cnic").value;
    var dob = document.getElementById("dob").value;
    var portfolio = document.getElementById("portfolio").value;
    // Qualification 
    var qinstName = document.getElementById("q1-name").value;
    var qyear = document.getElementById("q1-year").value;
    var qdegree = document.getElementById("q1-degree").value;
    var qgrade = document.getElementById("q1-grade").value;
    
    // Certifications
    var cinstName = document.getElementById("c1-name").value;
    var ccertificate = document.getElementById("c1-certificate").value;
    var cduration = document.getElementById("c1-duration").value;
    
    // console.log(objective);
    // console.log(fullName);
    // console.log(address);
    // console.log(email);
    // console.log(contact);
    // console.log(cnic);
    // console.log(dob);
    // console.log(portfolio)
    // console.log(qinstName);
    // console.log(qyear);
    // console.log(qdegree);
    // console.log(qgrade);
    // console.log(cinstName);
    // console.log(ccertificate);
    // console.log(cduration);
    
    // Setting all the values to cv template
    document.getElementById("templateFullName").innerHTML = fullName;
    document.getElementById("templateObjective").innerHTML = objective;
    document.getElementById("templateEmail").innerHTML = email;
    document.getElementById("templatePhone").innerHTML = contact;
    document.getElementById("templateAddress").innerHTML = address;
    document.getElementById("templateCNIC").innerHTML = cnic;
    document.getElementById("templateDOB").innerHTML = dob;
    document.getElementById("templatePortfolio").innerHTML = portfolio;
    
    // Setting academic qualifications
    var qualificationsTable = document.getElementById("qualificationsTable");
    var table1Row = document.createElement("tr");
    var column0 = document.createElement("td");
    var column1 = document.createElement("td");
    var column2 = document.createElement("td");
    var column3 = document.createElement("td");
    var column4 = document.createElement("td");
    column0.appendChild(document.createTextNode("1"));
    column1.appendChild(document.createTextNode(qinstName));
    column2.appendChild(document.createTextNode(qyear));
    column3.appendChild(document.createTextNode(qdegree));
    column4.appendChild(document.createTextNode(qgrade));
    table1Row.appendChild(column0);
    table1Row.appendChild(column1);
    table1Row.appendChild(column2);
    table1Row.appendChild(column3);
    table1Row.appendChild(column4);
    // console.log(tableRow);
    qualificationsTable.appendChild(table1Row);

    // Setting Certifications
    var certificationsTable = document.getElementById("certificationsTable");
    var table2Row = document.createElement("tr");
    var column0 = document.createElement("td");
    var column1 = document.createElement("td");
    var column2 = document.createElement("td");
    var column3 = document.createElement("td");
    column0.appendChild(document.createTextNode("1"));
    column1.appendChild(document.createTextNode(cinstName));
    column2.appendChild(document.createTextNode(ccertificate));
    column3.appendChild(document.createTextNode(cduration));
    table2Row.appendChild(column0);
    table2Row.appendChild(column1);
    table2Row.appendChild(column2);
    table2Row.appendChild(column3);
    // console.log(tableRow);
    certificationsTable.appendChild(table2Row);
    


    // Hiding form and generating cv on cv template
    var formWrapper = document.getElementById("formWrapper");
    var cvWrapper = document.getElementById("cvWrapper");
    formWrapper.style.display = "none";
    cvWrapper.style.display = "block";


}