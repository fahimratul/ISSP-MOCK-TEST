const question = [
       
            {
                "question": "Following kinds of file covers is used in BAF:",
                "answer": [
                    {text: "2007, 2006", correct: false},
                    {text: "2006, 2007, 2008 and 2009", correct: true},
                    {text: "2008, 2009", correct: false},
                    {text: "2005, 2006, 2007 and 2008", correct: false}
                ]
            },
            {
                "question": "The term correspondence is used to denote any type of:",
                "answer": [
                    {text: "Letter", correct: false},
                    {text: "Fax", correct: false},
                    {text: "Signal", correct: false},
                    {text: "Letter, fax and signal", correct: true}
                ]
            },
            {
                "question": "Note sheets are to be foolscape size and secured on the:",
                "answer": [
                    {text: "Left hand side of a file", correct: true},
                    {text: "Right hand side of a file", correct: false},
                    {text: "Either side of a file", correct: false},
                    {text: "Front side of a file", correct: false}
                ]
            },
            {
                "question": "When an individual wants a file to reach him on a certain date, he should enter the same mentioning date, month and year in:",
                "answer": [
                    {text: "Blue ink", correct: false},
                    {text: "Green ink", correct: false},
                    {text: "Red ink", correct: true},
                    {text: "Black ink", correct: false}
                ]
            },
            {
                "question": "Yearly survey of documents and correspondence must be carried out by:",
                "answer": [
                    {text: "30 Nov every year", correct: false},
                    {text: "31 Dec every year", correct: true},
                    {text: "31 Jan every year", correct: false},
                    {text: "31 Mar every year", correct: false}
                ]
            },
            {
                "question": "Digital file numbering is used in BAF from:",
                "answer": [
                    {text: "01 Jan 2012", correct: true},
                    {text: "01 Feb 2012", correct: false},
                    {text: "01 Jan 2011", correct: false},
                    {text: "01 Mar 2013", correct: false}
                ]
            },
            {
                "question": "Primary means for transmission of service correspondence within Bangladesh are:",
                "answer": [
                    {text: "BAF LAN/WAN", correct: false},
                    {text: "e-mail", correct: false},
                    {text: "Fax", correct: false},
                    {text: "BAF LAN/WAN, e-mail and fax", correct: true}
                ]
            },
            {
                "question": "Fax message to foreign countries are to be sent through BAF Communication Unit after obtaining necessary approval from the competent authority and counter signature of:",
                "answer": [
                    {text: "Air Secy", correct: true},
                    {text: "Dte AI", correct: false},
                    {text: "Dte C&E", correct: false},
                    {text: "Dte OAO", correct: false}
                ]
            },
            {
                "question": "Air Headquarters will have following types of files:",
                "answer": [
                    {text: "Branch File", correct: false},
                    {text: "Main File", correct: false},
                    {text: "Branch File and Main File", correct: true},
                    {text: "Part File", correct: false}
                ]
            },
            {
                "question": "Any commissioned officer, within the scope of their duties, is authorized to originate classified matters as followings:",
                "answer": [
                    {text: "Secret", correct: false},
                    {text: "Confidential", correct: false},
                    {text: "Restricted", correct: false},
                    {text: "Secret, confidential and restricted", correct: true}
                ]
            },
    
            // True/False Questions
            {
                "question": "The addressee of a note will be indicated as appointment underlined at the right hand side below the signature block.",
                "answer": [
                    {text: "True", correct: true},
                    {text: "False", correct: false}
                ]
            },
            {
                "question": "The signatory should personally sign only the main copy of the correspondence.",
                "answer": [
                    {text: "True", correct: true},
                    {text: "False", correct: false}
                ]
            },
            {
                "question": "A file on which no further action is required, must be closed and send to the registry, where it is retained for a prescribed period before destruction.",
                "answer": [
                    {text: "True", correct: true},
                    {text: "False", correct: false}
                ]
            },
            {
                "question": "It is the responsibility of registry and not of the branch to ensure that the necessary actions have been taken on all enclosures in a file before it is returned to the registry for Put Away (PA).",
                "answer": [
                    {text: "True", correct: false},
                    {text: "False", correct: true}
                ]
            },
            {
                "question": "In digital file numbering system, serial no code of a file is the substitute of earlier used volume number of a file.",
                "answer": [
                    {text: "True", correct: true},
                    {text: "False", correct: false}
                ]
            },
            {
                "question": "For routine office job, font size Arial 14 and font size Bijoy 12 should be used for English and Bengali respectively.",
                "answer": [
                    {text: "True", correct: true},
                    {text: "False", correct: false}
                ]
            },
            {
                "question": "The recipient of Top Secret correspondence is not responsible for its filling and safe custody.",
                "answer": [
                    {text: "True", correct: false},
                    {text: "False", correct: true}
                ]
            },
            {
                "question": "In case of loss of Top Secret or Secret document, a BOI will be ordered in a convenient time.",
                "answer": [
                    {text: "True", correct: false},
                    {text: "False", correct: true}
                ]
            },
            {
                "question": "Blank and partially blank warrant and concession vouchers are never to be signed or stamped.",
                "answer": [
                    {text: "True", correct: true},
                    {text: "False", correct: false}
                ]
            },
            {
                "question": "The branch file is not to go outside Air Headquarters.",
                "answer": [
                    {text: "True", correct: true},
                    {text: "False", correct: false}
                ]
            }
];


const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let randomQuestion, currentQuestionIndex;
currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
randomQuestion = question.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerText = questionNo + ". " + currentQuestion.question;
    // answerButton.innerHTML = "";
    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}


function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct==="true";
    if(correct){
        selectedButton.classList.add("correct");
        score++;
    }
    else{
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function homepage(){
    window.location.href = "index.html";
}


function showScore(){
    resetState();
    questionElement.innerText = "Your score is: " + score + "/" + question.length;
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";
    nextButton.addEventListener("click", homepage);

}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }
    else{
        showScore();
    }
}



nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < question.length){
        handleNextButton();
    }
    else{
        startQuiz();
        
    }
});



startQuiz();