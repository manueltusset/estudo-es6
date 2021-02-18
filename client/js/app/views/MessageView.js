class MessageView {
    constructor(element) {
        this._element = element;
    }

    _template(message) {
        return `<p class="alert alert-info">${message.text}</p>`;
    }

    show(message) {
        this._element.innerHTML = this._template(message);
    }
}