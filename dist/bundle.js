/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var mainSubmitButon = document.querySelector('.button-submit');

var loadNewPage = function loadNewPage() {

    var intro = document.querySelector('#intro');
    intro.style.display = 'none';

    var test = document.querySelector('#test');
    test.style.display = 'block';

    // add h2 to test variable

    var title1 = '<h2>Hello ';
    var title2 = document.getElementById('username').value;
    var title3 = ', let us start!</h2>';

    test.querySelector('#title').innerHTML = title1 + title2 + title3;
};

var myQuestions = [{
    question: 'How to append a value to an array of JavaScript?',
    answers: {
        a: 'arr[arr.length] = value',
        b: 'arr[arr.length+1] = new Arrays()',
        c: 'arr[arr.length-1] = value',
        d: 'arr[arr.length*1] = value'
    },
    correctAnswer: ['a'],
    typeOfQuestion: 'radio'
}, {
    question: 'Which built-in method calls a function for each element in the array?',
    answers: {
        a: 'while()',
        b: 'loop()',
        c: 'forEach()',
        d: 'None of the above'
    },
    correctAnswer: ['c'],
    typeOfQuestion: 'radio'
}, {
    question: 'Which of the following statements are true for JavaScript?',
    answers: {
        a: 'JavaScript is case sensitive',
        b: 'JavaScript statements can be grouped together in blocks',
        c: 'Semicolon at the end of statement is mandatory',
        d: 'All of the above'
    },
    correctAnswer: ['a', 'b'],
    typeOfQuestion: 'checkbox'
}, {
    question: '"JavaScript is also called client-side Javascript" by ',
    answers: {
        ' ': ''
    },
    correctAnswer: ['Navigator'],
    typeOfQuestion: 'text'
}, {
    question: 'Which of the following are capable of JavaScript functions?',
    answers: {
        a: 'Returning multiple values',
        b: 'Accepting parameters and returning values',
        c: 'Accepting parameters',
        d: 'All of the above'
    },
    correctAnswer: ['d'],
    typeOfQuestion: 'radio'
}];

