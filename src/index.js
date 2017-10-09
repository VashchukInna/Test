'use strict';

import './style.scss';
import authorization from './authorization';
import router from './router';
import Menu from './menu';

class Init {
    init = () => {
        let menu = new Menu(router, authorization);
        router.moveRouteChange = function (hash) {
            menu.init();
        };
        menu.init();
    };
}

(new Init()).init();