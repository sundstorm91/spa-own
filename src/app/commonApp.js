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
        const mainView = new MainView();
        const headerView = new HeaderView(mainView);

        document.body.append(headerView.getHTMLElement(), mainView.getHTMLElement(), footerView.getHTMLElement())
    }
}