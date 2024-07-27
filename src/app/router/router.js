import { ID_SELECTOR } from "./pages";

export default class Router {/* 1:14 */
    constructor (routes) {
        this.routes = routes;
    }

     /**
      * Description placeholder
      * @param {string} url
      */
    navigate(url) {
      console.log(url, '<= url')
      const request = this.parseUrl(url);

      const pathForFind = request.resource === '' ? request.path : `${request.path}/${ID_SELECTOR}`;
      console.log(pathForFind)
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
      console.log(result,'++')

      return result;
        /* логика создания полей!????? */
    }

    redirectToNotFound() {

      const routeNotFound = this.routes.find((item) => item.path === Pages.NOT_FOUND);
      if (routeNotFound) {/* ???? */
         this.navigate(routeNotFound.path)
      }
    }
}