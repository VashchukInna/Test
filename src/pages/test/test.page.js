'use strict';

import Page from '../page';
import testPageContent from '../test/test.page.html';

class TestPage extends Page {

    constructor(url) {
        super(url);
        this.content = testPageContent;
        this.currentSlide = 0;
    }

    pageIsRendered = () => {

        this.myQuestions = [
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

        this.quizContainer = document.getElementById('quiz');
        this.submitButton = document.getElementById('submit');
        this.resultsContainer = document.getElementById('results');
        // display quiz right away
        this.buildQuiz();
        this.previousButton = document.getElementById('previous');
        this.nextButton = document.getElementById('next');
        this.slides = document.querySelectorAll('.slide');
        this.showSlide(0);

        // on submit, show results
        this.previousButton.addEventListener('click', this.showPreviousSlide);
        this.nextButton.addEventListener('click', this.showNextSlide);

        this.submitButton.addEventListener('click', this.showResults);

        // add h2 to test variable
        let title1 = '<h2>Hello ';
        let title2 = window.localStorage.getItem('testUsername');
        let title3 = ', let us start!</h2>';
        window.localStorage.removeItem('testUsername');

        test.querySelector('#title').innerHTML = title1 + title2 + title3;
    };


    buildQuiz = () => {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        this.myQuestions.forEach((currentQuestion, questionNumber) => {
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
        this.quizContainer.innerHTML = output.join('');
    };

    showResults = () => {
        // gather answer containers from our quiz
        const answerContainers = this.quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        this.myQuestions.forEach((currentQuestion, questionNumber) => {
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
        this.resultsContainer.innerHTML = `${numCorrect} out of ${this.myQuestions.length}`;
    };

    showSlide = (n) => {
        this.slides[this.currentSlide].classList.remove('active-slide');
        this.slides[n].classList.add('active-slide');
        this.currentSlide = n;

        this.updatePreviousButton();
        this.updateNextButton();
    };

    updatePreviousButton = () => {
        if (this.currentSlide === 0) {
            this.previousButton.style.display = 'none';
        } else {
            this.previousButton.style.display = 'inline-block';
        }
    };

    updateNextButton = () => {
        if (this.currentSlide === this.slides.length - 1) {
            this.nextButton.style.display = 'none';
            this.submitButton.style.display = 'inline-block';
        } else {
            this.nextButton.style.display = 'inline-block';
            this.submitButton.style.display = 'none';
        }
    };


    showNextSlide = () => {
        this.showSlide(this.currentSlide + 1);
    };

    showPreviousSlide = () => {
        this.showSlide(this.currentSlide - 1);
    };
}

const testPage = new TestPage('#/test');

export default testPage;