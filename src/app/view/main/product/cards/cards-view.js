import '../cards/cards.css';
import View from '../../../view';
import cardsInfo from '../../../../../data/cards';
import CreateElement from '../../../../utils/create-element';
import { Pages } from '../../../../router/pages';



const CssClasses = {    /* Css! */
    CONTAINER: 'card',
    FIELD: 'card__field',
    BUTTON: 'card__button',
};

const CARD_TEXT_MORE = 'Подробнее..';

export default class CardView extends View {
    /**
     * @param {import('../../../../../data/cards').CardInfo} card
     * @param {import('../../../../router/router').default} router
     */
    constructor(card, router) {
        /**
         * @type {import('../../../view').ViewParams}
         */
        const params = {
            tag: 'article',
            classNames: [CssClasses.CONTAINER],
        };
        super(params);

        this.card = card;
        this.router = router;

        this.htmlElement = this.configureView();
    }

    configureView() {
        /**
         * @type {import('../../../../utils/create-element').ElementParams}
         */
        let labelParams = {
            tag: 'label',
            classNames: [CssClasses.FIELD],
            textContent: this.card.name,
            callback: null,
        };
        const creatorLabel = new CreateElement(labelParams);
        this.elementCreator.addInnerElement(creatorLabel);

        labelParams = {
            tag: 'button',
            classNames: [CssClasses.BUTTON],
            textContent: CARD_TEXT_MORE,
            callback: this.buttonClickHandler.bind(this, `${Pages.PRODUCT}/${this.card.id}`),
        };
        const creatorButton = new CreateElement(labelParams);
        this.elementCreator.addInnerElement(creatorButton);
    }

    /**
     * @param {string} path
     */
     buttonClickHandler(path) {
        console.log(path,'+===+')
        this.router.navigate(path);
    }

    /* buttonClickHandler () {
        this.router.navigate(`${Pages.PRODUCT}/${this.card.id}`);
    } */
}
