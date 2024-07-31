import '../index/index.css';
import View from '../../view';
import InputCreateField from '../../../utils/input-field/input-creator';
import State from '../../../state/state';
const cssClasses = {
    INDEX: 'index',
    PROBA: 'proba',
}
const FIELD_TEXT_ONE = 'Поле для ввода данных 1';
const FIELD_TEXT_TWO = 'Поле для ввода данных 2';

export default class IndexView extends View {
    constructor (state) {
        const params = {
            tag: 'section',
            classNames: [cssClasses.INDEX],
            textContent: '',
            callback: null,
        }

        super(params);
        this.state = state;

        this.configureView(state);

    }

    configureView(state) {

        const inputFirst = {
            textContent: FIELD_TEXT_ONE,
            callback: (event) => this.keyupHandler(event, FIELD_TEXT_ONE),
        }

        const firstInputCreator = new InputCreateField(inputFirst);
        firstInputCreator.setValue(state.getValue(FIELD_TEXT_ONE));
        this.elementCreator.addInnerElement(firstInputCreator.getElement());

        /* === */

        const inputTwo = {
            textContent: FIELD_TEXT_TWO,
            callback: (event) => this.keyupHandler(event, FIELD_TEXT_TWO),
        }

        const secondInputCreator = new InputCreateField(inputTwo);
        secondInputCreator.setValue(state.getValue(FIELD_TEXT_TWO))
        this.elementCreator.addInnerElement(secondInputCreator.getElement())
    }

     /**
     * @param {KeyboardEvent} event
     * @param {string} fieldName
     */
    keyupHandler (event, fieldname) {

        if (event.target instanceof HTMLInputElement) {
            this.state.setValue(fieldname, event.target.value)
        }
    }
}