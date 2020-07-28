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
}