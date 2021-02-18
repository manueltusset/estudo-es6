class NegociacaoView {
    constructor(element) {
        this._element = element;
    }

    _template(negociacoesList) {
        return `
            <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
                ${negociacoesList.negociacoes.map((negociacao) => {
                    return `
                        <tr>
                            <td>${DateHelper.dateToText(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>
                        </tr>
                    `
                }).join('')}
            </tbody>
            <tfoot>
            </tfoot>
        </table>
        `;
    }

    update(negociacoesList) {
        this._element.innerHTML = this._template(negociacoesList);
    }
}