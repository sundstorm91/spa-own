import FooterView from "./view/footer/footer-view";
import '../app.css'
import HeaderView from "./view/header/header-view";
import MainView from "./view/main/main-view";
import Router from "./router/router";
import { ID_SELECTOR, Pages } from "./router/pages";
import IndexView from "./view/main/index/index-view";
import ProductView from "./view/main/product/product-view";
import NotFoundView from "./view/main/not-found/not-found-view";

export default class App {
    constructor () {
        this.header = null;
        this.main = null;
        //this.footer = null;
        const routes = this.createRoutes();
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
      *
      * @returns {Array<import('./router/router').Route>}
      */
     createRoutes () {/*1: 39*/
        return [
            {
                path: '',
                callback: () => {
                    this.setContentApp(Pages.INDEX, new IndexView());
                },
            },
            {
                path: `${Pages.INDEX}`,
                callback: () => {
                    console.log('456')
                    this.setContentApp(Pages.INDEX, new IndexView());
                },
            },
            {
                path: `${Pages.PRODUCT}`,
                callback: () => {
                    console.log('123')

                    this.setContentApp(Pages.PRODUCT, new ProductView(this.router, ''));
                },
            },
            {
                path: `${Pages.PRODUCT}/${ID_SELECTOR}`,
                callback: (id) => {/* ! */
                    console.log('9')
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