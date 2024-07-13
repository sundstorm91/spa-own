import '../footer/footer.css'
import CreateElement from '../../utils/create-element';

const cssClasses = {
    FOOTER: 'footer'
}

const TEXT = 'this footer create by using SPA'

export default class FooterView {
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
            tag: 'footer',
            classNames: [cssClasses.FOOTER],
            textContent: TEXT,
            callback: null,
        }

        const elementCreator = new CreateElement(footerParams)


        return elementCreator;
    }




}
