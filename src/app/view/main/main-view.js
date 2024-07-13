import '../main/main.css'
import View from '../view';

const cssClasses = {
    MAIN: 'main'
}

const TEXT = 'this IS MAIN-baby'

export default class MainView extends View {
    /**
    * @type {import('../../utils/element-creator').ElementParams}
    * */
    constructor () {
        const params = {
            tag: 'main',
            classNames: [cssClasses.MAIN],
            textContent: TEXT,
            callback: null,
        }
        super(params)
    }
}
