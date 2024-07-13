import CreateElement from '../../utils/create-element';
import '../header/header.css'
import View from '../view';



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
        this.configureView()
    }



    configureView () {
        const paramsNav = {
            tag: 'nav',
            classNames: [cssClasses.NAV],
            textContent: '',
            callback: null,
        }

        const creatorNav = new CreateElement(paramsNav);
        this.elementCreator.addInnerElement(creatorNav);
    }
}
