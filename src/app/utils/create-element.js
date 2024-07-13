/* Чтобы не захламлять наш класс в конструкторе, мы опишем функциональность класса в методе. А затем сам метод вставим в конструктор */

/* в данном классе мы инкапсулируем логику создания элемента, а именно подключения тега, создание селектора, текстового контента и коллбэка. Далее потом уже Viewшками будем создавать инстанс от этого класса, и создавать на базе наших параметров необходимые элементы */


/**
 * @typedef {{
* tag: string,
* classNames: Array<string>,
* textContent: string,
* callback: function,
* }} ElementParams
*/

export default class CreateElement {
    /**
     * @param {ElementParams} params
    */
    constructor (params) {
        this.element = null; /* хз зачем зануляем */
        this.createElement(params)
    }

   /**
    * @param {ElementParams} params
    */
    createElement(params) {
        this.element = document.createElement(params.tag)
        this.setCssClasses(params.classNames)
        this.setTextContent(params.textContent)
        this.setCallback(params.callback)
    }

    /**
    * @return {HTMLElement}
    */
    getElement () {
        return this.element
    }

    /**
       * Description placeholder
       * @param {string} text
       *
    */
    setTextContent(text='') {
        this.element.textContent = text
    }

    addInnerElement(element) {
        this.element.append(element.getElement())
    }
      /**
       * Description placeholder
       * @param {Array} cssClasses
       *
      */
    setCssClasses(cssClasses=[]) {
        cssClasses.forEach((cssClass) => {
            this.element.classList.add(cssClass)
        })
    }

    /**
       * Description placeholder
       * @param {Function} callback
       *
    */
    setCallback(callback) {
        if (typeof callback === 'function') {
            console.log(callback)
            this.element.addEventListener('click', (event) => callback(event))
        }
    }
}


