function Articulo(nombre, descripcion, precio, unidades) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.unidades = unidades;
}

function Carrito() {
    this.articulos = new Array();
}

Carrito.prototype.ponerArticulo = function(articulo) {
    repetido = false;
    for (i = 0; i < this.articulos.length && !repetido; i++) {
        if (this.articulos[i].nombre === articulo.nombre) {
        this.articulos[i].unidades++;
        alert("Articulo " + this.articulos[i].nombre + " anyadido al carrito");
        repetido = true;
        }
    }
    if (!repetido) {
        this.articulos.push(articulo);
        alert("Nuevo articulo " + this.articulos[i].nombre + " anyadido al carrito");
    }
}

Carrito.prototype.verArticulos = function() {
    precioTotal = 0;
    for (i = 0; i < this.articulos.length; i++) {
        precioTotal = precioTotal + this.articulos[i].precio*this.articulos[i].unidades;
        alert("Articulo: " + this.articulos[i].nombre + "\nPrecio: " + this.articulos[i].precio + " €\nUnidades: " + this.articulos[i].unidades);
    }

    alert("Total: " + precioTotal + " €");
}