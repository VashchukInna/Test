'use strict';

const TEST_USER_NAME = 'testUsername';
class Page {
    constructor(url = '', content = '') {
        this.url = url;
        this.content = content;
    }

    render = () => {
        document.querySelector('#page').innerHTML = this.content;
        this.pageIsRendered();
    };

    setAuthorization = (authorization) => {
        this.authorization = authorization;
    };

    pageIsRendered = () => {
    };
}

export default Page;