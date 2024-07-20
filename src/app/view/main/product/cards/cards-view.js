import '../cards/cards.css';
import View from '../../../view';
import cardsInfo from '../../../../../data/cards';
import CreateElement from '../../../../utils/create-element';

const cssClasses = {
    CONTAINER: 'card',
    FIELD: 'card__field',
    BUTTON: 'card__button',
};

const CARD_TEXT_MORE = 'Подробнее..';

export default class CardView extends View {
     constructor (card) {
    /**
    * @type {import('../../utils/element-creator').ElementParams}
    * */
        const params = {
            tag: 'section',
            classNames: [cssClasses.CONTAINER],
            textContent: '',
            callback: null,
        }
        super(params)
        this.configureView(card);
    }

    configureView (card) {
        const paramsField = {
            tag: 'div',
            classNames: [cssClasses.FIELD],
            textContent: card.name,
            callback: null,
        }

        const cardFieldCreator = new CreateElement(paramsField);
        this.elementCreator.addInnerElement(cardFieldCreator);
            /* ! */
        const paramsButton = {
            tag: 'button',
            classNames: [cssClasses.BUTTON],
            textContent: CARD_TEXT_MORE,
            callback: null,
        }

        const buttonCreator = new CreateElement(paramsButton);
        this.elementCreator.addInnerElement(buttonCreator);
    }


}
