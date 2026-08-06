/* поскольку в создании headera, footera, maina прослеживается посторение кода (ДРАЙ), следовательно необходимо создать общий класс View, с общими параметрами и методами, от которого будем наследоваться дочерними классами headerView ит.д И там уже будем либо наследоваться либо переиспользовать с изменениями эти методы */


/* короче, мы имеем родительский класс view с общими методами. от него будут наследоваться header,main footer и рендрится. Если нужно будет что-то дополнить для футера хидера и т.д мы это сделаем уже непосредственно в потомках. Это и называется полиморфизм, когда мы используем один и тотже метод, но переопределяем его внутри потомка */
import CreateElement from '../utils/create-element';

/**
 * @typedef {{
* tag: string,
* classNames: Array<string>,
* }} ViewParams
*/

/* нам нужно принять параметры извне в виде params в нашем случае */
export default class View {
    constructor (params) {
        this.elementCreator = this.createView(params)
    }


    /**
    * @return {HTMLElement}
    */
    getHTMLElement() {
        return this.elementCreator.getElement();
    }


    /**
    * @param {import('../utils/create-element').ElementParams} params
    * @return {elementCreator}
    */
    createView (params) {
        const viewParams = {
            tag: params.tag,
            classNames: params.classNames,
            textContent: params.textContent,
            callback: params.callback,
        }

        const elementCreator = new CreateElement(viewParams)
        return elementCreator;
    }




}
