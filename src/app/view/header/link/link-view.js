import '../link/link.css';
import View from '../../view';




const cssClasses = {
    ITEM: 'nav-item',
    ITEM_SELECTED: 'nav-item__selected'
}


export default class LinkView extends View {
/**
 * Description placeholder
 * @param {import('../header-view').Page} pageParams
 * @param {Map<LinkView>} linkElements
 */
    constructor (pageParams, linkElements) {
        /**
    * @type {import('../../view').ViewParams}
    * */
        const params = {
            tag: 'a',
            classNames: [cssClasses.ITEM],
            textContent: pageParams.name,
            callback: pageParams.callback,
        }

        super(params);

        this.linkElements = linkElements;
        //console.log(this.linkElements, '+')
        this.configureView();
    }

    setSelected () {

        this.linkElements.forEach((linkElement) => {
            return linkElement.removeSelected();
        });

        const element = this.elementCreator.getElement();
        element.classList.add(cssClasses.ITEM_SELECTED);
    }

    removeSelected () {
        const element = this.elementCreator.getElement();
        element.classList.remove(cssClasses.ITEM_SELECTED);
    }

    configureView () {
        const element = this.elementCreator.getElement();
        element.addEventListener('click', this.setSelected.bind(this));
    }
}