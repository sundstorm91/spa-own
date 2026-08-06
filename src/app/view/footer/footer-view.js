import '../footer/footer.css'
import View from '../view';

const cssClasses = {
    FOOTER: 'footer'
}

const TEXT = 'this footer create by using SPA'

export default class FooterView extends View {
    /**
    * @type {import('../../utils/element-creator').ElementParams}
    * */
    constructor () {
        const params = {
            tag: 'footer',
            classNames: [cssClasses.FOOTER],
            textContent: TEXT,
            callback: null,
        }
        super(params)
    }
}
