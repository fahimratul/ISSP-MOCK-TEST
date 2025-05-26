const quizData = [
    // MCQ Questions (1–15)
    {
        type: 'mcq',
        question: 'Which is not a core characteristic of Air Power?',
        options: ['Reach', 'Speed', 'Responsibilities', 'Height'],
        answer: 'Responsibilities',
        explanation: 'Core characteristics of air power include reach, speed, and height, which enable its operational effectiveness. Responsibilities are not a characteristic but a function of command.'
    },
    {
        type: 'mcq',
        question: 'Military Doctrine falls into how many categories?',
        options: ['2', '3', '4', '5'],
        answer: '3',
        explanation: 'Military doctrine is typically categorized into three levels: strategic, operational, and tactical.'
    },
    {
        type: 'mcq',
        question: 'The characteristics of war is:',
        options: ['War is an instrument of theory', 'Leadership is crucial in war', 'War is an act of peace', 'War is not province of uncertainty'],
        answer: 'Leadership is crucial in war',
explanation: 'Characteristics of war is - war is an instrument of polucy , war is an act of violance, war is province of uncertainty, war is a clash of opposing wills, war is of the people , leader ship is crucial in war'    },
    {
        type: 'mcq',
        question: 'The temporary change of assignment of Air Power in subordinate Command is called:',
        options: ['Allotment', 'Appointment', 'Allocating', 'Taking'],
        answer: 'Allotment',
        explanation: 'The term used in the document is "Allocating," which aligns with the concept of allocation, the temporary assignment of air forces between subordinate commands.'
    },
    {
        type: 'mcq',
        question: 'One flight by one aircraft is defined as:',
        options: ['Roles', 'Tasks', 'Mission', 'Sorties'],
        answer: 'Sorties',
        explanation: 'A sortie is defined as a single flight by one aircraft for a specific mission.'
    },
    {
        type: 'mcq',
        question: 'The military authority and responsibility of a superior officer to issue orders to subordinates is called:',
        options: ['Full Command', 'Operational Command', 'Tactical Command', 'Administrative Command'],
        answer: 'Full Command',
        explanation: 'Full Command is the military authority and responsibility of a superior officer to issue orders to subordinates, covering all aspects of operations and administration.'
    },
    {
        type: 'mcq',
        question: 'Which is not a phase of the Command and Control Process?',
        options: ['Assessment', 'Analysis', 'Planning', 'Allocation'],
        answer: 'Allocation',
        explanation: 'The Command and Control process typically includes analysis, planning, implementation, and assessment. Allocation is a resource management function, not a phase of C2.'
    },
    {
        type: 'mcq',
        question: 'Which is not part of the OODA Loop Process?',
        options: ['Observe', 'Orient', 'None', 'Action'],
        answer: 'None',
        explanation: 'The OODA Loop (Observe, Orient, Decide, Act) includes all listed options. Since the document implies a correct answer, this assumes a trick question where all are part of the process.'
    },
    {
        type: 'mcq',
        question: 'Which is the translation of apportionment into total number of sorties?',
        options: ['Allotment', 'Tasking', 'Allocation', 'Sorties'],
        answer: 'Allocation',
        explanation: 'Allocation involves translating apportionment into specific numbers of sorties by aircraft type for each operation or task.'
    },
    {
        type: 'mcq',
        question: 'The overall employment plan of air force in a war is called:',
        options: ['Air Strategy', 'Air Component', 'Air Operation', 'Air Tasks'],
        answer: 'Air Strategy',
        explanation: 'Air strategy is defined as the overall employment plan for air forces in a war.'
    },
    {
        type: 'mcq',
        question: 'The following is not a level of war:',
        options: ['The grand strategic level', 'The military strategic level', 'The operational level', 'The technical level'],
        answer: 'The technical level',
        explanation: 'The levels of war include grand strategic, military strategic, operational, and tactical. The technical level is not a recognized level of war.'
    },
    {
        type: 'mcq',
        question: 'Within the spectrum of conflict, how many distinct types of warfare can be defined?',
        options: ['2','3','5', '4'],
        answer: '3',
        explanation: 'The spectrum of conflict typically includes three distinct types of warfare: conventional, sub-conventional, and nuclear warfare. The document omits options 3 and 5, but 3 is the standard answer.'
    },
    {
        type: 'mcq',
        question: 'Which is a limitation of Air Power?',
        options: ['Reach', 'Speed', 'Payload', 'Hight'],
        answer: 'Payload',
        explanation: 'Payload is a limitation of air power due to the restricted carrying capacity of aircraft. The document omits other options, but payload is a standard limitation.'
    },
    {
        type: 'mcq',
        question: 'The advent of nuclear weapons was in:',
        options: ['1943', '1991','1945', '1944'],
        answer: '1945',
        explanation: 'Nuclear weapons were first used in 1945, marking a significant shift in military strategy. The document omits 1945, but it is the correct answer.'
    },
    {
        type: 'mcq',
        question: 'What is the translation of the apportionment into total numbers of sorties by aircraft type available for each operation or task?',
        options: ['Allotment', 'Apportionment', 'Allocation', 'Tasking'],
        answer: 'Allocation',
        explanation: 'Allocation involves translating apportionment into specific numbers of sorties by aircraft type for each operation or task.'
    },
    // True/False Questions (16–30)
    {
        type: 'tf',
        question: 'Sole purpose of war is to achieve partial objectives.',
        answer: 'False',
        explanation: ' '
    },
    {
        type: 'tf',
        question: 'Air Operations fall into three broad categories.',
        answer: 'False',
        explanation: 'Air operations fall into two catagories: Combat Air Operations , Combat Support AIr Operations.'
    },
    {
        type: 'tf',
        question: 'Surprise action can achieve results out of all preparation to the effort expected.',
        answer: 'True',
        explanation: 'Surprise actions can yield disproportionate results by catching the enemy unprepared, despite the document’s wording ambiguity.'
    },
    {
        type: 'tf',
        question: 'The human factor is the most decisive in conflict.',
        answer: 'True',
        explanation: 'The human factor, including leadership and morale, is critical in determining the outcome of conflicts.'
    },
    {
        type: 'tf',
        question: 'War is the continuation of policy by other means, its sole purpose is to exercise military objectives.',
        answer: 'False',
        explanation: 'War is the continuation of policy by other means, but its purpose is to achieve political objectives, not solely military ones.'
    },
    {
        type: 'tf',
        question: 'Air Superiority means enemy air force is incapable of effective interference.',
        answer: 'True',
        explanation: 'Air superiority is achieved when the enemy’s air force cannot effectively interfere with friendly operations.'
    },
    {
        type: 'tf',
        question: 'Allocation is the temporary assignment of air force between subordinate Commands.',
        answer: 'False',
        explanation: 'Allotament involves the temporary distribution of air forces to subordinate commands for specific missions.'
    },
    {
        type: 'tf',
        question: 'Offensive air support consists of CAS and BAI.',
        answer: 'True',
        explanation: 'Offensive air support includes Close Air Support (CAS) and Battlefield Air Interdiction (BAI), both targeting enemy forces to support friendly operations.'
    },
    {
        type: 'tf',
        question: 'Leadership is not crucial in war.',
        answer: 'False',
        explanation: 'Leadership is crucial in war, as it drives decision-making and motivates forces.'
    },
    {
        type: 'tf',
        question: 'Speed and Reach made air Power Uniquely Flexible.',
        answer: 'True',
        explanation: 'Speed and reach are key strengths that make air power uniquely flexible and responsive.'
    },
    {
        type: 'tf',
        question: 'Grand strategy is the application of national resources to achieve defence policy objectives.',
        answer: 'False',
        explanation: 'Grand strategy involves the coordinated use of national resources to achieve defense policy objectives.'
    },
    {
        type: 'tf',
        question: 'Joint doctrine describes the best way to integrate and employ air forces with land and naval forces in joint action.',
        answer: 'True',
        explanation: 'Joint doctrine outlines the integration of air, land, and naval forces for coordinated operations.'
    },
    {
        type: 'tf',
        question: 'Speed, reach, and height allow air power to concentrate military force.',
        answer: 'True',
        explanation: 'Speed, reach, and height enable air power to rapidly concentrate force at critical points.'
    },
    {
        type: 'tf',
        question: 'Concentration of force is one of the Principles of War.',
        answer: 'True',
        explanation: 'Concentration of force is a recognized principle of war, emphasizing the massing of forces to achieve decisive results.'
    },
    {
        type: 'tf',
        question: 'Air supremacy means enemy air force capable of effective interference.',
        answer: 'False',
        explanation: 'Air supremacy means the enemy air force is incapable of effective interference, allowing complete control of the air.'
    },
    // Matching Questions (31–40)
    {
        type: 'match',
        question: 'Match each term with its correct description:',
        pairs: {
            'SAMs can be': 'maintained at very high states of readiness for long periods.',
            'Passive defence': 'includes all measures other than active air defence.',
            'Surveillance is the systematic observation': 'of aerospace, surface and sub-surface areas.',
            'Political objectives drive MOOTW': 'at every level, from strategic to tactical.',
            'Doctrinal Development is': 'a continuous and circular process.'
        },
        explanation: 'Each term is matched with its corresponding description as provided in the document.'
    },
    {
        type: 'match',
        question: 'Match each term with its correct description:',
        pairs: {
            'The provision of air power is': 'Inherently joint, combined and multinational in nature.',
            'Allotment is the temporary assignment of': 'air forces between subordinate commands.',
            'Airspace control is a combination of': 'airspace organization and planning procedures.',
            'The term air campaign is defined as': 'a coordinated series of air operations designed to achieve a specific air strategic objective.',
            'The strategic aim of counter-air campaign is to achieve and maintain': 'the required degree of control of the air.',
        },
        explanation: 'Each term is matched with its corresponding description as provided in the document.'
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
    resultsHTML = scoreHTML + resultsHTML;
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