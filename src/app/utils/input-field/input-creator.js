import CreateElement from "../create-element";
import '../input-field/input-field.css';

const cssClasses = {
    FIELD_CONTAINER: 'field__container',
    FIELD_CONTAINER__REVERSE: 'field__container_reverse',
}

export default class InputCreateField extends CreateElement {

    createElement(params) {
        console.log(params.textContent)
        this.element = document.createElement('div');
        this.element.classList.add(cssClasses.FIELD_CONTAINER);

        /* params.classNames.forEach((name) => {
            this.element.classList.add(name)
        }) */

        /* ! */
        this.setCallback(params.callback)
        this.inputElement = document.createElement('input');
        this.labelElement = document.createElement('label');

        this.setTextContent(params.textContent)
        this.element.append(this.labelElement,this.inputElement)
    }

    setValue(value) {
        this.inputElement.value = value;
    }

    setTextContent(text = '') {
        this.labelElement.textContent = text
    }

    setCallback(callback) {
        if (typeof callback === 'function') {
            this.element.addEventListener('keyup', (event) => callback(event))
        }
    }
}