function buildQuiz() {
    // we'll need a place to store the HTML output
    var output = [];

    // for each question...
    myQuestions.forEach(function (currentQuestion, questionNumber) {
        // we'll want to store the list of answer choices
        var answers = [];

        // and for each available answer...
        for (var letter in currentQuestion.answers) {
            // ...add an HTML radio button
            var separator = currentQuestion.typeOfQuestion === 'text' ? '' : ':';
            answers.push('<label>\n                <input type=\'' + currentQuestion.typeOfQuestion + '\' name=\'question' + questionNumber + '\' value=\'' + letter + '\'>\n                ' + letter + ' ' + separator + '\n                ' + currentQuestion.answers[letter] + '\n                </label>');
        }
        // add this question and its answers to the output
        output.push('<div class=\'slide\'>\n            <div class=\'question\'> ' + currentQuestion.question + ' </div>\n            <div class=\'answers\'> ' + answers.join('') + ' </div>\n            </div>');
    });

    //combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}

function showResults() {
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    var numCorrect = 0;

    // for each question...
    myQuestions.forEach(function (currentQuestion, questionNumber) {
        // find selected answer
        var answerContainer = answerContainers[questionNumber];
        var userAnswer = '';
        var selector = 'input[name=question' + questionNumber + ']:checked';
        userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer.join('')) {
            // add to the number of correct answers
            numCorrect++;

            // color the answers green
            answerContainers[questionNumber].style.color = 'lightgreen';
        } else {
            // if answer is wrong or blank
            // color the answers red
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
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
    var intro = document.querySelector('#intro');
    intro.style.display = 'block';

    var test = document.querySelector('#test');
    test.style.display = 'none';

    var userName = document.getElementById('username');
    userName.value = '';
}

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var goToTestButton = document.getElementById('goToStartTest');

// display quiz right away
buildQuiz();

var previousButton = document.getElementById('previous');
var nextButton = document.getElementById('next');
var slides = document.querySelectorAll('.slide');
var currentSlide = 0;

showSlide(0);

// on submit, show results
submitButton.addEventListener('click', showResults);
previousButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);
goToTestButton.addEventListener('click', showHomePage);

mainSubmitButon.addEventListener('click', loadNewPage);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjk5ZDRmMTcyMDI1YzA2NDA0ZGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbIm1haW5TdWJtaXRCdXRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxvYWROZXdQYWdlIiwiaW50cm8iLCJzdHlsZSIsImRpc3BsYXkiLCJ0ZXN0IiwidGl0bGUxIiwidGl0bGUyIiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsInRpdGxlMyIsImlubmVySFRNTCIsIm15UXVlc3Rpb25zIiwicXVlc3Rpb24iLCJhbnN3ZXJzIiwiYSIsImIiLCJjIiwiZCIsImNvcnJlY3RBbnN3ZXIiLCJ0eXBlT2ZRdWVzdGlvbiIsImJ1aWxkUXVpeiIsIm91dHB1dCIsImZvckVhY2giLCJjdXJyZW50UXVlc3Rpb24iLCJxdWVzdGlvbk51bWJlciIsImxldHRlciIsInNlcGFyYXRvciIsInB1c2giLCJqb2luIiwicXVpekNvbnRhaW5lciIsInNob3dSZXN1bHRzIiwiYW5zd2VyQ29udGFpbmVycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJudW1Db3JyZWN0IiwiYW5zd2VyQ29udGFpbmVyIiwidXNlckFuc3dlciIsInNlbGVjdG9yIiwiY29sb3IiLCJyZXN1bHRzQ29udGFpbmVyIiwibGVuZ3RoIiwic2hvd1NsaWRlIiwibiIsInNsaWRlcyIsImN1cnJlbnRTbGlkZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInVwZGF0ZVByZXZpb3VzQnV0dG9uIiwidXBkYXRlTmV4dEJ1dHRvbiIsInByZXZpb3VzQnV0dG9uIiwibmV4dEJ1dHRvbiIsInN1Ym1pdEJ1dHRvbiIsInNob3dOZXh0U2xpZGUiLCJzaG93UHJldmlvdXNTbGlkZSIsInNob3dIb21lUGFnZSIsInVzZXJOYW1lIiwiZ29Ub1Rlc3RCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1h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YWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjk5ZDRmMTcyMDI1YzA2NDA0ZGUiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxubGV0IG1haW5TdWJtaXRCdXRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tc3VibWl0Jyk7XG5cbmxldCBsb2FkTmV3UGFnZSA9ICgpID0+IHtcblxuICAgIGxldCBpbnRybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnRybycpO1xuICAgIGludHJvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICBsZXQgdGVzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXN0Jyk7XG4gICAgdGVzdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgIC8vIGFkZCBoMiB0byB0ZXN0IHZhcmlhYmxlXG5cbiAgICBsZXQgdGl0bGUxID0gJzxoMj5IZWxsbyAnO1xuICAgIGxldCB0aXRsZTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcm5hbWUnKS52YWx1ZTtcbiAgICBsZXQgdGl0bGUzID0gJywgbGV0IHVzIHN0YXJ0ITwvaDI+JztcblxuICAgIHRlc3QucXVlcnlTZWxlY3RvcignI3RpdGxlJykuaW5uZXJIVE1MID0gdGl0bGUxICsgdGl0bGUyICsgdGl0bGUzO1xufTtcblxuY29uc3QgbXlRdWVzdGlvbnMgPSBbXG4gICAge1xuICAgICAgICBxdWVzdGlvbjogJ0hvdyB0byBhcHBlbmQgYSB2YWx1ZSB0byBhbiBhcnJheSBvZiBKYXZhU2NyaXB0PycsXG4gICAgICAgIGFuc3dlcnM6IHtcbiAgICAgICAgICAgIGE6ICdhcnJbYXJyLmxlbmd0aF0gPSB2YWx1ZScsXG4gICAgICAgICAgICBiOiAnYXJyW2Fyci5sZW5ndGgrMV0gPSBuZXcgQXJyYXlzKCknLFxuICAgICAgICAgICAgYzogJ2FyclthcnIubGVuZ3RoLTFdID0gdmFsdWUnLFxuICAgICAgICAgICAgZDogJ2FyclthcnIubGVuZ3RoKjFdID0gdmFsdWUnXG4gICAgICAgIH0sXG4gICAgICAgIGNvcnJlY3RBbnN3ZXI6IFsnYSddLFxuICAgICAgICB0eXBlT2ZRdWVzdGlvbjogJ3JhZGlvJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBxdWVzdGlvbjogJ1doaWNoIGJ1aWx0LWluIG1ldGhvZCBjYWxscyBhIGZ1bmN0aW9uIGZvciBlYWNoIGVsZW1lbnQgaW4gdGhlIGFycmF5PycsXG4gICAgICAgIGFuc3dlcnM6IHtcbiAgICAgICAgICAgIGE6ICd3aGlsZSgpJyxcbiAgICAgICAgICAgIGI6ICdsb29wKCknLFxuICAgICAgICAgICAgYzogJ2ZvckVhY2goKScsXG4gICAgICAgICAgICBkOiAnTm9uZSBvZiB0aGUgYWJvdmUnXG4gICAgICAgIH0sXG4gICAgICAgIGNvcnJlY3RBbnN3ZXI6IFsnYyddLFxuICAgICAgICB0eXBlT2ZRdWVzdGlvbjogJ3JhZGlvJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBxdWVzdGlvbjogJ1doaWNoIG9mIHRoZSBmb2xsb3dpbmcgc3RhdGVtZW50cyBhcmUgdHJ1ZSBmb3IgSmF2YVNjcmlwdD8nLFxuICAgICAgICBhbnN3ZXJzOiB7XG4gICAgICAgICAgICBhOiAnSmF2YVNjcmlwdCBpcyBjYXNlIHNlbnNpdGl2ZScsXG4gICAgICAgICAgICBiOiAnSmF2YVNjcmlwdCBzdGF0ZW1lbnRzIGNhbiBiZSBncm91cGVkIHRvZ2V0aGVyIGluIGJsb2NrcycsXG4gICAgICAgICAgICBjOiAnU2VtaWNvbG9uIGF0IHRoZSBlbmQgb2Ygc3RhdGVtZW50IGlzIG1hbmRhdG9yeScsXG4gICAgICAgICAgICBkOiAnQWxsIG9mIHRoZSBhYm92ZSdcbiAgICAgICAgfSxcbiAgICAgICAgY29ycmVjdEFuc3dlcjogWydhJywgJ2InXSxcbiAgICAgICAgdHlwZU9mUXVlc3Rpb246ICdjaGVja2JveCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcXVlc3Rpb246ICdcIkphdmFTY3JpcHQgaXMgYWxzbyBjYWxsZWQgY2xpZW50LXNpZGUgSmF2YXNjcmlwdFwiIGJ5ICcsXG4gICAgICAgIGFuc3dlcnM6IHtcbiAgICAgICAgICAgICcgJzogJydcbiAgICAgICAgfSxcbiAgICAgICAgY29ycmVjdEFuc3dlcjogWydOYXZpZ2F0b3InXSxcbiAgICAgICAgdHlwZU9mUXVlc3Rpb246ICd0ZXh0J1xuICAgIH0sXG4gICAge1xuICAgICAgICBxdWVzdGlvbjogJ1doaWNoIG9mIHRoZSBmb2xsb3dpbmcgYXJlIGNhcGFibGUgb2YgSmF2YVNjcmlwdCBmdW5jdGlvbnM/JyxcbiAgICAgICAgYW5zd2Vyczoge1xuICAgICAgICAgICAgYTogJ1JldHVybmluZyBtdWx0aXBsZSB2YWx1ZXMnLFxuICAgICAgICAgICAgYjogJ0FjY2VwdGluZyBwYXJhbWV0ZXJzIGFuZCByZXR1cm5pbmcgdmFsdWVzJyxcbiAgICAgICAgICAgIGM6ICdBY2NlcHRpbmcgcGFyYW1ldGVycycsXG4gICAgICAgICAgICBkOiAnQWxsIG9mIHRoZSBhYm92ZSdcbiAgICAgICAgfSxcbiAgICAgICAgY29ycmVjdEFuc3dlcjogWydkJ10sXG4gICAgICAgIHR5cGVPZlF1ZXN0aW9uOiAncmFkaW8nXG4gICAgfSxcbl07XG5cbmZ1bmN0aW9uIGJ1aWxkUXVpeigpIHtcbiAgICAvLyB3ZSdsbCBuZWVkIGEgcGxhY2UgdG8gc3RvcmUgdGhlIEhUTUwgb3V0cHV0XG4gICAgY29uc3Qgb3V0cHV0ID0gW107XG5cbiAgICAvLyBmb3IgZWFjaCBxdWVzdGlvbi4uLlxuICAgIG15UXVlc3Rpb25zLmZvckVhY2goKGN1cnJlbnRRdWVzdGlvbiwgcXVlc3Rpb25OdW1iZXIpID0+IHtcbiAgICAgICAgLy8gd2UnbGwgd2FudCB0byBzdG9yZSB0aGUgbGlzdCBvZiBhbnN3ZXIgY2hvaWNlc1xuICAgICAgICBjb25zdCBhbnN3ZXJzID0gW107XG5cbiAgICAgICAgLy8gYW5kIGZvciBlYWNoIGF2YWlsYWJsZSBhbnN3ZXIuLi5cbiAgICAgICAgZm9yIChsZXQgbGV0dGVyIGluIGN1cnJlbnRRdWVzdGlvbi5hbnN3ZXJzKSB7XG4gICAgICAgICAgICAvLyAuLi5hZGQgYW4gSFRNTCByYWRpbyBidXR0b25cbiAgICAgICAgICAgIGxldCBzZXBhcmF0b3IgPSBjdXJyZW50UXVlc3Rpb24udHlwZU9mUXVlc3Rpb24gPT09ICd0ZXh0JyA/ICcnIDogJzonO1xuICAgICAgICAgICAgYW5zd2Vycy5wdXNoKFxuICAgICAgICAgICAgICAgIGA8bGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9JyR7Y3VycmVudFF1ZXN0aW9uLnR5cGVPZlF1ZXN0aW9ufScgbmFtZT0ncXVlc3Rpb24ke3F1ZXN0aW9uTnVtYmVyfScgdmFsdWU9JyR7bGV0dGVyfSc+XG4gICAgICAgICAgICAgICAgJHtsZXR0ZXJ9ICR7c2VwYXJhdG9yfVxuICAgICAgICAgICAgICAgICR7Y3VycmVudFF1ZXN0aW9uLmFuc3dlcnNbbGV0dGVyXX1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPmBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYWRkIHRoaXMgcXVlc3Rpb24gYW5kIGl0cyBhbnN3ZXJzIHRvIHRoZSBvdXRwdXRcbiAgICAgICAgb3V0cHV0LnB1c2goXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz0nc2xpZGUnPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ncXVlc3Rpb24nPiAke2N1cnJlbnRRdWVzdGlvbi5xdWVzdGlvbn0gPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdhbnN3ZXJzJz4gJHthbnN3ZXJzLmpvaW4oJycpfSA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgKTtcbiAgICB9KTtcblxuICAgIC8vY29tYmluZSBvdXIgb3V0cHV0IGxpc3QgaW50byBvbmUgc3RyaW5nIG9mIEhUTUwgYW5kIHB1dCBpdCBvbiB0aGUgcGFnZVxuICAgIHF1aXpDb250YWluZXIuaW5uZXJIVE1MID0gb3V0cHV0LmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiBzaG93UmVzdWx0cygpIHtcbiAgICAvLyBnYXRoZXIgYW5zd2VyIGNvbnRhaW5lcnMgZnJvbSBvdXIgcXVpelxuICAgIGNvbnN0IGFuc3dlckNvbnRhaW5lcnMgPSBxdWl6Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbnN3ZXJzJyk7XG5cbiAgICAvLyBrZWVwIHRyYWNrIG9mIHVzZXIncyBhbnN3ZXJzXG4gICAgbGV0IG51bUNvcnJlY3QgPSAwO1xuXG4gICAgLy8gZm9yIGVhY2ggcXVlc3Rpb24uLi5cbiAgICBteVF1ZXN0aW9ucy5mb3JFYWNoKChjdXJyZW50UXVlc3Rpb24sIHF1ZXN0aW9uTnVtYmVyKSA9PiB7XG4gICAgICAgIC8vIGZpbmQgc2VsZWN0ZWQgYW5zd2VyXG4gICAgICAgIGNvbnN0IGFuc3dlckNvbnRhaW5lciA9IGFuc3dlckNvbnRhaW5lcnNbcXVlc3Rpb25OdW1iZXJdO1xuICAgICAgICBsZXQgdXNlckFuc3dlciA9ICcnO1xuICAgICAgICBsZXQgc2VsZWN0b3IgPSBgaW5wdXRbbmFtZT1xdWVzdGlvbiR7cXVlc3Rpb25OdW1iZXJ9XTpjaGVja2VkYDtcbiAgICAgICAgdXNlckFuc3dlciA9IChhbnN3ZXJDb250YWluZXIucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgfHwge30pLnZhbHVlO1xuXG4gICAgICAgIC8vIGlmIGFuc3dlciBpcyBjb3JyZWN0XG4gICAgICAgIGlmICh1c2VyQW5zd2VyID09PSBjdXJyZW50UXVlc3Rpb24uY29ycmVjdEFuc3dlci5qb2luKCcnKSkge1xuICAgICAgICAgICAgLy8gYWRkIHRvIHRoZSBudW1iZXIgb2YgY29ycmVjdCBhbnN3ZXJzXG4gICAgICAgICAgICBudW1Db3JyZWN0Kys7XG5cbiAgICAgICAgICAgIC8vIGNvbG9yIHRoZSBhbnN3ZXJzIGdyZWVuXG4gICAgICAgICAgICBhbnN3ZXJDb250YWluZXJzW3F1ZXN0aW9uTnVtYmVyXS5zdHlsZS5jb2xvciA9ICdsaWdodGdyZWVuJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIGFuc3dlciBpcyB3cm9uZyBvciBibGFua1xuICAgICAgICAgICAgLy8gY29sb3IgdGhlIGFuc3dlcnMgcmVkXG4gICAgICAgICAgICBhbnN3ZXJDb250YWluZXJzW3F1ZXN0aW9uTnVtYmVyXS5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBzaG93IG51bWJlciBvZiBjb3JyZWN0IGFuc3dlcnMgb3V0IG9mIHRvdGFsXG4gICAgcmVzdWx0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBgJHtudW1Db3JyZWN0fSBvdXQgb2YgJHtteVF1ZXN0aW9ucy5sZW5ndGh9YDtcbn1cblxuZnVuY3Rpb24gc2hvd1NsaWRlKG4pIHtcbiAgICBzbGlkZXNbY3VycmVudFNsaWRlXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtc2xpZGUnKTtcbiAgICBzbGlkZXNbbl0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXNsaWRlJyk7XG4gICAgY3VycmVudFNsaWRlID0gbjtcblxuICAgIHVwZGF0ZVByZXZpb3VzQnV0dG9uKCk7XG4gICAgdXBkYXRlTmV4dEJ1dHRvbigpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQcmV2aW91c0J1dHRvbigpIHtcbiAgICBpZiAoY3VycmVudFNsaWRlID09PSAwKSB7XG4gICAgICAgIHByZXZpb3VzQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJldmlvdXNCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTmV4dEJ1dHRvbigpIHtcbiAgICBpZiAoY3VycmVudFNsaWRlID09PSBzbGlkZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICBuZXh0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBzaG93TmV4dFNsaWRlKCkge1xuICAgIHNob3dTbGlkZShjdXJyZW50U2xpZGUgKyAxKTtcbn1cblxuZnVuY3Rpb24gc2hvd1ByZXZpb3VzU2xpZGUoKSB7XG4gICAgc2hvd1NsaWRlKGN1cnJlbnRTbGlkZSAtIDEpO1xufVxuXG5mdW5jdGlvbiBzaG93SG9tZVBhZ2UoKSB7XG4gICAgbGV0IGludHJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ludHJvJyk7XG4gICAgaW50cm8uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICBsZXQgdGVzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXN0Jyk7XG4gICAgdGVzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgbGV0IHVzZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJuYW1lJyk7XG4gICAgdXNlck5hbWUudmFsdWUgPSAnJztcblxufVxuXG5jb25zdCBxdWl6Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aXonKTtcbmNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cycpO1xuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdCcpO1xuY29uc3QgZ29Ub1Rlc3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29Ub1N0YXJ0VGVzdCcpO1xuXG4vLyBkaXNwbGF5IHF1aXogcmlnaHQgYXdheVxuYnVpbGRRdWl6KCk7XG5cbmNvbnN0IHByZXZpb3VzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpb3VzJyk7XG5jb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQnKTtcbmNvbnN0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZScpO1xubGV0IGN1cnJlbnRTbGlkZSA9IDA7XG5cbnNob3dTbGlkZSgwKTtcblxuLy8gb24gc3VibWl0LCBzaG93IHJlc3VsdHNcbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dSZXN1bHRzKTtcbnByZXZpb3VzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1ByZXZpb3VzU2xpZGUpO1xubmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dOZXh0U2xpZGUpO1xuZ29Ub1Rlc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93SG9tZVBhZ2UpO1xuXG5cbm1haW5TdWJtaXRCdXRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWROZXdQYWdlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==