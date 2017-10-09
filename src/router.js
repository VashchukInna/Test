'use strict';

import {find} from 'lodash';
import homePage from './pages/home/home.page';
import loginPage from './pages/login/login.page';
import adminPage from './pages/admin/admin.page';
import authorization from './authorization';

let pages = [
    homePage,
    loginPage,
    adminPage
];

class Router {
    constructor(authorization) {
        this.authorization = authorization;
        this.renderPage(window.location.hash);
    }

    getToUrl = (url) => {
        window.location.href = url;
        this.renderPage(url);

        this.moveRouteChange(url);
    };

    showHomePage = () => {
        this.getToUrl('#/');
    };

    renderPage(url) {
        if (!this.authorization.giveAccessToUrl(url)) {
            return this.showHomePage();
        }
        if (url === '#/logout') {
            this.authorization.logout();
            return this.showHomePage();
        }
        let findPages = find(pages, {url});
        if (!findPages) {
            findPages = homePage;
        }
        findPages.setAuthorization(authorization);
        findPages.render();
        this.moveRouteChange(url);
    };

    moveRouteChange = () => {
    };
}

export default new Router(authorization);