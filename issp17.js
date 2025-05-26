const quizData = [
    // MCQ Questions (1–10)
    {
        type: 'mcq',
        question: 'The characteristics of war is:',
        options: ['War is an instrument of Theory', 'War is an act of Peace', 'War is the Province of Uncertainty', 'Leadership is optional in War'],
        answer: 'War is the Province of Uncertainty',
        explanation: 'War is characterized by uncertainty due to its complex and unpredictable nature, as described in military theory.'
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
        answer: 'Height',
        explanation: 'While height is a characteristic of air power, its primary strengths are reach, flexibility, and speed, which enable rapid and versatile operations.'
    },
    {
        type: 'mcq',
        question: 'Which is not a principle of war?',
        options: ['Flexibility', 'Economy of effort', 'Violence', 'Surprise'],
        answer: 'Violence',
        explanation: 'Principles of war include economy of effort, surprise, and others, but violence is not a recognized principle; it is an inherent aspect of war.'
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
        explanation: 'Tasking involves translating allocations into specific orders for units to execute missions.'
    },
    {
        type: 'mcq',
        question: 'Which is not an OCA operation?',
        options: ['SEAD', 'Fighter Sweep', 'Air to air refueling', 'Air Field Attack'],
        answer: 'Air to air refueling',
        explanation: 'Offensive Counter-Air (OCA) operations include SEAD, fighter sweeps, and airfield attacks, but air-to-air refueling is a support function, not an OCA operation.'
    },
    {
        type: 'mcq',
        question: 'Air to air refueling is divided into which two roles?',
        options: ['Towline & Trail', 'Area refueling & Point Refueling', 'Peacetime and Wartime', 'Entry point & Exit point'],
        answer: 'Towline & Trail',
        explanation: 'Air-to-air refueling is categorized into area refueling (conducted in a designated area) and point refueling (at a specific location).'
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
        explanation: 'Military Operations Other Than War (MOOTW) include arms control, combating terrorism, and humanitarian assistance, but electronic warfare (EW) operations are a tactical function, not a type of MOOTW.'
    },
    // True/False Questions (11–20)
    {
        type: 'tf',
        question: 'Policy is a guidance that is authoritative, not directive.',
        answer: 'True',
        explanation: 'Policy provides authoritative guidance to shape actions but is not as prescriptive as directives.'
    },
    {
        type: 'tf',
        question: 'Sole purpose of war is not to achieve political objectives.',
        answer: 'False',
        explanation: 'War is the continuation of policy by other means, and its primary purpose is to achieve political objectives.'
    },
    {
        type: 'tf',
        question: 'The national morale or will-power of a nation is the basis of its military effectiveness.',
        answer: 'True',
        explanation: 'National morale and will-power significantly influence a nation’s military effectiveness, as they affect the commitment and resilience of its forces.'
    },
    {
        type: 'tf',
        question: 'Strategy-to-task shapes priorities and seeks to avoid fragmented efforts to fragmented objectives.',
        answer: 'True',
        explanation: 'Strategy-to-task ensures alignment of priorities to achieve cohesive objectives, avoiding fragmented efforts.'
    },
    {
        type: 'tf',
        question: 'Conventional SAO operations can be carried out by manned aircraft only.',
        answer: 'False',
        explanation: ' Conventional SAO operations can be carried out either by pure Ballistic/Cruise missile (BM/CM) system or by manned aircraft.'
    },
    {
        type: 'tf',
        question: 'CSAR operations should only be undertaken if the prospects of success are strong or if there is an overriding operational reason to rescue the downed aircrew.',
        answer: 'True',
        explanation: ' CSAR operations should only be undertaken if the prospects of success are strong or if there is an over-riding operational reason to rescue the downed aircrew.'
    },
    {
        type: 'tf',
        question: 'Air Superiority means enemy air force incapable of effective interference.',
        answer: 'True',
        explanation: 'Air superiority is achieved when the enemy’s air force cannot effectively interfere with friendly operations.'
    },
    {
        type: 'tf',
        question: 'Procedural airspace control is less restrictive than positive airspace control but is more vulnerable to interference by electronic and physical attack.',
        answer: 'False',
        explanation: 'This method is more restrictive than positive airspace control but is less vulnerable to interference by electronic and physical attack.'
    },
    {
        type: 'tf',
        question: 'BAI is defined as air action against hostile land targets in a position directly to affect friendly forces, which requires joint planning and coordination.',
        answer: 'True',
        explanation: 'Battlefield Air Interdiction (BAI) targets enemy forces that directly threaten friendly forces, requiring joint coordination.'
    },
    {
        type: 'tf',
        question: 'ESM are electronic measures which involve passive techniques to get a warning of detection, target acquisition, and engagement.',
        answer: 'True',
        explanation: 'Electronic Support Measures (ESM) use passive techniques to detect and warn of enemy electronic activity, such as radar detection.'
    },
    // Fill-in-the-Blank as MCQ (21–30)
    {
        type: 'mcq',
        question: '‘Dispersal of Assets’ is known as ____ air defence.',
        options: ['Passive', 'Active', 'Offensive', 'Defensive'],
        answer: 'Passive',
        explanation: 'Dispersal of assets is a passive air defense measure aimed at reducing vulnerability to enemy attacks.'
    },
    {
        type: 'mcq',
        question: 'AAR enables aircraft to take-off at ____ weights, permitting greater opportunities for short-field operations with greater weapon loads.',
        options: ['Higher', 'Lower', 'Standard', 'Variable'],
        answer: 'Lower',
        explanation: 'Aircraft to take-off at lower weights, permitting greater opportunities for short-field operations (and hence dispersal) with greater weapon loads.'
    },
    {
        type: 'mcq',
        question: 'There are ____ basic methods of exercising airspace control.',
        options: ['2', '3', '4', '5'],
        answer: '2',
        explanation: 'Airspace control methods include positive control and procedural control.'
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
        question: 'A sortie is defined as ____ flight by one aircraft.',
        options: ['A single', 'A coordinated', 'A tactical', 'A strategic'],
        answer: 'A single',
        explanation: 'A sortie is defined as a single flight by one aircraft for a specific mission.'
    },
    {
        type: 'mcq',
        question: 'Conventional ____ can be conducted for political signaling purposes, to coerce an adversary, or as an integrated element of a theatre campaign.',
        options: ['Strategic air offensive', 'Close air support', 'Air interdiction', 'Reconnaissance'],
        answer: 'Strategic air offensive',
        explanation: 'Conventional Strategic Air Offensive (SAO) operations can serve political signaling, coercion, or theater campaign integration.'
    },
    {
        type: 'mcq',
        question: 'The lower the overall force-to-space ratio within a theatre of operations, the more favorable the conditions for ____ air action.',
        options: ['Offensive', 'Defensive', 'Strategic', 'Tactical'],
        answer: 'Offensive',
        explanation: 'A lower force-to-space ratio creates more favorable conditions for offensive air action due to reduced enemy concentration.'
    },
    {
        type: 'mcq',
        question: '____ operation promotes high morale amongst aircrew.',
        options: ['Training', 'Search and Rescue', 'Logistical', 'Support'],
        answer: 'Search and Rescue',
        explanation: 'Search and Rescue operations promote high morale among aircrew by ensuring support and recovery in case of emergencies.'
    },
    {
        type: 'mcq',
        question: '____ is of crucial importance not only to air operations, but also to virtually all types of surface and sub-surface operations.',
        options: ['Control of the air', 'Air interdiction', 'Close air support', 'Surveillance'],
        answer: 'Control of the air',
        explanation: 'Control of the air is critical to enabling effective air, surface, and sub-surface operations by preventing enemy interference.'
    },
    // Matching Questions (31–40)
    {
        type: 'match',
        question: 'Match each term with its correct description:',
        pairs: {
            'The aim of DCAO is to minimize the damage sustained by friendly forces and facilities.': 'To inflict the maximum attrition on the enemy.',
            'Surveillance is the systematic observation': 'of aerospace, surface and sub-surface areas.',
            'Air power has the unique ability to exploit': 'the third dimension above the surface of the Earth.',
            'War often results where disputes arise over matters such as territory, sovereignty, resources, and ideology,': 'and where a solution either fails, is not sought, or is thwarted.',
            'The provision of air power is inherently joint, combined and multinational in nature.': 'Encompasses forces drawn from all three Services.'
        },
        explanation: 'Each term is matched with its corresponding description as provided in the document.'
    },
    {
        type: 'match',
        question: 'Match each term with its correct description:',
        pairs: {
            'The air war must be taken to the': 'enemy’s own territory.',
            'Airspace control is a combination of': 'airspace organization and planning procedures.',
            'Fighter sweep is an offensive role of OCAO utilizing AD fighters to sweep through a designated area of enemy airspace to seek out and destroy opponent’s aircraft or targets of opportunity.': 'The aim is to sanitize any enemy air-to-air threat in an allocated area of operations.',
            'The strategic aim of counter-air campaign is to achieve and maintain': 'the required degree of control of the air.',
            'The basic difference between BMI and CAS lies': 'in the proximity of targets to friendly forces and the control arrangements.',
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