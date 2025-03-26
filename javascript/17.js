const question = [
    {
        "question": "The addressee of a note sheet will be indicated as:",
        "answer": [
            {text: "Rank", correct: false},
            {text: "Appointment", correct: false},
            {text: "Appointment with rank", correct: false},
            {text: "Appointment with rank and Name", correct: true}
        ]
    },
    {
        "question": "______ Code is to be used for policy file in place of sub head.",
        "answer": [
            {text: "001", correct: false},
            {text: "01", correct: false},
            {text: "011", correct: false},
            {text: "000", correct: true}
        ]
    },
    {
        "question": "Charge Sheet Form No is:",
        "answer": [
            {text: "Form-225", correct: false},
            {text: "Form-125", correct: true},
            {text: "Form-252", correct: false},
            {text: "Form-255", correct: false}
        ]
    },
    {
        "question": "How many types of file are maintained by Air HQ?",
        "answer": [
            {text: "Two", correct: false},
            {text: "One", correct: false},
            {text: "Three", correct: true},
            {text: "As required", correct: false}
        ]
    },
    {
        "question": "The file jackets for top secret documents are printed as:",
        "answer": [
            {text: "Buff with diagonal red bands", correct: true},
            {text: "Diagonal red bands", correct: false},
            {text: "Pink with black", correct: false},
            {text: "Buff with black", correct: false}
        ]
    },
    {
        "question": "Notes are to be numbered in:",
        "answer": [
            {text: "Roman", correct: false},
            {text: "Alphabetical", correct: false},
            {text: "Arabic numerals with alphabetical", correct: false},
            {text: "Arabic numerals", correct: true}
        ]
    },
    {
        "question": "All correspondences to Bangladesh Missions abroad are routed through Dte AI and DGFI with ______ envelopes.",
        "answer": [
            {text: "Two", correct: true},
            {text: "One", correct: false},
            {text: "Three", correct: false},
            {text: "Four", correct: false}
        ]
    },
    {
        "question": "Air Force Order is issued by the order from:",
        "answer": [
            {text: "ACAS(A)", correct: true},
            {text: "COAS", correct: false},
            {text: "ACAS(Ops)", correct: false},
            {text: "D Pers", correct: false}
        ]
    },
    {
        "question": "Air Force Bulletins are to contain:",
        "answer": [
            {text: "Official and unofficial announcements of current interests", correct: false},
            {text: "Unofficial announcements of current interests", correct: false},
            {text: "Personal announcement only", correct: false},
            {text: "Official announcements of current interests", correct: true}
        ]
    },
    {
        "question": "For routine office job, the font size will be:",
        "answer": [
            {text: "Arial 14", correct: false},
            {text: "Arial 10", correct: false},
            {text: "Arial 11", correct: false},
            {text: "Arial 12", correct: true}
        ]
    },
        {
            "question": "A document must be graded according to its own content and not necessarily to its relationship or reference to another paper or matter.",
            "answer": [
                {text: "True", correct: true},
                {text: "False", correct: false}
            ]
        },
        {
            "question": "BAF LAN/WAN, e-mail, and FAX facilities are to be used as primary means for transmission of service correspondence.",
            "answer": [
                {text: "True", correct: true},
                {text: "False", correct: false}
            ]
        },
        {
            "question": "The diplomatic bag service is arranged by the Ministry of Foreign Affairs (MOFA).",
            "answer": [
                {text: "True", correct: true},
                {text: "False", correct: false}
            ]
        },
        {
            "question": "All counterfoils of warrants and concession vouchers must be retained by the unit for two years.",
            "answer": [
                {text: "True", correct: true},
                {text: "False", correct: false}
            ]
        },
        {
            "question": "Joint Services Instructions (JSIs) are issued by the Ministry of Defence conveying Government's decisions on matters common to the Army, Navy, and Air Force.",
            "answer": [
                {text: "True", correct: true},
                {text: "False", correct: false}
            ]
        },
        {
            "question": "The file jackets of RESTRICTED correspondence are printed Buff with diagonal red bands.",
            "answer": [
                {text: "True", correct: false},
                {text: "False", correct: true}
            ]
        },
        {
            "question": "OPI Directorate for arranging Ceremonies is Dte W&C.",
            "answer": [
                {text: "True", correct: true},
                {text: "False", correct: false}
            ]
        },
        {
            "question": "Every office or unit should maintain a list of all returns it has to make.",
            "answer": [
                {text: "True", correct: true},
                {text: "False", correct: false}
            ]
        },
        {
            "question": "For easy filing, the margin at left and right side will be 1 inch and 5 inches respectively.",
            "answer": [
                {text: "True", correct: false},
                {text: "False", correct: true}
            ]
        },
        {
            "question": "For routine office job, Font Size Arial 12 and Font Size Bijoy 14 should be used for English and Bengali respectively.",
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