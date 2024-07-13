import FooterView from "./view/footer/footer";
import '../app.css'
import HeaderView from "./view/header/header";
import MainView from "./view/main/main";

export default class App {
    constructor () {
        this.createView()
    }

    createView () {
        const footerView = new FooterView();
        const headerView = new HeaderView();
        const mainView = new MainView();
        console.log(footerView.getHTMLElement())
        document.body.append(headerView.getHTMLElement(), mainView.getHTMLElement(), footerView.getHTMLElement())
    }
}