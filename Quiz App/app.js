var questions = [
    {
        question: "What is the capital of America?",
        option1: "Islamabad",
        option2: "Brazil",
        option3: "Washington",
        option4: "Austria",
        rightAnswer: "Washington",
    },
    {
        question: "What is the current prime minister of Pakistan?",
        option1: "Johny Sins",
        option2: "Imran khan",
        option3: "Rehman Malik",
        option4: "Altaf bhai",
        rightAnswer: "Imran khan",
    },
    {
        question: "WHO stands for?",
        option1: "World Health Organization",
        option2: "Wide Heat Organism",
        option3: "Women Health Organization",
        option4: "None of the above",
        rightAnswer: "World Health Organization",
    },
];

var counter = 0;
var questionPara;
var option1Radio;
var option2Radio;
var option3Radio;
var option4Radio;

function start_quiz() {
    // Getting all option radion buttons
    questionPara = document.getElementById("questionPara");
    option1Radio = document.getElementById("option1");
    option2Radio = document.getElementById("option2");
    option3Radio = document.getElementById("option3");
    option4Radio = document.getElementById("option4");

    // Getting all option labels
    var option1Label = document.getElementById("option1Label");
    var option2Label = document.getElementById("option2Label");
    var option3Label = document.getElementById("option3Label");
    var option4Label = document.getElementById("option4Label");

    // Setting question to para
    questionPara.innerHTML = (counter + 1) + ". " + questions[counter].question;

    // Setting options to radio button as a value
    option1Radio.value = questions[counter].option1;
    option2Radio.value = questions[counter].option2;
    option3Radio.value = questions[counter].option3;
    option4Radio.value = questions[counter].option4;


    // Setting options to labels
    option1Label.innerHTML = questions[counter].option1;
    option2Label.innerHTML = questions[counter].option2;
    option3Label.innerHTML = questions[counter].option3;
    option4Label.innerHTML = questions[counter].option4;
}
start_quiz();
var user_answer;
var marks = 0;
var nextBtn = document.getElementById("nextBtn");

function check_question() {
    // Cheching whether the user answer the correctly or not
    if(option1Radio.checked){
        user_answer = option1Radio.value;
    }else if(option2Radio.checked){
        user_answer = option2Radio.value;
    }else if(option3Radio.checked){
        user_answer = option3Radio.value;
    }else if(option3Radio.checked){
        user_answer = option4Radio.value;
    }else{
        nextBtn.disabled = true;
        alert("")
    }

    if(user_answer === questions[counter].rightAnswer){
        marks++;
    }
   
    // 
    show_next_question();

    // Unchecking all radion button
    option1Radio.checked = false;
    option2Radio.checked = false;
    option3Radio.checked = false;
    option4Radio.checked = false;
    
}

function show_next_question(){ 
    // Changing new question
    if (counter < (questions.length - 1)) {
        counter++;
        start_quiz();
    } else {
        console.log("Quiz end");
        console.log("Your marks is "+marks);
    }
}