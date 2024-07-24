import CreateElement from '../../utils/create-element';
import '../header/header.css'
import View from '../view';
import LinkView from './link/link-view';
import IndexView from '../main/index/index-view';
import ProductView from '../main/product/product-view';


const namePage = {
    INDEX: 'Главная',
    PRODUCT: 'Карточки',
}

const START_PAGE_INDEX = 0;

const cssClasses = {
    HEADER: 'header',
    NAV: 'nav',
}

//const TEXT = 'this footer create by using SPA'

export default class HeaderView extends View {

    constructor (mainComponent) {
    /**
    * @type {import('../../utils/element-creator').ElementParams}
    * */
        const params = {
            tag: 'header',
            classNames: [cssClasses.HEADER],
            textContent: '',
            callback: null,
        }
        super(params)
        this.linkElements = [];
        this.configureView(mainComponent) /* вызов метода для создания nav */
    }


        /* создание метода для создания nav */
    configureView (mainComponent) {
        const paramsNav = {
            tag: 'nav',
            classNames: [cssClasses.NAV],
            textContent: '',
            callback: null,
        }
        console.log(mainComponent.getHTMLElement())
        /* чтобы внутрь элемента мы могли вставить nav -> необходимо будет воспользоваться
        методом addInnerElement */
        const creatorNav = new CreateElement(paramsNav);/* создаем инстанс класса createElement */
        this.elementCreator.addInnerElement(creatorNav);/* воспользуемся инстансом родительского класса View -> elementCreator и добавим ему элемент нав */

        const indexView = new IndexView();
        const productView = new ProductView();

        const pages = [
            {
                name: namePage.PRODUCT,
                callback: () => mainComponent.setContent(productView),
            },
            {
                name: namePage.INDEX,
                callback: () => mainComponent.setContent(indexView),
            },


        ];

        pages.forEach((page, index) => {
            const linkElement = new LinkView(page, this.linkElements)


            creatorNav.addInnerElement(linkElement.getHTMLElement())
            this.linkElements.push(linkElement)

            if (index === START_PAGE_INDEX) {
                page.callback();
                linkElement.setSelected();
            }
        })
    }
}

