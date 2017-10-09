'use strict';

import Page from '../page';
import homePageContent from './home.page.html';
import router from '../../router';

class HomePage extends Page {
    constructor(url) {
        super(url);
        this.content = homePageContent;
    }

    pageIsRendered = () => {
        let mainSubmitButton = document.querySelector('.button-submit');
        mainSubmitButton.addEventListener('click', function () {
            window.localStorage.setItem('testUsername', document.getElementById('username').value);
            router.getToUrl('#/test');
        });
    }
}

const homePage = new HomePage('#/');

export default homePage;