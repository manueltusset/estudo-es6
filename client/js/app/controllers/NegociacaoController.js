class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacaoList = new NegociacaoList();
        this._negociacaoView = new NegociacaoView($('#negociacoesView'));
        this._message = new Message();
        this._messageView = new MessageView($('#messageView'));
        this.updateList();
    }

    adiciona(event) {
        event.preventDefault();

        this._negociacaoList.add(this._createNegociacao());
        this.showMessage('Negociação adicionada com sucesso!');
        this._cleanForm();
        this.updateList();
    }

    updateList() {
        this._negociacaoView.update(this._negociacaoList);
    }

    showMessage(message) {
        this._message.text = message;
        this._messageView.show(this._message);
    }

    _createNegociacao() {
        return new Negociacao(
            DateHelper.textToDate(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _cleanForm() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1.0;
        this._inputValor.value = 0;

        this._inputData.focus();
    }
}