

const quizData = [
    // MCQ Questions (1–10)
    {
        type: 'mcq',
        question: 'The characteristics of war is:',
        options: ['War is an instrument of Theory', 'War is an act of Peace', 'War is the Province of Uncertainty', 'Leadership is optional in War'],
        answer: 'War is the Province of Uncertainty',
        explanation: 'Characteristics of war is - war is an instrument of polucy , war is an act of violance, war is province of uncertainty, war is a clash of opposing wills, war is of the people , leader ship is crucial in war'
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
        question: 'Which is not a primary strength of Air Power?',
        options: ['Reach', 'Flexibility', 'Speed', 'Height'],
        answer: 'Flecibility',
        explanation: ''
    },
    {
        type: 'mcq',
        question: 'Which is not a principle of war?',
        options: ['Flexibility', 'Economy of effort', 'Violence', 'Surprise'],
        answer: 'Violence',
        explanation: 'ten Principles of war include Selection and Miantenance of the aim,maintence of morale, offensive action , concentration of force,economy of effort , security , surprise, coperation , felexibilty and sustainabilty.  .'
    },
    {
        type: 'mcq',
        question: 'The advent of nuclear weapons was in:',
        options: ['1943', '1945', '1991', '1939'],
        answer: '1945',
        explanation: 'Nuclear weapons were first used in 1945, marking a significant shift in military strategy.'
    },
    {
        type: 'mcq',
        question: 'What is the process of translating the allocation into orders, and passing those orders to the units involved?',
        options: ['Allotment', 'Apportionment', 'Tasking', 'Squadron mission plan'],
        answer: 'Tasking',
        explanation: 'Tasking is the process of translating the allocation into orders, and passing those orders to the units for carrying out air operation.'
    },
    {
        type: 'mcq',
        question: 'Which is not an OCA operation?',
        options: ['SEAD', 'Fighter Sweep', 'Air to air refueling', 'Air Field Attack'],
        answer: 'Air to air refueling',
        explanation: 'Offensive Counter-Air (OCA) operations include SEAD, fighter sweeps,surface attack , fighter escort.'
    },
    {
        type: 'mcq',
        question: 'Air to air refueling is divided into which two roles?',
        options: ['Towline & Trail', 'Area refueling & Point Refueling', 'Peacetime and Wartime', 'Entry point & Exit point'],
        answer: 'Towline & Trail',
        explanation: ''
    },
    {
        type: 'mcq',
        question: 'IRLS stands for:',
        options: ['Inter-Related Line of Sight', 'Infra-red Line Scan', 'Infra-red Line System', 'Infra-red line of Sight'],
        answer: 'Infra-red Line Scan',
        explanation: 'IRLS stands for Infra-red Line Scan, a technology used for reconnaissance and surveillance.'
    },
    {
        type: 'mcq',
        question: 'Which is not a type of MOOTW?',
        options: ['Arms Control', 'Combating Terrorism', 'Humanitarian Assistance', 'EW Ops'],
        answer: 'EW Ops',
        explanation: 'Military Operations Other Than War (MOOTW) include arms control, combating terrorism, Enforcement of sanctions, enforcing exclusion zones,ensuring fredom of navigation and overflight, humaniterian assitance,millitary support to civil authorities,nation assistance ,peace operation ,protection of shipping,recovry operations , show of force operations, strike and raid , support to insurgency.'
    },
    // True/False Questions (11–20)
    {
        type: 'tf',
        question: 'War is the continuation of policy by other means; its sole purpose is to achieve military objectives.',
        answer: 'False',
        explanation: 'War is the continuation of policy by other means, but its purpose is to achieve political objectives, not solely military ones.'
    },
    {
        type: 'tf',
        question: 'Combined doctrine describes the best way to integrate and employ air forces with land and naval forces in combined action.',
        answer: 'True',
        explanation: 'Combined (ie alliance) doctrine in relation to air power applies air power doctrine to combined operations and describes the best way to integrate and deploy air force with the forces of the allies in coalition warfare. '
    },
    {
        type: 'tf',
        question: 'The human factor is the most decisive in conflict.',
        answer: 'True',
        explanation: ''
    },
    {
        type: 'tf',
        question: 'Air power tends to be less sensitive to technological change than sea power or land power.',
        answer: 'False',
        explanation: 'Air power is highly sensitive to technological advancements, such as improvements in aircraft and weaponry, compared to sea or land power.'
    },
    {
        type: 'tf',
        question: 'Air Superiority means the enemy air force is incapable of effective interference.',
        answer: 'True',
        explanation: 'Air superiority is defined as that degree of dominance in the air battle of one force over another which permits the conduct of operations by the former and its related land, sea and air forces at a given time and place without prohibitive interference by the opposing force'
    },
    {
        type: 'tf',
        question: 'Allocation is the temporary assignment of air forces between subordinate commands.',
        answer: 'False',
        explanation: 'Allocation involves the temporary distribution of air forces to subordinate commands for specific missions.'
    },
    {
        type: 'tf',
        question: 'Combat-support air operations are defined as the major nonflying activities needed to support air operations.',
        answer: 'True',
        explanation: 'Allocation is the translation of the apportionment into total numbers of sorties by aircraft type available for each operation/task.'
    },
    {
        type: 'tf',
        question: 'The strategic air offensive involves the use of air power to strike directly and with precision at the enemy’s political, industrial, and economic power.',
        answer: 'True',
        explanation: 'Strategic air offensives target the enemy’s critical infrastructure to disrupt their war-making capability.'
    },
    {
        type: 'tf',
        question: 'BAI is defined as air action against hostile land targets in a position directly to affect friendly forces, which requires joint planning and coordination.',
        answer: 'True',
        explanation: ''
    },
    {
        type: 'tf',
        question: 'The Military Operations Other Than War (MOOTW) encompasses the use of military capabilities across the range of military operations short of war.',
        answer: 'True',
        explanation: 'MOOTW involves military actions like peacekeeping and humanitarian assistance that do not constitute full-scale war.'
    },
    // Fill-in-the-Blank as MCQ (21–30)
    {
        type: 'mcq',
        question: 'The ____ of aircraft allows rapid projection of military power.',
        options: ['Speed', 'Reach', 'Flexibility', 'Height'],
        answer: 'Speed',
        explanation: 'Speed allows the rapid projection of military power and permits missions to be completed quickly;'
    },
    {
        type: 'mcq',
        question: '____ and reach make air power uniquely responsive.',
        options: ['Speed', 'Height', 'Precision', 'Flexibility'],
        answer: 'Speed',
        explanation: 'Speed and reach allow air power to respond quickly and effectively across vast areas.'
    },
    {
        type: 'mcq',
        question: 'A ____ air situation is one in which the extent of air effort applied by the enemy air forces is insufficient to prejudice the success of friendly land, sea, or air operations.',
        options: ['Favorable', 'Superior', 'Controlled', 'Neutral'],
        answer: 'Favorable',
        explanation: 'A favorable air situation means enemy air efforts are insufficient to disrupt friendly operations.'
    },
    {
        type: 'mcq',
        question: '____ command and control promotes an integrated effort and enables forces to be employed to meet the recognized overall priorities.',
        options: ['Centralized', 'Decentralized', 'Joint', 'Unified'],
        answer: 'Centralized',
        explanation: 'Centralized command and control ensures coordinated efforts aligned with strategic priorities.'
    },
    {
        type: 'mcq',
        question: 'C3I is command, control, communication, and ____.',
        options: ['Intelligence', 'Information', 'Integration', 'Interdiction'],
        answer: 'Intelligence',
        explanation: 'C3I stands for Command, Control, Communication, and Intelligence, critical for effective operations.'
    },
    {
        type: 'mcq',
        question: 'Airpower and ____ have radically changed the concept of war in the 20th century.',
        options: ['Nuclear weapons', 'Stealth technology', 'Precision bombing', 'Electronic warfare'],
        answer: 'Nuclear weapons',
        explanation: 'Airpower and nuclear weapons significantly altered warfare by introducing new strategic capabilities.'
    },
    {
        type: 'mcq',
        question: 'Political objectives drive ____ at every level, from strategic to tactical.',
        options: ['MOOTW', 'Air campaigns', 'War planning', 'Doctrine development'],
        answer: 'MOOTW',
        explanation: ''
    },
    {
        type: 'mcq',
        question: 'The objective of ____ is to direct every military operation toward a clearly defined, decisive, and attainable objective.',
        options: ['Strategy', 'Planning', 'Doctrine', 'Operations'],
        answer: 'Strategy',
        explanation: 'Not Sure.'
    },
    {
        type: 'mcq',
        question: 'Success in war is not measured by the number of casualties inflicted or territory occupied, but by the ____ of political objectives.',
        options: ['Achievement', 'Planning', 'Execution', 'Coordination'],
        answer: 'Achievement',
        explanation: ' '
    },
    {
        type: 'mcq',
        question: '____ doctrine states the most fundamental and enduring principles which guide the use of air forces in action.',
        options: ['Strategic', 'Operational', 'Tactical',' Military'],
        answer: 'Military',
        explanation: 'Fundamental doctrine provides the core principles guiding air force operations.'
    },
    // Matching Questions (31–40)
    {
        type: 'match',
        question: 'Match each term with its correct description:',
        pairs: {
            'Leadership inspires and persuades men and women': 'to help a commander achieve his objectives in spite of adversity and danger.',
            'Doctrine is in essence': 'that which is taught.',
            'Air power has the unique ability to exploit': 'the third dimension above the surface of the Earth.',
            'Control of air means preventing the enemy to use his': 'air power effectively against friendly forces, rear areas & homelands.',
            'Airspace control is a combination of': 'airspace organization and planning procedures.'
        },
        explanation: 'Each term is matched with its corresponding description as provided in the document.'
    },
    {
        type: 'match',
        question: 'Match each term with its correct description:',
        pairs: {
            'Air Power can be employed in limited scale UCW during': 'initial phase of hostilities.',
            'The Military Operations Other Than War (MOOTW) encompasses the use of military capabilities': 'across the range of military operations short of war.',
            'The air war must be taken to the': 'enemy’s own territory.',
            'Physical component is the quantitative and qualitative indicator of': 'physical strength of an air force.',
            'War is the continuation of policy by': 'other means.',
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