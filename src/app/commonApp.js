import FooterView from "./view/footer/footer-view";
import '../app.css'
import HeaderView from "./view/header/header-view";
import MainView from "./view/main/main-view";

export default class App {
    constructor () {
        this.createView()
    }

    createView () {
        const footerView = new FooterView();
        const headerView = new HeaderView();
        const mainView = new MainView();

        document.body.append(headerView.getHTMLElement(), mainView.getHTMLElement(), footerView.getHTMLElement())
    }
}