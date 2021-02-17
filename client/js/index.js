var inputs = document.querySelectorAll('input[class="form-control"]');
var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault();

    var tr = document.createElement('tr');

    inputs.forEach(function(input) {
        var td = document.createElement('td');
        td.textContent = input.value;

        tr.appendChild(td);
    });

    var tdVol = document.createElement('td');
    tdVol.textContent = inputs[1].value * inputs[2].value;

    tr.appendChild(tdVol);

    tbody.appendChild(tr);

    inputs[0] = '';
    inputs[1] = 1.0;
    inputs[2] = 0.0;
});