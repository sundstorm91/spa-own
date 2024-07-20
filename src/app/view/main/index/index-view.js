import '../index/index.css';
import View from '../../view';
import InputCreateField from '../../../utils/input-field/input-creator';

const cssClasses = {
    INDEX: 'index'
}
const FIELD_TEXT_ONE = 'Поле для ввода данных 1';
const FIELD_TEXT_TWO = 'Поле для ввода данных 2';

export default class IndexView extends View {
    constructor () {
        const params = {
            tag: 'section',
            classNames: [cssClasses.INDEX],
            textContent: '',
            callback: null,
        }
        super(params)
        this.configureView();
        /* this.firstField = '';
        this.secondField = ''; */
    }

    configureView() {
        const inputFirst = {
            tag: 'input',
            classNames: [],
            textContent: FIELD_TEXT_ONE,
            callback: (event) => this.keyupHandler(event, 'firstInput'),
        }

        const firstInputCreator = new InputCreateField(inputFirst);
        this.elementCreator.addInnerElement(firstInputCreator.getElement())

        /* === */

        const inputTwo = {
            tag: 'input',
            classNames: [],
            textContent: FIELD_TEXT_TWO,
            callback: (event) => this.keyupHandler(event, 'secondInput'),
        }

        const secondInputCreator = new InputCreateField(inputTwo);
        this.elementCreator.addInnerElement(secondInputCreator.getElement())
    }

    keyupHandler (event, fieldname) {
        if (event.target instanceof HTMLInputElement) {
            this[fieldname] = event.target.value;
        }
    }
}