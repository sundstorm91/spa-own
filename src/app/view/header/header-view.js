import CreateElement from '../../utils/create-element';
import '../header/header.css'
import View from '../view';
import LinkView from './link/link-view';
import IndexView from '../main/index/index-view';
import ProductView from '../main/product/product-view';
import { Pages } from '../../router/pages';

const namePage = {
    INDEX: 'Главная',
    PRODUCT: 'Карточки',
}

const START_PAGE_INDEX = 0;

const cssClasses = {
    HEADER: 'header',
    NAV: 'nav',
}

export default class HeaderView extends View {

     /**
      * Description placeholder
      *
      * @param {import('../../router/router').default} router
      */
    constructor (router) {
    /**
    * @type {import('../../utils/create-element').ElementParams}
    * */
        const params = {
            tag: 'header',
            classNames: [cssClasses.HEADER],
            textContent: '',
            callback: null,
        }
        super(params);

        this.headerLinkElements = new Map();

        this.configureView(router);
    }

    /**
      * Description placeholder
      *
      * @param {import('../../router/router').default} router
      */

    configureView (router) {
        const paramsNav = {
            tag: 'nav',
            classNames: [cssClasses.NAV],
            textContent: '',
            callback: null,
        }

        const creatorNav = new CreateElement(paramsNav);
        this.elementCreator.addInnerElement(creatorNav);

        Object.keys(namePage).forEach((key) => {
            /* console.log(key)
            console.log(namePage[key])
            console.log(Pages[key]) */
            const linkParams = {
                name: namePage[key],
                callback: () => router.navigate(Pages[key])
            }


            const linkElement = new LinkView(linkParams, this.headerLinkElements);

            this.headerLinkElements.set(Pages[key], linkElement);
            creatorNav.addInnerElement(linkElement.getHTMLElement());
            /* this.headerLinkElements.set(Pages[key], linkElement); !*/

        })
    }

     /**
      * Description placeholder
      * @param {string} namePage
      */

    setSelectedItem(namePage) {

        const linkComponent = this.headerLinkElements.get(namePage);
        /* console.log(namePage)
        console.log(this.headerLinkElements) */
        if (linkComponent instanceof LinkView) {
            linkComponent.setSelected();
        }

        /* принцип метода, если ты нажимаешь не по ссылке, а просто вводиш адрес строки минуально - нативно ничего происходить не будет, нужно хедеру внести логику чтобы при вводе адресной строки срабатывала
        логика ссылки */
    }
}

