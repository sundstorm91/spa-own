import '../product/product.css';
import View from '../../view';
import cardsInfo from '../../../../data/cards';
import CardView from './cards/cards-view';

const cssClasses = {
    PRODUCT: 'product',
}


export default class ProductView extends View {
    constructor () {
        /**
        * @type {import('../../utils/element-creator').ElementParams}
        * */
            const params = {
                tag: 'section',
                classNames: [cssClasses.PRODUCT],
                textContent: '',
                callback: null,
            }

            super(params);
            this.configureView();
        }

        configureView () {
            cardsInfo.forEach((item) =>{
                const cardView = new CardView(item);
                this.elementCreator.addInnerElement(cardView.getHTMLElement())
            })
        }
}