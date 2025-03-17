const question = [
    {
        "question": "What code is to be used for policy file in place of sub head?",
        "answer": [
            {text: "001", correct: false},
            {text: "01", correct: false},
            {text: "011", correct: false},
            {text: "000", correct: true}
        ]
    },
    {
        "question": "How is a file identified?",
        "answer": [
            {text: "Number to indicate formation", correct: false},
            {text: "A number from index", correct: false},
            {text: "A title and a number", correct: true},
            {text: "None is correct", correct: false}
        ]
    },
    {
        "question": "Who is responsible to ensure that an account of all service labels is maintained in the registry?",
        "answer": [
            {text: "NCOIC Registry", correct: false},
            {text: "WOIC Central Registry", correct: false},
            {text: "OC Wg/Sqn", correct: false},
            {text: "Adjutant", correct: true}
        ]
    },
    {
        "question": "What should a responsible clerk examine daily in files?",
        "answer": [
            {text: "No letter for dispatch remains in the files", correct: false},
            {text: "All files in circulation are booked out in transit ledgers or on cards", correct: false},
            {text: "Files are kept in the correct sequence", correct: false},
            {text: "No letter for dispatch remains in the files, all files in circulation are booked out in transit ledgers or on cards & files are kept in the correct sequence", correct: true}
        ]
    },
    {
        "question": "Who can sanction the downgrading of documents originated outside BAF?",
        "answer": [
            {text: "Cryptographer", correct: false},
            {text: "Cypher section", correct: false},
            {text: "Cypher officer", correct: false},
            {text: "Originator", correct: true}
        ]
    },
    {
        "question": "How are notes to be numbered?",
        "answer": [
            {text: "Arabic numerals with alphabetical", correct: false},
            {text: "Arabic numerals", correct: true},
            {text: "Alphabetical", correct: false},
            {text: "Roman", correct: false}
        ]
    },
    {
        "question": "How should correspondence be secured?",
        "answer": [
            {text: "On the right", correct: false},
            {text: "On the left", correct: true},
            {text: "At the bottom", correct: false},
            {text: "In the middle", correct: false}
        ]
    },
    {
        "question": "Through which directorates should all correspondences to Bangladesh Missions abroad be routed?",
        "answer": [
            {text: "Directorate of Air Intelligence (Dte AI) and Directorate General of Forces Intelligence (DGFI)", correct: true},
            {text: "Directorate of Air Intelligence (Dte AI) only", correct: false},
            {text: "Directorate General of Forces Intelligence (DGFI) only", correct: false},
            {text: "None of the above", correct: false}
        ]
    },
    {
        "question": "Where should spoiled or imperfect copies of Top Secret papers be returned?",
        "answer": [
            {text: "Originator for disposal", correct: true},
            {text: "OC", correct: false},
            {text: "Concern Unit", correct: false},
            {text: "P-1 section for disposal", correct: false}
        ]
    },
    {
        "question": "How many types of files are maintained by Air HQ?",
        "answer": [
            {text: "Two", correct: false},
            {text: "One", correct: false},
            {text: "Three", correct: true},
            {text: "As required", correct: false}
        ]
    },
    {
        "question": "What is the font size for routine office jobs?",
        "answer": [
            {text: "Arial 10", correct: false},
            {text: "Arial 11", correct: false},
            {text: "Arial 12", correct: true},
            {text: "Arial 14", correct: false}
        ]
    },
    {
        "question": "What is the form number for a Charge Sheet?",
        "answer": [
            {text: "Form-225", correct: false},
            {text: "Form-125", correct: false},
            {text: "Form-252", correct: false},
            {text: "Form-255", correct: true}
        ]
    },
    {
        "question": "How should the addressee of a note sheet be indicated?",
        "answer": [
            {text: "Rank", correct: false},
            {text: "Appointment", correct: false},
            {text: "Appointment with rank", correct: true},
            {text: "Appointment with rank and Name", correct: false}
        ]
    },
    {
        "question": "What color are file jackets for Top Secret documents?",
        "answer": [
            {text: "Buff with diagonal red bands", correct: true},
            {text: "Diagonal red bands", correct: false},
            {text: "Pink with black", correct: false},
            {text: "Buff with black", correct: false}
        ]
    },
    {
        "question": "How many pages does a file index and record register consist of?",
        "answer": [
            {text: "Minimum 300 pages", correct: false},
            {text: "Minimum 200 pages", correct: true},
            {text: "More than 200 pages", correct: false},
            {text: "Minimum 100 pages", correct: false}
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
        "question": "Every office or unit should maintain a list of all returns it has to make.",
        "answer": [
            {text: "True", correct: true},
            {text: "False", correct: false}
        ]
    },
    {
        "question": "It is generally better not to close a file immediately when action on it is apparently completed, but first to BF it for a reasonable period.",
        "answer": [
            {text: "True", correct: true},
            {text: "False", correct: false}
        ]
    },
    {
        "question": "Letter of minor censure may be signed by the senior staff officer but only after approval by the commander.",
        "answer": [
            {text: "True", correct: true},
            {text: "False", correct: false}
        ]
    },
    {
        "question": "Draft of the letter sent to superior for approval should remain in the file for record purpose.",
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
        "question": "In case of loss of an accountable document, irrespective of its security classification, a Board of Inquiry will be ordered.",
        "answer": [
            {text: "True", correct: true},
            {text: "False", correct: false}
        ]
    },
    {
        "question": "An envelop marked ‘TOP SECRET’ must be handed over by the top secret registry or the Legal Officer unopened and without delay, to the addressee.",
        "answer": [
            {text: "True", correct: true},
            {text: "False", correct: false}
        ]
    },
    {
        "question": "Any Correspondence conveying a reproof from a superior commander for asking explanation from subordinate commander must be signed by the commander himself.",
        "answer": [
            {text: "True", correct: true},
            {text: "False", correct: false}
        ]
    },
    {
        "question": "Yearly survey of documents and correspondence must be carried out by 31 July every year.",
        "answer": [
            {text: "True", correct: true},
            {text: "False", correct: false}
        ]
    },
    {
        "question": "Do not just click the ‘Save’ button when you have created a document.",
        "answer": [
            {text: "True", correct: true},
            {text: "False", correct: false}
        ]
    },
    {
        "question": "Loose minutes are to be placed as enclosures in the branch file both by the originating and receiving sections.",
        "answer": [
            {text: "True", correct: true},
            {text: "False", correct: false}
        ]
    },
    {
        "question": "Draft of the letter sent to superior for approval must be placed in a file for record purpose.",
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
        "question": "For easy filing, the margin at left and right side will be ‘1” and .5” inch respectively.",
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