import FooterView from "./view/footer/footer-view";
import '../app.css'
import HeaderView from "./view/header/header-view";
import MainView from "./view/main/main-view";
import Router from "./router/router";
import { Pages } from "./router/pages";
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

        this.main = new MainView();
        this.header = new HeaderView(this.router);
        const footerView = new FooterView();

        document.body.append(this.header.getHTMLElement(), this.main.getHTMLElement(), footerView.getHTMLElement())
    }

     /**
      * Description placeholder
      *
      * @returns {Array<import('./router/router').Route>}
      */
     createRoutes () {
        return [
            {
                path: '',
                callback: () => {
                    this.setContent(Pages.INDEX, new IndexView());
                },
            },
            {
                path: `${Pages.INDEX}`,
                callback: () => {
                    this.setContent(Pages.INDEX, new IndexView());
                },
            },
            {
                path: `${Pages.PRODUCT}`,
                callback: () => {
                    this.setContent(Pages.PRODUCT, new ProductView());
                },
            },{
                path: `${Pages.NOT_FOUND}`,
                callback: () => {
                    this.setContent(Pages.NOT_FOUND, new NotFoundView());
                },
            },
        ];

    }
    /**
     * @param {string} pageName
     * @param {import('./view/view').default} view
     */
    setContent (pageName, view) {

        this.header.setSelectedItem(pageName);
        this.main.setContent(view);
    }

}