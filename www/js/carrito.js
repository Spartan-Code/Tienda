function Reserva(nombre, categoria, descripcion, fechaEntrada, fechaSalida, hora, precio, unidades, rutaImagen) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.descripcion = descripcion;
    this.fechaEntrada = fechaEntrada;
    this.fechaSalida = fechaSalida;
    this.hora = hora;
    this.precio = precio;
    this.unidades = unidades;
    this.rutaImagen = rutaImagen;
}

function Carrito() {
    this.reservas = new Array();
}

Carrito.prototype.ponerReserva = function(reserva) {
    repetida = false;
    for (i = 0; i < this.reservas.length && !repetida; i++) {
        if (this.reservas[i].nombre === reserva.nombre && this.reservas[i].fechaEntrada === reserva.fechaEntrada) {
            if (reserva.fechaSalida === null) {
                this.reservas[i].unidades = this.reservas[i].unidades + reserva.unidades;
                repetida = true;
            } else if (this.reservas[i].fechaSalida === reserva.fechaSalida) {
                repetida = true;
            }
        }
    }
    if (!repetida) {
        this.reservas.push(reserva);
    }
    return repetida;
}

Carrito.prototype.eliminarReserva = function(indexReserva) {
    this.reservas.splice(indexReserva, 1);
}

Carrito.prototype.verReservas = function() {
    precioTotal = 0;
    for (i = 0; i < this.reservas.length; i++) {
        precioTotal = precioTotal + this.reservas[i].precio*this.reservas[i].unidades;
        alert("Articulo: " + this.reservas[i].nombre + "\nPrecio: " + this.reservas[i].precio + " €\nUnidades: " + this.reservas[i].unidades);
    }

    alert("Total: " + precioTotal + " €");
}