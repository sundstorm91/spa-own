import '../main/main.css'
import View from '../view';

const cssClasses = {
    MAIN: 'main'
}



export default class MainView extends View {
    /**
    * @type {import('../../utils/element-creator').ElementParams}
    * */
    constructor () {
        const params = {
            tag: 'main',
            classNames: [cssClasses.MAIN],
            textContent: '',
            callback: null,
        }
        super(params)
    }

    setContent (view) {

        const element = view.getHTMLElement();
        const currentElement = this.elementCreator.getElement();

        while (currentElement.firstElementChild) {
            currentElement.innerHTML = ''
        }

        this.elementCreator.addInnerElement(element)

    }
}
