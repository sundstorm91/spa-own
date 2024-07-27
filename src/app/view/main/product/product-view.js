import '../product/product.css';
import View from '../../view';
import cardsInfo from '../../../../data/cards';
import CardView from './cards/cards-view';
import CardDetailView from './card-detail/card-detail-view';

const cssClasses = {
    PRODUCT: 'product',
}


export default class ProductView extends View {
    /**
     * @param {string} id
     * @param {import('../../../router/router').default} router
     */
    constructor (router, id) {
        /**
        * @type {import('../../../utils/create-element').ElementParams}
        * */
            const params = {
                tag: 'section',
                classNames: [cssClasses.PRODUCT],

            }

            super(params);

            if (id) {
                this.showLargeCard(router, id)
            } else {
                this.showAllCard(router);
            }
        }


    /**
     * @param {import('../../../router/router').default} router
     */
        showAllCard (router) {
            cardsInfo.forEach((card) => {
                const smallCardComponent = new CardView(card, router);
                this.elementCreator.addInnerElement(smallCardComponent.getHTMLElement());
            })
        }


        /**
         * @param {import('../../../router/router').default} router
         * @param {string} id
         */
        showLargeCard (router, id) {
            const selectedCard = cardsInfo.find((card) => card.id === id);
            const largeCardComponent = new CardDetailView(selectedCard, router);
            this.elementCreator.addInnerElement(largeCardComponent.getHTMLElement());
        }




}