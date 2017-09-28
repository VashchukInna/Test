'use strict';

import './style.scss';

let mainSubmitButon = document.querySelector('.button-submit');

let loadNewPage = () => {

    let intro = document.querySelector('#intro');
    intro.style.display = 'none';

    let test = document.querySelector('#test');
    test.style.display = 'block';

    // add h2 to test variable

    let title1 = '<h2>Hello ';
    let title2 = document.getElementById('username').value;
    let title3 = ', let us start!</h2>';

    test.querySelector('#title').innerHTML = title1 + title2 + title3;
};

const myQuestions = [
    {
        question: 'How to append a value to an array of JavaScript?',
        answers: {
            a: 'arr[arr.length] = value',
            b: 'arr[arr.length+1] = new Arrays()',
            c: 'arr[arr.length-1] = value',
            d: 'arr[arr.length*1] = value'
        },
        correctAnswer: ['a'],
        typeOfQuestion: 'radio'
    },
    {
        question: 'Which built-in method calls a function for each element in the array?',
        answers: {
            a: 'while()',
            b: 'loop()',
            c: 'forEach()',
            d: 'None of the above'
        },
        correctAnswer: ['c'],
        typeOfQuestion: 'radio'
    },
    {
        question: 'Which of the following statements are true for JavaScript?',
        answers: {
            a: 'JavaScript is case sensitive',
            b: 'JavaScript statements can be grouped together in blocks',
            c: 'Semicolon at the end of statement is mandatory',
            d: 'All of the above'
        },
        correctAnswer: ['a', 'b'],
        typeOfQuestion: 'checkbox'
    },
    {
        question: '"JavaScript is also called client-side Javascript" by ',
        answers: {
            ' ': ''
        },
        correctAnswer: ['Navigator'],
        typeOfQuestion: 'text'
    },
    {
        question: 'Which of the following are capable of JavaScript functions?',
        answers: {
            a: 'Returning multiple values',
            b: 'Accepting parameters and returning values',
            c: 'Accepting parameters',
            d: 'All of the above'
        },
        correctAnswer: ['d'],
        typeOfQuestion: 'radio'
    },
    {
        question: 'Which is the correct way to write a JavaScript array?',
        answers: {
            a: 'var txt = new Array(1:"arr",2:"kim",3:"jim")',
            b: 'var txt = new Array:1=(" arr ")2=("kim")3=("jim")',
            c: 'var txt = new Array("arr ","kim","jim")',
            d: 'var txt = new Array=" arr ","kim","jim"'
        },
        correctAnswer: ['c'],
        typeOfQuestion: 'radio'
    },
    {
        question: 'How does JavaScript store dates in objects of Date type?',
        answers: {
            a: 'The number of days since January 1st, 1900',
            b: 'The number of seconds since January 1st, 1970',
            c: 'The number of milliseconds since January 1st, 1970',
            d: 'The number of picoseconds since January 1st, 1970"'
        },
        correctAnswer: ['c'],
        typeOfQuestion: 'radio'
    },
    {
        question: 'Which of the following statements are false for JavaScript?',
        answers: {
            a: 'Variable names are not case sensitive',
            b: 'Variable names must begin with a letter or the underscore character',
            c: 'Var is used to declare a variable',
            d: 'Both b and c above'
        },
        correctAnswer: ['a'],
        typeOfQuestion: 'radio'
    },
    {
        question: 'Which of the following is the tainted property of a window object in JavaScript?',
        answers: {
            a: 'Pathname',
            b: 'Protocol',
            c: 'Defaultstatus',
            d: 'Host'
        },
        correctAnswer: ['c'],
        typeOfQuestion: 'radio'
    },
    {
        question: 'What type of image maps could be used with JavaScript?',
        answers: {
            a: 'Client-side image maps',
            b: 'Server-side image maps',
            c: 'Both A and B',
            d: 'Localhost image maps'
        },
        correctAnswer: ['a'],
        typeOfQuestion: 'radio'
    }
];

function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];

        // and for each available answer...
        for (let letter in currentQuestion.answers) {
            // ...add an HTML radio button
            let separator = currentQuestion.typeOfQuestion === 'text' ? '' : ':';
            answers.push(
                `<label>
                <input type='${currentQuestion.typeOfQuestion}' name='question${questionNumber}' value='${letter}'>
                ${letter} ${separator}
                ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        // add this question and its answers to the output
        output.push(
            `<div class='slide'>
            <div class='question'> ${currentQuestion.question} </div>
            <div class='answers'> ${answers.join('')} </div>
            </div>`
        );
    });

    //combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}

function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        let userAnswer = '';
        let selector = `input[name=question${questionNumber}]:checked`;
        userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer.join('')) {
            // add to the number of correct answers
            numCorrect++;

            // color the answers green
            answerContainers[questionNumber].style.color = 'green';
        } else {
            // if answer is wrong or blank
            // color the answers red
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;

    updatePreviousButton();
    updateNextButton();
}

function updatePreviousButton() {
    if (currentSlide === 0) {
        previousButton.style.display = 'none';
    } else {
        previousButton.style.display = 'inline-block';
    }
}

function updateNextButton() {
    if (currentSlide === slides.length - 1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    } else {
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}


function showNextSlide() {
    showSlide(currentSlide + 1);
}

function showPreviousSlide() {
    showSlide(currentSlide - 1);
}

function showHomePage() {
    let intro = document.querySelector('#intro');
    intro.style.display = 'block';

    let test = document.querySelector('#test');
    test.style.display = 'none';

    let userName = document.getElementById('username');
    userName.value = '';

}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const goToTestButton = document.getElementById('goToStartTest');

// display quiz right away
buildQuiz();

const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

showSlide(0);

// on submit, show results
submitButton.addEventListener('click', showResults);
previousButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);
goToTestButton.addEventListener('click', showHomePage);


mainSubmitButon.addEventListener('click', loadNewPage);