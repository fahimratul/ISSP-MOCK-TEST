const quizData = [
    // MCQ Questions (1–10)
    {
        type: 'mcq',
        question: 'The following is not a level of war:',
        options: ['The grand strategic level', 'The military strategic level', 'The operational level', 'The technical level'],
        answer: 'The technical level',
        explanation: 'The levels of war typically include grand strategic, military strategic, operational, and tactical levels. The technical level is not a recognized level of war.'
    },
    {
        type: 'mcq',
        question: 'Within the spectrum of conflict, how many distinct types of warfare can be defined?',
        options: ['2', '3', '4', '5'],
        answer: '3',
        explanation: 'The spectrum of conflict typically includes three distinct types of warfare: conventional, sub-conventional, and nuclear warfare.'
    },
    {
        type: 'mcq',
        question: 'Which is a limitation of Air Power?',
        options: ['Reach', 'Payload', 'Speed', 'Height'],
        answer: 'Payload',
        explanation: 'Payload is a limitation of air power due to the restricted carrying capacity of aircraft compared to their reach, speed, and height advantages.'
    },
    {
        type: 'mcq',
        question: 'There are how many basic degrees of control of the air?',
        options: ['10', '04', '03', '08'],
        answer: '04',
        explanation: 'The basic degrees of control of the air are air supremacy, air superiority, and favorable air situation, Local air supremacy.'
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
        question: 'What is the translation of the apportionment into total numbers of sorties by aircraft type available for each operation or task?',
        options: ['Allotment', 'Apportionment', 'Allocation', 'Tasking'],
        answer: 'Allocation',
        explanation: ''
    },
    {
        type: 'mcq',
        question: 'An element of passive defence is not:',
        options: ['Dispersal', 'Mobility', 'SAM', 'Concealment'],
        answer: 'SAM',
        explanation: 'Passive defense includes measures like detaction and warning system, hardening, CCD(Camouflage, Concealment and deception), Reconstitution , Redundacny , Dispersal, Mobility , Electronic and Infrared Countermeasures.'
    },
    {
        type: 'mcq',
        question: 'Characteristics of air transport operation are:',
        options: ['Speed and load', 'Strategic and tactical air lift', 'Concentration and economy of effort', 'Surveillance and reconnaissance'],
        answer: 'Strategic and tactical air lift',
        explanation: 'Air transport operations are characterized by strategic airlift (between theaters) and tactical airlift (within a theater).'
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
        question: 'Which is not a principle of MOOTW?',
        options: ['Objective', 'Security', 'Restraint', 'Surprise'],
        answer: 'Surprise',
        explanation: 'Principles of Military Operations Other Than War (MOOTW) include objective, security, and restraint, but surprise is a principle of war, not MOOTW.'
    },
    // True/False Questions (11–20)
    {
        type: 'tf',
        question: 'Grand strategy is the application of national resources to achieve defence policy objectives.',
        answer: 'True',
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
        question: 'Concentration of force is one of the principles of war.',
        answer: 'True',
        explanation: 'Concentration of force is a recognized principle of war, emphasizing the massing of forces to achieve decisive results.'
    },
    {
        type: 'tf',
        question: 'Air supremacy means enemy air force capable of effective interference.',
        answer: 'False',
        explanation: 'Air supremacy means the enemy air force is incapable of effective interference, allowing complete control of the air.'
    },
    {
        type: 'tf',
        question: 'Air strategy is defined as the overall employment plan for air force in a war.',
        answer: 'True',
        explanation: 'Air strategy outlines the overall plan for employing air forces to achieve strategic objectives in a war.'
    },
    {
        type: 'tf',
        question: 'OCA operations comprise all measures designed to nullify the effectiveness of hostile air action.',
        answer: 'False',
        explanation: 'OCA operations comprise all measures designed to nullify the effectiveness of hostile air action.'
    },
    {
        type: 'tf',
        question: 'Control of the air is needed if strategic air offensive operations are to be sustained.',
        answer: 'True',
        explanation: 'Control of the air is essential to sustain strategic air offensive operations by preventing enemy interference.'
    },
    {
        type: 'tf',
        question: 'Offensive air support consists of CAS and BAI.',
        answer: 'True',
        explanation: 'Offensive air support includes Close Air Support (CAS) and Battlefield Air Interdiction (BAI), both targeting enemy forces to support friendly operations.'
    },
    {
        type: 'tf',
        question: 'Unity of effort is one of the principles of MOOTW.',
        answer: 'True',
        explanation: 'Unity of effort is a principle of Military Operations Other Than War (MOOTW), ensuring coordinated action toward common objectives.'
    },
    // Fill-in-the-Blank as MCQ (21–30)
    {
        type: 'mcq',
        question: 'War is distinguished from other instruments of policy, by its use of organized ____.',
        options: ['Violence', 'Diplomacy', 'Strategy', 'Resources'],
        answer: 'Violence',
        explanation: 'War is distinguished by its use of organized violence as a means to achieve political objectives.'
    },
    {
        type: 'mcq',
        question: 'The tactical level of war involves the direction of military resources to achieve ____ objectives.',
        options: ['Strategic', 'Operational', 'Tactical', 'Policy'],
        answer: 'Operational',
        explanation: 'The tactical level focuses on planning and executing battles, engagements, and activities assigned to tactical units or task forces  (TFs) to achieve operational objectives'
    },
    {
        type: 'mcq',
        question: '____, speed, and reach must be considered as the strength of air power.',
        options: ['Height', 'Payload', 'Precision', 'Mobility'],
        answer: 'Height',
        explanation: 'Height, speed, and reach are key strengths of air power, enabling operations across vast areas and altitudes.'
    },
    {
        type: 'mcq',
        question: 'Airpower has inherent limitation as well as strengths, namely limited payloads and ____.',
        options: ['Fragility', 'Cost', 'Range', 'Speed'],
        answer: 'Fragility',
        explanation: 'Airpower’s limitations include limited payloads and fragility, referring to the vulnerability of aircraft to damage.'
    },
    {
        type: 'mcq',
        question: 'Air power’s most obvious wartime application is to ____.',
        options: ['Control the air', 'Support ground forces', 'Conduct strategic bombing', 'Provide logistics'],
        answer: 'Control the air',
        explanation: 'Air power’s most obvious wartime application is to achieve control of the air to enable other operations.'
    },
    {
        type: 'mcq',
        question: '____ is the military authority and responsibility of a superior to issue orders to subordinates.',
        options: ['Full Command', 'Control', 'Leadership', 'Coordination'],
        answer: 'Full Command',
        explanation: 'Full command is the military authority and responsibility of a superior officer to issue orders to subordinates..'
    },
    {
        type: 'mcq',
        question: '____ is a temporary change of assignment of Air Forces between subordinate Commands.',
        options: ['Allocation', 'Apportionment', 'Tasking', 'Allotment'],
        answer: 'Allotment',
        explanation: 'Allotment is a temporary change of assignment of air forces between subordinate commands.'
    },
    {
        type: 'mcq',
        question: 'A favourable air situation is one in which the extent of air effort applied by the enemy air forces is ____ the success of friendly land, sea, or air operations.',
        options: ['Insufficient to prejudice', 'Equal to', 'Greater than', 'Critical to'],
        answer: 'Insufficient to prejudice',
        explanation: 'A favorable air situation means enemy air efforts are insufficient to disrupt friendly operations.'
    },
    {
        type: 'mcq',
        question: '____ action allows the attacker to seize the initiative, to exploit to the full capabilities of air power and to concentrate strength against weakness.',
        options: ['Surprise', 'Offensive', 'Defensive', 'Strategic'],
        answer: 'Offensive',
        explanation: 'Offensive action enables the attacker to seize the initiative and exploit air power’s capabilities effectively.'
    },
    {
        type: 'mcq',
        question: '____ provides quick results and raises the morale of friendly troops.',
        options: ['Close Air Support', 'Strategic bombing', 'Air interdiction', 'Reconnaissance'],
        answer: 'Close Air Support',
        explanation: 'Close Air Support (CAS) provides quick results and boosts friendly troop morale by directly supporting ground forces.'
    },
    // Matching Questions (31–40)
    {
        type: 'match',
        question: 'Match each term with its correct description:',
        pairs: {
            'Man is the central element in war': 'and leadership is the critical factor in shaping human effort.',
            'Doctrine is in essence': 'that which is taught.',
            'Fighter sweep involves': 'offensive action by fighter ac to seek out and destroy enemy aircraft or targets of opportunity in an allocated area of operations.',
            'Sustainability encompasses all aspects of': 'physical, moral and spiritual maintenance of a force.',
            'Success of war is not measured by': 'the number of casualties inflicted.',
        },
        explanation: 'Each term is matched with its corresponding description as provided in the document.'
    },
    {
        type: 'match',
        question: 'Match each term with its correct description:',
        pairs: {
            'The escort role involves': 'the assignment of aircraft to protect other ac during a mission.',
            'Surveillance is': 'the systematic observation of aerospace, surface and sub-surface areas, places, persons or objects by visual, aural, photographic, electronic or other means.',
            'CAS is defined': 'as air attack against targets which are so close to friendly force that detailed integration of each air mission with the fire and movement of those force is required.',
            'Reconnaissance is': 'the obtaining, by visual observation or other detection methods, of information about activities and resources of an enemy or securing of data concerning the meteorological, hydrographic or geographical characteristics of a particular area.',
            'BAl is defined': 'as air action hostile land targets in a position directly to affect friendly forces which require joint planning and coordination.'
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