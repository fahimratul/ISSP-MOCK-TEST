const quizData = [
    // MCQ Questions (1–10)
    {
        type: 'mcq',
        question: 'There are how many basic degrees of control of the air?',
        options: ['10', '4', '3', '8'],
        answer: '4',
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
        question: 'What is a temporary change of assignment of Air Forces between subordinate Commands?',
        options: ['Allotment', 'Apportionment', 'Allocation', 'Tasking'],
        answer: 'Allotment',
        explanation: 'Allotment is a temporary change of assignment of air forces between subordinate commands.'
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
        question: 'Characteristics of air transport operation are:',
        options: ['Speed and load', 'Strategic and tactical air lift', 'Concentration and economy of effort', 'Surveillance and reconnaissance'],
        answer: 'Strategic and tactical air lift',
        explanation: 'Air transport operations are characterized by strategic airlift (between theaters) and tactical airlift (within a theater).'
    },
    {
        type: 'mcq',
        question: 'The following is not a principle of war:',
        options: ['Selection and maintenance of aim', 'Economy of effort', 'Maintenance of morale', 'Defensive action'],
        answer: 'Defensive action',
        explanation: 'Principles of war include selection and maintenance of aim, economy of effort, and maintenance of morale, but defensive action is a strategy, not a principle.'
    },
    {
        type: 'mcq',
        question: 'An element of active defence is:',
        options: ['Dispersal', 'Mobility', 'SAM', 'Concealment'],
        answer: 'SAM',
        explanation: 'Surface-to-Air Missiles (SAM) are part of active defense, unlike dispersal, mobility, and concealment, which are elements of passive defense.'
    },
    {
        type: 'mcq',
        question: 'OCAO does not include the following offensive role:',
        options: ['SEAD', 'Intercepting or engaging the target(s)', 'Surface attack', 'Fighter sweep'],
        answer: 'Intercepting or engaging the target(s)',
        explanation: 'Offensive Counter-Air Operations (OCAO) include SEAD, surface attack, and fighter sweeps, but intercepting or engaging targets is typically a defensive counter-air role.'
    },
    {
        type: 'mcq',
        question: 'What is airspace of defined dimensions within which the ready identification, location, and control of airborne vehicles are required?',
        options: ['BDZ', 'EEZ', 'WPZ', 'ADIZ'],
        answer: 'ADIZ',
        explanation: 'Air Defense Identification Zone (ADIZ) is airspace where identification, location, and control of aircraft are required for security purposes.'
    },
    // True/False Questions (11–20)
    {
        type: 'tf',
        question: 'War is the violent applications of force to achieve political goals.',
        answer: 'True',
        explanation: 'War involves the use of organized violence to achieve political objectives, as per Clausewitz’s definition.'
    },
    {
        type: 'tf',
        question: 'In war, one can never be absolutely certain about what the enemy plans, so there is always some degree of uncertainty.',
        answer: 'True',
        explanation: 'War is characterized by uncertainty due to the unpredictability of enemy intentions and actions.'
    },
    {
        type: 'tf',
        question: 'Speed, reach, and height allow air power to concentrate military force.',
        answer: 'True',
        explanation: 'Speed, reach, and height enable air power to rapidly concentrate force at critical points.'
    },
    {
        type: 'tf',
        question: 'Economy of effort is one of the Principles of War.',
        answer: 'True',
        explanation: 'Economy of effort is a recognized principle of war, emphasizing the efficient use of resources to achieve objectives.'
    },
    {
        type: 'tf',
        question: 'Air supremacy means enemy air force capable of effective interference.',
        answer: 'False',
        explanation: 'Air supremacy means the enemy air force is incapable of effective interference, allowing complete control of the air.'
    },
    {
        type: 'tf',
        question: 'A favourable air situation is one in which the extent of air effort applied by the enemy air forces is insufficient to prejudice the success of friendly land, maritime, or air operations.',
        answer: 'True',
        explanation: 'A favorable air situation means enemy air efforts are insufficient to disrupt friendly operations.'
    },
    {
        type: 'tf',
        question: 'The objective of OCAO is to protect friendly forces and vital interests from enemy aircraft/UAV and missile attacks.',
        answer: 'False',
        explanation: 'The objective of Offensive Counter-Air Operations (OCAO) is to destroy or neutralize enemy air capabilities, not to protect friendly forces, which is the role of Defensive Counter-Air Operations.'
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
        question: 'BAF personnel are no strangers to UCW.',
        answer: 'True',
        explanation: 'Bangladesh Air Force (BAF) personnel have experience with Unconventional Warfare (UCW), as indicated by the context of regional conflicts.'
    },
    // Fill-in-the-Blank as MCQ (21–30)
    {
        type: 'mcq',
        question: 'The tactical level of war involves the direction of military resources to achieve ____ objectives.',
        options: ['Strategic', 'Operational', 'Tactical', 'Policy'],
        answer: 'Operational',
        explanation: 'The tactical level focuses on directing military resources to achieve specific tactical objectives in battles or engagements.'
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
        question: 'A favourable air situation is one in which the extent of air effort applied by the enemy air forces is ____ the success of friendly land, sea, or air operations.',
        options: ['Insufficient to prejudice', 'Equal to', 'Greater than', 'Critical to'],
        answer: 'Insufficient to prejudice',
        explanation: 'A favorable air situation means enemy air efforts are insufficient to disrupt friendly operations.'
    },
    {
        type: 'mcq',
        question: '____ provides quick results and raises the morale of friendly troops.',
        options: ['Close Air Support', 'Strategic bombing', 'Air interdiction', 'Reconnaissance'],
        answer: 'Close Air Support',
        explanation: 'Close Air Support (CAS) provides quick results and boosts friendly troop morale by directly supporting ground forces.'
    },
    {
        type: 'mcq',
        question: 'Bangladesh pursues purely ____ policies, which seek to preserve national and international security and stability.',
        options: ['Defensive', 'Offensive', 'Neutral', 'Economic'],
        answer: 'Defensive',
        explanation: 'Bangladesh pursues defensive policies focused on preserving national and international security and stability.'
    },
    {
        type: 'mcq',
        question: '____ war is the armed struggle between major powers in which all the national resources of the belligerents are likely to be harnessed to the war effort.',
        options: ['Total', 'Limited', 'Unconventional', 'Guerrilla'],
        answer: 'Total',
        explanation: 'Total war involves the complete mobilization of national resources by major powers for the war effort.'
    },
    {
        type: 'mcq',
        question: 'The protracted instability in Chattragram Hill Tracts (CHT) can be regarded as a form of ____.',
        options: ['Terrorism', 'Insurgency', 'Regional war', 'Civil war'],
        answer: 'Insurgency',
        explanation: 'The protracted instability in Chattragram Hill Tracts is considered a form of unconventional warfare due to its irregular and asymmetric nature.'
    },
    {
        type: 'mcq',
        question: '____ is a temporary change of assignment of Air Forces between subordinate Commands.',
        options: ['Allocation', 'Apportionment', 'Tasking', 'Allotment'],
        answer: 'Allotment',
        explanation: 'the protracted instability in Chattragram Hill Tracts (CHT) can be regarded as a form of insurgency.'
    },
    {
        type: 'mcq',
        question: '____ is the ability of a force to maintain the necessary level of combat power for the duration required to achieve its objectives.',
        options: ['Sustainability', 'Mobility', 'Flexibility', 'Endurance'],
        answer: 'Sustainability',
        explanation: 'Sustainability refers to a force’s ability to maintain combat power over time to achieve its objectives.'
    },
    // Matching Questions (31–40)
    {
        type: 'match',
        question: 'Match each term with its correct description:',
        pairs: {
            'According to Clausewitz, war is not merely an act of policy but': 'a true political instrument, a continuation of political intercourse carried on with other means.',
            'A significant war effort cannot be sustained': 'by a democratic state in the face of public hostility or indifference.',
            'Fighter sweep involves': 'offensive action by fighter ac to seek out and destroy enemy aircraft or targets of opportunity in an allocated area of operations.',
            'As technology started to catch up with new concepts,': 'air power steadily grew from support role to become a dominating force.',
            'Air power exploits the third dimension,': 'which is a very different environment to operate and fight.',
        },
        explanation: 'Each term is matched with its corresponding description as provided in the document.'
    },
    {
        type: 'match',
        question: 'Match each term with its correct description:',
        pairs: {
            'Concentration of purpose is the creation of desired effects through': 'deliberate application of air power at the right time and the right place.',
            'BMI is defined': 'as air action hostile land targets in a position directly to affect friendly forces which require joint planning and coordination.',
            'Historically, air forces have tended to foster': 'an ethos which is different from those at sea or an land.',
            'C2 is the exercise of authority and direction by a property': 'designated commander over assigned and attached forces in the accomplishment of the mission.',
            'A favourable air situation is one in which the extent of air effort applied by': 'the enemy air forces is insufficient to prejudice the success of friendly land, maritime or air operations.'
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