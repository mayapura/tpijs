function calcularTotalApagar() {
    let total;
    let descuento;
    alertPlaceholder = document.getElementById('alert');
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let categoria = parseInt(document.getElementById("categoria").value);

    console.log("cantidad: " + cantidad);
    console.log("categoria: " + categoria);

    let estado = verificarDatos(cantidad, categoria);

    switch (categoria) {
        case 3:
            total = cantidad * 200;
            descuento = total - (total * 15 / 100);
            break;
        case 2:
            total = cantidad * 200;
            descuento = total - (total * 50 / 100);
            break;
        case 1:
            total = cantidad * 200;
            descuento = total - (total * 80 / 100);
            break;
        case 0:
            break;
        default:
            break;
    }

    if (estado == true) {
        mostrtarAlert('Total a Pagar: $' + descuento, 'primary');
    } else {
        mostrtarAlert('Existen campos sin rellenar...', 'danger');
    }

    console.log("Total a pagar: " + descuento);

}

function verificarDatos(cant, cat) {
    let estado;
    if (cant != 0 && cat != 0) {
        estado = true;
    } else {
        estado = false;
    }
    return estado;
}

function mostrtarAlert(message, type) {
    var wrapper = document.createElement('div');
    wrapper.innerHTML = '<div  class="alert alert-' + type + ' alert-dismissible" role = "alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
    alertPlaceholder.append(wrapper);
}

function limpiar() {
    form.reset();
}