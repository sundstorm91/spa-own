import '../header/header.css'
import CreateElement from '../../utils/create-element';

const cssClasses = {
    HEADER: 'header'
}

const TEXT = 'this footer create by using SPA'

export default class HeaderView {
    constructor () {
        this.elementCreator = this.createView()
    }


    /**
    * @return {HTMLElement}
    */
    getHTMLElement() {
        return this.elementCreator.getElement();
    }


    /**
    * @param {import('../../utils/create-element').ElementParams} params
    * @return {elementCreator}
    */
    createView () {
        const footerParams = {
            tag: 'header',
            classNames: [cssClasses.HEADER],
            textContent: '',
            callback: null,
        }

        const elementCreator = new CreateElement(footerParams)

        return elementCreator;
    }




}
