import '../header/header.css'
import View from '../view';
import '../header/nav.css';


const cssClasses = {
    HEADER: 'header',
    NAV: 'nav',
}

//const TEXT = 'this footer create by using SPA'

export default class HeaderView extends View {
    /**
    * @type {import('../../utils/element-creator').ElementParams}
    * */
    constructor () {
        const params = {
            tag: 'header',
            classNames: [cssClasses.HEADER],
            textContent: '',
            callback: null,
        }
        super(params)
    }
}
