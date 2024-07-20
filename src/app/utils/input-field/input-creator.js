import CreateElement from "../create-element";
import '../input-field/input-field.css';

const cssClasses = {
    FIELD_CONTAINER: 'field__container',
    FIELD_CONTAINER__REVERSE: 'field__container_reverse',
}

export default class InputCreateField extends CreateElement {

    createElement(params) {
        this.element = document.createElement('div');
        this.element.classList.add(cssClasses.FIELD_CONTAINER);

        /* ! */

        this.setCallback(params.callback)
        this.setTextContent(params.textContent)

        const inputElement = document.createElement('input');
        const labelElement = document.createElement('label');

        this.element.append(inputElement, labelElement)
    }

    setTextContent(text) {
        this.labelElement.textContent = text
    }

    setCallback(callback) {
        if (typeof callback === 'function') {
            this.element.addEventListener('keyup', (event) => callback(event))
        }
    }
}