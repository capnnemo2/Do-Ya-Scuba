// Questions array
const STORE = {
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
        question: 'What is the definition of "enriched air nitrox" (EANx)?'
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
}

// variable to store question number and score
let questionNumber = 0;
let score = 0;

function handleQuiz() {
    
}