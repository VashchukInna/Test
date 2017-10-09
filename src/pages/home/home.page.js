'use strict';

import Page from '../page';
import homePageContent from './home.page.html';
/*import {loadNewPage,
 buildQuiz,
 showResults,
 showSlide,
 updatePreviousButton,
 updateNextButton,
 showNextSlide,
 showPreviousSlide,
 showHomePage} from './test.page';*/

class HomePage extends Page {
    constructor(url) {
        super(url);
        this.content = homePageContent;
    }
}

const homePage = new HomePage('#/');

export default homePage;