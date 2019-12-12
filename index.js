// Questions array
const STORE = [
    // question 1
    {
        question: 'What does SCUBA stand for?',
        options: ['Superbly Challenging Underwater Bubble Actuator',
        'Sea Cell Ultimate Breathing Appliance',
        'Self Contained Breathing Apparatus',
        'Super Charged Ultimate Breathing Apparatus'
        ],
        answer: 'Self Contained Breathing Apparatus'
    },
    // question 2
    {
        question: 'How deep can a newly certified diver go?',
        options: ['60 feet / 18 meters',
        '40 feet / 12 meters',
        '85 feet / 26 meters',
        '100 feet / 30 meters'],
        answer: '60 feet / 18 meters'
    },
    // question 3
    {
        question: 'If caught in a rip current, a person should:',
        options: ['Descend immediately',
        'Drop all gear and swim directly to shore',
        'Shout for help',
        'Swim at a right angle to the current'],
        answer: 'Swim at a right angle to the current'
    },
    // question 4
    {
        question: 'What gases are in a scuba tank filled with "air," and in what proportions?',
        options: ['100% oxygen',
        '24% oxygen, 27% dinitrous monoxide, 49% nitrogen',
        '21% oxygen, 79% nitrogen',
        '10% oxygen, 10% carbon monoxide, 10% methane, 30% hydrogen, 40% nitrogen'],
        answer: '21% oxygen, 79% nitrogen'
    },
    // question 5
    {
        question: 'What is the recreational diving limit?',
        options: ['100 feet / 30 meters',
        '200 feet / 60 meters',
        '130 feet / 40 meters',
        '165 feet / 50 meters'],
        answer: '130 feet / 40 meters'
    },
    // question 6
    {
        question: 'What is the definition of "enriched air nitrox" (EANx)?',
        options: ['Any nitrox mix with more than 49% nitrogen',
        'Any nitrox mix with more than 21% oxygen',
        '100% oxygen',
        'Regular air enriched with selected flavors'],
        answer: 'Any nitrox mix with more than 21% oxygen'
    },
    // question 7
    {
        question: 'The most amazing, and true, fact about the mantis shrimp is:',
        options: ['They have 12 color receptors in their eyes (we have three), which allows them to perceive ultraviolet and polarized light',
        'Some species live monogamously for 20 years, cohabitating with their partner and coordinating behaviors so that they equally share parental care and hunting',
        'Those with clubs strike at a speed of 23 meters/second, fast enough to create cavitation bubbles which, upon collapse, release energy in the form of heat (8500 degree F) and light, and create a shockwave. This means each time they strike, it hits four times: 2 clubs striking with an initial force equal to a .22 caliber bullet, and the subsequent, aforementioned shockwaves for each club',
        'All of the above!'],
        answer: 'All of the above!'
    }
];

// variables to store question number and score
let questionNumber = 0;
let score = 0;

// this function will begin the quiz
function beginQuiz() {
    console.log(`ran beginQuiz`);
    // questionNumber = 0;
    // score = 0;
    $('.question').hide();
    $('.answer').hide();
    $('.final').hide();
    $('.welcome').show();
    $('.welcome').on('click', '#begin', function(e) {
        $('.welcome').hide();
        askQuestion();
    });
}

// will generate question form with options and submit button. will display questionNumber and score
function questionGenerator(questionId) {
    let questionScore = $(`<ul class="nav"><li>Question: ${questionNumber + 1} / 7</li><li>Score: ${score}</li></ul>`)

    // there should be a way to use a loop to create the following, but it works, so leave it for now. if I store value="${STORE[questionId].options[i]" for each input then can retrieve value for checkAnswer rather than searching for the html in the label: $(input:checked).val();
    let questionForm = $(`<form id="question-form"><fieldset><legend>${STORE[questionId].question}</legend>
    <input type="radio" name="answer" id="answer1" required>
    <label for="answer1">${STORE[questionId].options[0]}</label>
    <br>
    <input type="radio" name="answer" id="answer2" required>
    <label for="answer2">${STORE[questionId].options[1]}</label>
    <br>
    <input type="radio" name="answer" id="answer3" required>
    <label for="answer3">${STORE[questionId].options[2]}</label>
    <br>
    <input type="radio" name="answer" id="answer4" required>
    <label for="answer4">${STORE[questionId].options[3]}</label>
    <br>
    <button type="submit" id="submit-button">Submit</button>
    </fieldset></form>`);
    $(questionForm).appendTo(questionScore);
    return $('.question').html(questionScore);
};

