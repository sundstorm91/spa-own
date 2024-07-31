const KEY_FOR_SAVE = 'spa';


export default class State {
    constructor () {
        this.fields = this.loadState();
        window.addEventListener('beforeunload', this.saveState.bind(this))
    }

     /**
      * Description placeholder
      * @param {string} name
      * @param {string} value
      */

    setValue  (name, value) {
        this.fields.set(name, value)
    }

    /**
      * Description placeholder
      * @param {string} name
      */

    getValue (name) {

        if (this.fields.has(name)) {
            return this.fields.get(name)
        }

        return '';
    }

    saveState () {
        const fields = Object.fromEntries(this.fields.entries());
        localStorage.setItem(KEY_FOR_SAVE, JSON.stringify(fields));
    }

    loadState () {
        const fields = localStorage.getItem(KEY_FOR_SAVE);

        if (fields) {
            const fieldArray = JSON.parse(fields);
            return new Map(Object.entries(fieldArray))
        }

        return new Map();
    }
}