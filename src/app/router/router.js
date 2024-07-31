import { ID_SELECTOR } from "./pages";

export default class Router {/* 1:14 */
    constructor (routes) {
        this.routes = routes;

        document.addEventListener('DOMContentLoaded', () => {
          const path = this.getCurrentPath();
          this.navigate(path);
        /* в процессе загрузки приложение, может загрузиться не все что нужно, и поэтому мы дублируем логику  */
        })


        window.addEventListener('popstate', this.browserChangeHandler.bind(this));
        window.addEventListener('hashchange', this.browserChangeHandler.bind(this));
    }

     /**
      * Description placeholder
      * @param {string} url
      */
    navigate(url) {

      const request = this.parseUrl(url);

      const pathForFind = request.resource === '' ? request.path : `${request.path}/${ID_SELECTOR}`;
      const route = this.routes.find((item) => item.path === pathForFind);


      if (!route) {
          this.redirectToNotFound();
          return;
      }

      route.callback(request.resource);
    }

    /**
      * Description placeholder
      * @typedef {{path: string, resource: string}} UserRequest
      * @param {string} url
      * @returns {UserRequest}
      */
    parseUrl(url) {
      const result = {};
    /* разобрать наш урл на "запчасти" */
      const path = url.split('/');


      [result.path = '', result.resource = ''] = path;


      return result;
        /* логика создания полей!????? */
    }

    redirectToNotFound() {

      const routeNotFound = this.routes.find((item) => item.path === Pages.NOT_FOUND);
      if (routeNotFound) {      /* ???? */
         this.navigate(routeNotFound.path)
      }
    }

    browserChangeHandler () {
      const path = this.getCurrentPath();
      this.navigate(path);
    }

    getCurrentPath () {
      if (window.location.hash) {
        return window.location.hash.slice(1)
      }
      return window.location.pathname.slice(1)
    }
}