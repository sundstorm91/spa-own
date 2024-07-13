import '../main/main.css'
import View from '../view';

const cssClasses = {
    MAIN: 'main'
}

//const TEXT = 'this footer create by using SPA'

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
}
