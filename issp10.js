

const quizData = [
    // MCQ Questions (1–10)
    { 
        type: 'mcq', 
        question: 'Military doctrine falls into how many categories?', 
        options: ['2', '3', '4', '5'], 
        answer: '3', 
        explanation: 'Military doctrine is typically categorized into three levels: strategic, operational, and tactical Air power doctrine.' 
    },
    { 
        type: 'mcq', 
        question: 'Which of the following is a limitation of war?', 
        options: ['Impermanence', 'Ubiquity', 'Flexibility', 'Concentration'], 
        answer: 'Impermanence', 
        explanation: 'Impermanence is a limitation of war, as military actions are temporary and subject to change based on strategic needs.' 
    },
    { 
        type: 'mcq', 
        question: 'What is the military authority and responsibility of a superior to issue orders to subordinates?', 
        options: ['Operational Command', 'Full Command', 'Tactical Control', 'Tactical Command'], 
        answer: 'Full Command', 
        explanation: 'Full command is the military authority and responsibility of a superior officer to issue orders to subordinates. It covers every aspect of military operations and administration, and remains a  national responsibility which cannot be delegated.' 
    },
    { 
        type: 'mcq', 
        question: 'What is accomplished by delegating appropriate authority to execute tasks and missions?', 
        options: ['Centralize Command and Control', 'Decentralize Execution', 'Centralize Command', 'Centralize Execution'], 
        answer: 'Decentralize Execution', 
        explanation: ' Decentralised execution of air power is the delegation of execution authority to responsible and capable lower-level commanders to achieve effective span of control, situational responsiveness and tactical flexibility. It allows subordinates to exploit opportunities in rapidly changing, fluid situation.' 
    },
    { 
        type: 'mcq', 
        question: 'The assignment of air assets is carried out at how many levels?', 
        options: ['2', '3', '4', '5'], 
        answer: '3', 
        explanation: 'Air asset assignment typically occurs at strategic, operational, and tactical levels.' 
    },
    { 
        type: 'mcq', 
        question: 'An active air defense system consists of how many main components?', 
        options: ['2', '3', '4', '5'], 
        answer: '3', 
        explanation: `Active AD system consists of three 
        basic and closely integrated components: 
        a. Detection system. 
        b. Command, Control, Communication & Intelligence (C3I) System. 
        c. Weapon System.`
    },
    { 
        type: 'mcq', 
        question: 'Which type of air operation requires joint planning and coordination?', 
        options: ['BAI', 'AI', 'CAS', 'BI'], 
        answer: 'BAI', 
        explanation: ' BAI is defined as indirect air action against hostile land targets which are in a position to affect directly friendly forces and which require joint planning and coordination'
    },
    { 
        type: 'mcq', 
        question: 'What type of air lift is the carriage of passengers and cargo between theatres?', 
        options: ['Strategic', 'Tactical', 'Strategic and Tactical', 'Airspace control'], 
        answer: 'Strategic', 
        explanation: 'Strategic airlift is the carriage of passengers and cargo between theatres. Aircraft are designed primarily for carrying personnel and logistics between theatres of operations Aircraft'
    },
    { 
        type: 'mcq', 
        question: 'Parachute assault falls under which type of service?', 
        options: ['Airborne operations', 'Special air operation', 'Air logistic support', 'Scheduled'], 
        answer: 'Airborne operations', 
        explanation: 'Parachute assaults are a key component of airborne operations, involving the deployment of troops via parachute.' 
    },
    { 
        type: 'mcq', 
        question: 'How many sensory means are used for surveillance and reconnaissance operations?', 
        options: ['3', '4', '5', '6'], 
        answer: '4', 
        explanation: 'Surveillance and reconnaissance typically use visual, radar, infrared, and electronic sensors.' 
    },
    // True/False Questions (11–20)
    { 
        type: 'tf', 
        question: 'The sole purpose of war is not to achieve political objectives.', 
        answer: 'False', 
        explanation: 'War is being utilised as the continuation of policy by other means; its sole purpose is to achieve political objectives' 
    },
    { 
        type: 'tf', 
        question: 'The national morale or will-power of a nation is the basis of its military effectiveness.', 
        answer: 'True', 
        explanation:'' 
    },
    { 
        type: 'tf', 
        question: 'The human factor is not the most decisive in conflict.', 
        answer: 'False', 
        explanation: ' The human factor is the most decisive in conflict.' 
    },
    { 
        type: 'tf', 
        question: 'Surprise action cannot achieve results out of all proportion to the effort expended.', 
        answer: 'False', 
        explanation: 'Surprise actions can yield disproportionate results by catching the enemy unprepared.' 
    },
    { 
        type: 'tf', 
        question: 'Favorable air situation is a condition which is likely to prevail in the last stages of a major war.', 
        answer: 'False', 
        explanation: 'A favourable air situation is one in which the extent of air effort applied by the enemy air forces is insufficient to prejudice the success of friendly land, maritime or air operations' 
    },
    { 
        type: 'tf', 
        question: 'Air operations fall into three broad categories.', 
        answer: 'True', 
        explanation: 'Air operations are typically categorized into counter-air, air interdiction, and close air support.' 
    },
    { 
        type: 'tf', 
        question: 'Suppression of enemy air defenses is that activity which destroys, neutralizes, or temporarily degrades enemy air defense systems in a specific area.', 
        answer: 'True', 
        explanation: ' ' 
    },
    { 
        type: 'tf', 
        question: 'Air transport operations encompass three major roles.', 
        answer: 'False', 
        explanation: 'Air transport operations include Scheduled Svc, Airborne Ops,Air Mobile Ops, Special Air Ops,Air logistic support and Aeromedical Evacuation.' 
    },
    { 
        type: 'tf', 
        question: 'Plans for MOOTW are not prepared in a similar manner as plans for war.', 
        answer: 'False', 
        explanation: 'Military Operations Other Than War (MOOTW) plans are often prepared similarly to war plans, with adaptations for specific objectives.' 
    },
    { 
        type: 'tf', 
        question: 'Peace operations are military operations to support diplomatic efforts to reach a long-term political settlement.', 
        answer: 'True', 
        explanation: ' ' 
    },
    // Fill-in-the-Blank as MCQ (21–30)
    { 
        type: 'mcq', 
        question: '____ doctrine is the foundation of all air power doctrine.', 
        options: ['Strategic', 'Operational', 'Tactical', 'Fundamental'], 
        answer: 'Fundamental', 
        explanation: 'Fundamental doctrine provides the foundational principles guiding all air power doctrine.' 
    },
    { 
        type: 'mcq', 
        question: 'The process of commanding and controlling air forces normally falls into ____ main phases.', 
        options: ['2', '3', '4', '5'], 
        answer: '4', 
        explanation: 'Command and control of air forces typically involve analysis, planning, implementation, and assessment phases.' 
    },
    { 
        type: 'mcq', 
        question: 'There are ____ basic methods of exercising airspace control.', 
        options: ['2', '3', '4', '5'], 
        answer: '2', 
        explanation: 'Airspace control methods include positive control, procedural control' 
    },
    { 
        type: 'mcq', 
        question: 'Success will depend on effective ____ being exercised at every stage.', 
        options: ['C2', 'Control', 'Coordination', 'C2 and ISR'], 
        answer: 'C2', 
        explanation: 'Success will depend on effective C2 being exercised at every stage' 
    },
    { 
        type: 'mcq', 
        question: '____ is defined as the overall employment plan for air forces in a war.', 
        options: ['Air strategy', 'Air campaign', 'Air tactics', 'Air operations'], 
        answer: 'Air strategy', 
        explanation: 'Air strategy is defined as the overall employment plan for air forces in a war.' 
    },
    { 
        type: 'mcq', 
        question: '____ operations comprise all measures designed to nullify or reduce the effectiveness of hostile air action.', 
        options: ['Defensive Counter-air', 'Air interdiction', 'Close air support', 'Air defense'], 
        answer: ' Defensive Counter-air', 
        explanation: 'DCAO comprise all measures designed to nullify or reduce the effectiveness of hostile air action.' 
    },
    { 
        type: 'mcq', 
        question: '____ refueling operations enable short-range fighter-bomber aircraft to be given strategic air offensive tasks.', 
        options: ['Air to Air', 'Ground', 'Tactical', 'Strategic'], 
        answer: 'Air to Air', 
        explanation: '' 
    },
    { 
        type: 'mcq', 
        question: '____ provides greater tactical freedom at night.', 
        options: ['Night vision', 'Radar', 'Infrared systems', 'Stealth technology'], 
        answer: 'Night vision', 
        explanation: 'Night vision technology enhances tactical freedom by allowing operations in low-light conditions.' 
    },
    { 
        type: 'mcq', 
        question: '____ operation promotes high morale amongst aircrew.', 
        options: ['Training', 'Search and Rescue', 'Logistical', 'Support'], 
        answer: 'Search and Rescue', 
        explanation: 'Training operations build confidence and skills, promoting high morale among aircrew.' 
    },
    { 
        type: 'mcq', 
        question: 'Electronic ____ measures involve actions taken to ensure friendly effective use of the electromagnetic spectrum.', 
        options: ['Warfare', 'Countermeasures', 'Support', 'Jamming'], 
        answer: 'Countermeasures', 
        explanation: 'Electronic countermeasures ensure friendly forces can effectively use the electromagnetic spectrum.' 
    },
    // Matching Question (31–40)
    { 
        type: 'match', 
        question: 'Match each term with its correct description:', 
        pairs: { 
            'Allotment is the temprary assignment of': 'air forces between subordinate commands.', 
            'Airspace control is a combination': 'airspace organization and planning procedures.', 
            'Air campaign is defined as': 'a coordinated series of air operations designed to achieve a specific air strategic objective.', 
            'the strategic aim of Counter-air campaign is to achieve and maintain': 'the required degree of control of the air.', 
            'SAMs can be': 'maintained at very high states of readiness for long periods.', 
        }, 
        explanation: ' ' 
    },
    { 
        type: 'match', 
        question: 'Match each term with its correct description:', 
        pairs: { 
            'Passive defence': 'includes all measures other than active air defence.', 
            'Surveillance is the systematic observation ': 'of aerospace, surface and sub-surface areas.', 
            'Political objectives drives MOOTW': 'at every level, from strategic to tactical.', 
            'Doctrinal Development is': 'a continuous and circular process.', 
            'Provision of air power is ': 'inherently joint, combined and multinational in nature.' 
        }, 
        explanation: ' ' 
    }
];
let shuffledQuestions = [];
let answers = {};
let timeLeft = 1800; // 10 minutes in seconds

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function startTimer() {
    const timer = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById('timer').textContent = `Time Left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            submitQuiz();
        }
    }, 1000);
}

function initQuiz() {
    shuffledQuestions = shuffle([...quizData]);
    const nav = document.getElementById('question-nav');
    const questionsDiv = document.getElementById('questions');

    shuffledQuestions.forEach((q, i) => {
        // Create navigation button
        const btn = document.createElement('button');
        btn.className = 'nav-btn';
        btn.textContent = i + 1;
        btn.onclick = () => {
            document.getElementById(`q${i}`).scrollIntoView({ behavior: 'smooth' });
        };
        nav.appendChild(btn);

        // Create question
        const qDiv = document.createElement('div');
        qDiv.className = 'question';
        qDiv.id = `q${i}`;
        qDiv.innerHTML = `<h3>Question ${i + 1}: ${q.question}</h3>`;

        if (q.type === 'mcq') {
            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'options';
            q.options.forEach(opt => {
                optionsDiv.innerHTML += `
                    <label><input type="radio" name="q${i}" value="${opt}" onchange="recordAnswer(${i}, this.value)"> ${opt}</label>
                `;
            });
            qDiv.appendChild(optionsDiv);
        } else if (q.type === 'tf') {
            qDiv.innerHTML += `
                <label><input type="radio" name="q${i}" value="True" onchange="recordAnswer(${i}, this.value)"> True</label>
                <label><input type="radio" name="q${i}" value="False" onchange="recordAnswer(${i}, this.value)"> False</label>
            `;
        } else if (q.type === 'match') {
            const matchDiv = document.createElement('div');
            matchDiv.className = 'match-table';
            const left = Object.keys(q.pairs);
            const right = shuffle(Object.values(q.pairs));
            left.forEach((item, idx) => {
                matchDiv.innerHTML += `
                    <span>${item}</span>
                    <select onchange="recordMatchAnswer(${i}, '${item}', this.value)">
                        <option value="">Select match</option>
                        ${right.map(r => `<option value="${r}">${r}</option>`).join('')}
                    </select>
                `;
            });
            qDiv.appendChild(matchDiv);
        }
        questionsDiv.appendChild(qDiv);
    });

    startTimer();
}

function recordAnswer(index, value) {
    answers[index] = value;
    document.querySelectorAll('.nav-btn')[index].classList.add('answered');
}

function recordMatchAnswer(index, item, value) {
    if (!answers[index]) answers[index] = {};
    answers[index][item] = value;
    if (Object.keys(answers[index]).length === Object.keys(shuffledQuestions[index].pairs).length) {
        document.querySelectorAll('.nav-btn')[index].classList.add('answered');
    }
}

function submitQuiz() {
    clearInterval(timeLeft);
    let score = 0;
    let resultsHTML = `<h2>Quiz Results</h2>`;
    
    shuffledQuestions.forEach((q, i) => {
        let userAnswer = answers[i];
        let isCorrect = false;

        if (q.type === 'match') {
            isCorrect = userAnswer && Object.entries(q.pairs).every(([k, v]) => userAnswer[k] === v);
        } else {
            isCorrect = userAnswer === q.answer;
        }

        if (isCorrect) {
            score++;
        } else {
            resultsHTML += `
                <div class="result-item">
                    <h3>Question ${i + 1}: ${q.question}</h3>
                    <p>Your Answer: ${JSON.stringify(userAnswer)} - <span class="incorrect">Incorrect</span></p>
                    <p>Correct Answer: ${q.type === 'match' ? JSON.stringify(q.pairs) : q.answer}</p>
                    <p>Explanation: ${q.explanation}</p>
                </div>
            `;
        }
    });

    const scoreHTML = `<h3>Score: ${score}/${shuffledQuestions.length} (${Math.round((score / shuffledQuestions.length) * 100)}%)</h3>`;
    const pass=``;
    if(score>15){
        pass=`  PASSED`;
    }
    else{
        pass= `FAILED, Try once more!!`
    }
    resultsHTML = scoreHTML+pass + resultsHTML;
    resultsHTML += `<button id="back-btn" onclick="goBack()">Back to Quiz</button>`;
    document.getElementById('questions').style.display = 'none';
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('question-nav').style.display = 'none';
    document.getElementById('timer').style.display = 'none';
    document.getElementById('results').innerHTML = resultsHTML;
    document.getElementById('results').style.display = 'block';
}

function goBack() {
    window.location.href = 'index.html';
}

window.onload = initQuiz;