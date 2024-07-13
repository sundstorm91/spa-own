import '../footer/footer.css'
import CreateElement from '../../utils/create-element';

const cssClasses = {
    MAIN: 'main'
}

//const TEXT = 'this footer create by using SPA'

export default class MainView {
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
            tag: 'main',
            classNames: [cssClasses.MAIN],
            textContent: '',
            callback: null,
        }

        const elementCreator = new CreateElement(footerParams)


        return elementCreator;
    }




}