// if there are questions remaining, will ask question. otherwise will jump to finishQuiz
function generateQuestion() {
    return questionGenerator(questionNumber);
}

// this function will ask a question and provide answer options
function askQuestion() {
    console.log(`ran askQuestion`);
    $('.question').show();
    $('.question').prepend(generateQuestion());
}

// this function will check the user answer against the true answer and provide feeback
// don't know why checkAnswer can't find user input answer
function checkAnswer() {
    $('.main-container').on('submit', function(event) {
        event.preventDefault();
        $('.question').hide();
        $('.answer').show();
        console.log(`ran checkAnswer`);
        let selectedOption = $(`label[for=${$("input[name=answer]:checked").attr("id")}]`).html();
        let correctAnswer = STORE[questionNumber].answer;
        if (selectedOption === correctAnswer) {
            answerCorrect();
        } else {
            answerIncorrect();
        }
    });
}

// this function will run if the user answered correctly
function answerCorrect() {
    console.log(`ran answerCorrect`);
    addAPoint();
    let questionScore = $(`<ul class="nav"><li>Question: ${questionNumber + 1} / 7</li><li>Score: ${score}</li></ul>`);
    $('.answer').html(`<h2>Your answer is correct!</h2>
    <button type="button" id="next-button">Next</button>`);
    $('.answer').prepend(questionScore);
    
}

// this function will run if the user answered incorrectly
function answerIncorrect() {
    console.log(`ran answerIncorrect`);
    let questionScore = $(`<ul class="nav"><li>Question: ${questionNumber + 1} / 7</li><li>Score: ${score}</li></ul>`);
    $('.answer').html(`<h2>Your answer is incorrect.</h2><br><p>The correct answer is: ${STORE[questionNumber].answer}</p>
    <button type="button" id="next-button">Next</button>`);
    $('.answer').prepend(questionScore);
}

// this function will run after user gets answerCorrect or answerIncorrect and pushes #next-button
function nextQuestion() {
    $('.main-container').on('click', '#next-button', function(event) {
        $('.answer').hide();
        $('.question').show();
        console.log(`ran nextQuestion`);
        questionAddANumber();
        if (questionNumber < STORE.length) {
            $('.question').replaceWith(generateQuestion);
        } else {
            $('.question').hide();
            $('.answer').show();
            finishQuiz();
        }
    })
}

// this function will provide user with final score and the option to restart
function finishQuiz() {
    console.log(`ran finishQuiz`);
    $('.question').hide();
    $('.answer').hide();
    $('.final').show();
    $('.final').html(`<h2>You scored ${score} out of 7.</h2><br><p>Would you like to try again?</p><button type="button" id="restart-button">Restart</button>`);
}

// this function will execute restarting the quiz, including resetting the score and question #
function restartQuiz() {
    $('.main-container').on('click', '#restart-button', function(e) {
        questionNumber = 0;
        score = 0;
        beginQuiz();
    });
}

// this function will add a point to the user score
function addAPoint() {
    console.log(`ran addAPoint`);
    score += 1;
}

// this function will keep track of the question #
function questionAddANumber() {
    console.log(`ran questionAddANumber`);
    questionNumber += 1;

}

// this is where the magic happens
function handleQuiz() {
    console.log(`ran handleQuiz`);
    beginQuiz();
    checkAnswer();
    nextQuestion();
    restartQuiz();
}

$(handleQuiz);