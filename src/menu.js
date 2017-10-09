'use strict';

import _ from 'lodash';

class Menu {
    constructor(router, authorization) {
        this.createMenu = [
            {
                name: 'Home',
                path: '#/',
            },
            {
                name: 'Login',
                path: '#/login',
            },
            {
                name: 'Admin',
                path: '#/admin',
            },
            {
                name: 'Logout',
                path: '#/logout',
            }
        ];
        this.authorization = authorization;
        this.router = router;
    }

    createLinkElement = (name, hash) => {

        let a = document.createElement('a');
        let callThis = this;
        a.innerHTML = name;
        a.setAttribute('href', hash);
        a.addEventListener('click', function (e) {
            callThis.router.renderPage(hash);
        });
        return a;
    };

    init = () => {
        let saveThis = this;
        let userMenu = document.getElementById('user-menu');
        userMenu.innerHTML = '';
        _.each(this.createMenu, ({name, path}) => {
            saveThis.includeLinkToTheMenu(name, path);
        });
    };

    includeLinkToTheMenu = (name, path) => {
        let userMenu = document.getElementById('user-menu');
        if (this.authorization.giveAccessToUrl(path)) {
            let li = document.createElement('li');
            let link = this.createLinkElement(name, path);
            li.appendChild(link);
            userMenu.appendChild(li);
        }
    };
}

export default Menu;