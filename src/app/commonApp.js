import FooterView from "./view/footer/footer-view";
import '../app.css'
import HeaderView from "./view/header/header-view";
import MainView from "./view/main/main-view";
import Router from "./router/router";
import { ID_SELECTOR, Pages } from "./router/pages";
import IndexView from "./view/main/index/index-view";
import ProductView from "./view/main/product/product-view";
import NotFoundView from "./view/main/not-found/not-found-view";
import State from "./state/state";


/* класс инициализации приложения  */
export default class App {
    constructor () {
        this.header = null;
        this.main = null;

        const state = new State();
        const routes = this.createRoutes(state);
        this.router = new Router(routes);
        this.createView();
    }

    createView () {

        this.header = new HeaderView(this.router);
        this.main = new MainView();

        const footerView = new FooterView();

        document.body.append(this.header.getHTMLElement(), this.main.getHTMLElement(), footerView.getHTMLElement())
    }

     /**
      * Description placeholder
      * @param {import('./state/state').default} state
      * @returns {Array<import('./router/router').Route>}
      */
     createRoutes (state) { /*1: 39*/
        return [
            {
                path: '',
                callback: () => {
                    this.setContentApp(Pages.INDEX, new IndexView(state));
                },
            },
            {
                path: `${Pages.INDEX}`,
                callback: () => {
                    console.log('456')
                    this.setContentApp(Pages.INDEX, new IndexView(state));
                },
            },
            {
                path: `${Pages.PRODUCT}`,
                callback: () => {
                    console.log('1')

                    this.setContentApp(Pages.PRODUCT, new ProductView(this.router, ''));
                },
            },
            {
                path: `${Pages.PRODUCT}/${ID_SELECTOR}`,
                callback: (id) => {/* ! */
                    console.log('2')
                    this.setContentApp(Pages.PRODUCT, new ProductView(this.router, id));
                },
            },
            {
                path: `${Pages.NOT_FOUND}`,
                callback: () => {
                    this.setContentApp(Pages.NOT_FOUND, new NotFoundView());
                },
            },
        ];

    }
    /**
     * @param {string} pageName
     * @param {import('./view/view').default} view
     */
    setContentApp (pageName, view) {
        this.header.setSelectedItem(pageName);
        this.main.setContent(view);
    }

}