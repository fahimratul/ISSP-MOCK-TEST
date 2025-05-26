const quizData = [
    // MCQ Questions (1–15)
    {
        type: 'mcq',
        question: 'Vietnam war can be considered as what type of war in Vietnamese perspective?',
        options: ['General War', 'Total War', 'Limited War', 'Regional War'],
        answer: 'Limited War',
        explanation: 'From the Vietnamese perspective, the Vietnam War was a limited war, focused on specific political objectives within a defined region, rather than a total or general war involving all national resources.'
    },
    {
        type: 'mcq',
        question: 'Which of the following is a key principle of war?',
        options: ['Selection and maintenance of aim', 'Maintenance of Morale', 'Economy of effort', 'Use of arms'],
        answer: 'Selection and maintenance of aim',
        explanation: 'Selection and maintenance of aim is a key principle of war, ensuring focus on a clear objective. While morale and economy of effort are also principles, the question implies a single correct choice.'
    },
    {
        type: 'mcq',
        question: 'Which of the following is the highest-level body in dealing with defence matters?',
        options: ['NCSA', 'DCC', 'MOD', 'AFD'],
        answer: 'MOD',
        explanation: 'The Ministry of Defence (MOD) is typically the highest-level body responsible for defense matters in a nation.'
    },
    {
        type: 'mcq',
        question: 'Which of the following is not an input of the doctrinal process?',
        options: ['Force Structure', 'National Interest', 'Policy', 'Perceived Threat'],
        answer: 'Force Structure',
        explanation: 'The doctrinal process is driven by inputs like national interest, policy, and perceived threat, but force structure is an outcome or implementation aspect, not an input.'
    },
    {
        type: 'mcq',
        question: 'Which of the following limitations of airpower is most difficult to overcome?',
        options: ['Base dependence', 'Weather', 'Impermanence', 'Payload'],
        answer: 'Base dependence',
        explanation: 'Base dependence is the most difficult limitation to overcome, as airpower relies heavily on fixed infrastructure, which is vulnerable to attack and logistically challenging.'
    },
    {
        type: 'mcq',
        question: 'Which of the following is the moral component of air power?',
        options: ['Doctrine', 'Strategy', 'Personnel', 'Leadership'],
        answer: 'Leadership',
        explanation: 'Leadership is the moral component of air power, as it inspires and motivates personnel, shaping morale and commitment.'
    },
    {
        type: 'mcq',
        question: 'The determination of the total expected effort by percentage for various air operations for a given period is known as:',
        options: ['Allocation', 'Apportionment', 'Allotment', 'Strategic estimate'],
        answer: 'Apportionment',
        explanation: 'Apportionment is the process of determining the percentage of total expected effort allocated to various air operations over a given period.'
    },
    {
        type: 'mcq',
        question: 'Which of the following campaigns is required for gaining a degree of control of the air?',
        options: ['Counter Air campaign', 'Strategic air campaign', 'Anti-surface force campaign', 'Air campaigns for strategic effect'],
        answer: 'Counter Air campaign',
        explanation: 'A Counter Air campaign is specifically aimed at achieving and maintaining control of the air by neutralizing enemy air capabilities.'
    },
    {
        type: 'mcq',
        question: 'Which of the following is not an advantage of OCAO?',
        options: ['Achieve a higher sortie rate', 'Seize the initiative', 'Forces enemy to carry out OCAO', 'Exploit the full capabilities of airpower'],
        answer: 'Forces enemy to carry out OCAO',
        explanation: 'Offensive Counter-Air Operations (OCAO) advantages include higher sortie rates, seizing the initiative, and exploiting airpower capabilities, but forcing the enemy to conduct OCAO is not a direct advantage.'
    },
    {
        type: 'mcq',
        question: 'Which of the following is not true about Air Interdiction?',
        options: ['Fought beyond FSCL', 'Detailed integration is required with land forces', 'Needs to be sustained for better results', 'Less effective against guerilla forces'],
        answer: 'Detailed integration is required with land forces',
        explanation: 'Air Interdiction is conducted beyond the Fire Support Coordination Line (FSCL) and does not require detailed integration with land forces, unlike Close Air Support (CAS).'
    },
    {
        type: 'mcq',
        question: 'Air operation in support of unconventional warfare by Special Forces employing modified equipment and unconventional tactics falls under:',
        options: ['Surgical Strike', 'Air assault', 'Airmobile operations', 'Special air operations'],
        answer: 'Special air operations',
        explanation: 'Special air operations support unconventional warfare by Special Forces using modified equipment and tactics.'
    },
    {
        type: 'mcq',
        question: 'Use of chaff, flares, noise jamming, or deception jamming falls under which EW?',
        options: ['Electronic Support Measures', 'Electronic Counter Measures', 'Electronic Counter Counter Measures', 'Electronic Protective Measures'],
        answer: 'Electronic Counter Measures',
        explanation: 'Chaff, flares, noise jamming, and deception jamming are Electronic Counter Measures (ECM) used to disrupt enemy electronic systems.'
    },
    {
        type: 'mcq',
        question: 'Which of the tenets of airpower can result from the optimum blend of values, morale, conviction, faith in leadership, training standards, etc.?',
        options: ['Qualitative Edge', 'High Tempo', 'Centralized Control', 'Balance'],
        answer: 'Qualitative Edge',
        explanation: 'Qualitative Edge results from an optimal blend of values, morale, leadership faith, and training standards, giving air forces a superior capability.'
    },
    {
        type: 'mcq',
        question: 'The science of planning and carrying out the movement and maintenance of forces is:',
        options: ['Logistics', 'Planning', 'Tactics', 'Transportation'],
        answer: 'Logistics',
        explanation: 'Logistics is the science of planning and executing the movement and maintenance of forces.'
    },
    {
        type: 'mcq',
        question: 'The process of diplomacy, mediation, negotiation, or other forms of peaceful settlements that arranges an end to a dispute falls under:',
        options: ['Peace Keeping Operation', 'Peace Enforcement Operation', 'Peace Making Operation', 'Peace Building Operation'],
        answer: 'Peace Making Operation',
        explanation: 'Peace Making Operations involve diplomacy, mediation, and negotiation to resolve disputes peacefully.'
    },
    // True/False Questions (16–30)
    {
        type: 'tf',
        question: 'Success in war can be determined by the extent of damage caused to the belligerent.',
        answer: 'False',
        explanation: 'Success in war is measured by the achievement of political objectives, not merely the extent of damage caused.'
    },
    {
        type: 'tf',
        question: 'The degree of dominance in a favorable air situation is higher than that in local air superiority for an area of operation.',
        answer: 'False',
        explanation: 'Local air superiority implies a higher degree of dominance in a specific area compared to a favorable air situation, which is less dominant.'
    },
    {
        type: 'tf',
        question: 'Allocation is the temporary assignment of air forces between subordinate commands.',
        answer: 'True',
        explanation: 'Allocation involves the temporary distribution of air forces to subordinate commands for specific missions.'
    },
    {
        type: 'tf',
        question: 'Concentration of force is one of the Principles of War.',
        answer: 'True',
        explanation: 'Concentration of force is a recognized principle of war, emphasizing the massing of forces to achieve decisive results.'
    },
    {
        type: 'tf',
        question: 'Combat-support air operations are defined as the major nonflying activities needed to support air operations.',
        answer: 'True',
        explanation: 'Combat-support air operations include nonflying activities like logistics and maintenance that support air missions.'
    },
    {
        type: 'tf',
        question: 'The strategic air offensive involves the use of air power to strike directly and with precision at the enemy’s strategic CG.',
        answer: 'True',
        explanation: 'Strategic air offensives target the enemy’s strategic center of gravity (CG), such as political or industrial infrastructure, with precision.'
    },
    {
        type: 'tf',
        question: 'Joint doctrine describes the best way to integrate and employ air forces with the forces of the allies in coalition warfare.',
        answer: 'True',
        explanation: 'Joint doctrine outlines the integration of air forces with allied land and naval forces in coalition warfare.'
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
        question: 'AI is carried within the range of surface delivered weapons, and thus detailed integration of air operations with friendly land forces is required.',
        answer: 'False',
        explanation: 'Air Interdiction (AI) is conducted beyond the range of surface-delivered weapons (FSCL) and does not require detailed integration with land forces, unlike CAS.'
    },
    {
        type: 'tf',
        question: 'AWACS should be deployed at the outermost layer of a layered air defence.',
        answer: 'True',
        explanation: 'Airborne Warning and Control System (AWACS) aircraft are deployed at the outermost layer of layered air defense to provide early warning and control.'
    },
    {
        type: 'tf',
        question: 'Barrier AD is employed between own maritime forces and the threat.',
        answer: 'True',
        explanation: 'Barrier Air Defense (AD) is positioned between friendly maritime forces and potential threats to protect naval assets.'
    },
    {
        type: 'tf',
        question: 'SAO is very much affected by political constraints.',
        answer: 'True',
        explanation: 'Strategic Air Offensive (SAO) operations are heavily influenced by political constraints due to their strategic impact and potential for escalation.'
    },
    {
        type: 'tf',
        question: 'Airmobile operations is mainly the movement of combat forces to an objective area.',
        answer: 'True',
        explanation: 'Airmobile operations involve the movement of combat forces, typically by helicopter, to an objective area.'
    },
    {
        type: 'tf',
        question: 'Any nation may establish ADIZ within her territorial boundary excluding the EEZ.',
        answer: 'False',
        explanation: 'An Air Defense Identification Zone (ADIZ) often extends beyond territorial boundaries, including parts of the Exclusive Economic Zone (EEZ), to ensure early warning.'
    },
    // Matching Questions (31–40)
    {
        type: 'match',
        question: 'Match each term with its correct description:',
        pairs: {
            'The aim of Fighter Sweep is': 'to sankize any enemy air-to-air threat in an allocated area of operations.',
            'The strategic aim of SAO is': 'to undermine the enemy’s ability and will to continue with his aggression.',
            'Air roles are prosecuted': 'through tasks, missions and sorties.',
            'The more formidable the opposing air power': 'the more important this task becomes.',
            'Allotment is the temporary change of assignment of': 'air forces between subordinate commands.',
            'HDACZ is an area in which there is a concentrated': 'employment of numerous and varied weapons or airspace users.',
            'Doctrine is an accumulation of knowledge which is': 'gained primarily from the study and analysis of experience.',
            'Air power today can achieve strategic, operational, and tactical objectives': 'with the use of lethal and nonlethal means.',
            'Air power was at first introduced into the war scenario': 'in support of surface operations.',
            'Airspace control is a combination of': 'procedures, and the resulting control structures and coordinating functions.'
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