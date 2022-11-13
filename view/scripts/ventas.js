var cont = 0;
var detalles = 0;


/*=============================================
AGREGAR DETALLE DE COMPRA
=============================================*/
$(document).on('click', '.agregar', function () {

    var idProducto = $(this).attr("idProducto");
    var titulo = $(this).attr("titulo");
    var cantidad = 1;
    var unidad = 1;
    var precio_venta = 1;

    if (idProducto != "") {
        var subtotal = cantidad * unidad;
        var fila = '<tr class="filas" id="fila' + cont + '">' +
            '<td><button type="button" class="btn btn-danger" onclick="eliminarDetalle(' + cont + ')"><i class="fa fa-times" aria-hidden="true"></i></button></td>' +
            '<td><input type="hidden"  name="idProducto[]" value="' + idProducto + '">' + titulo + '</td>' +
            '<td><input type="number" class = "canti"  name="cantidad[]" id="cantidad[]" value="' + cantidad + '"></td>' +
            '<td><select id="unidad[]" name="unidad[]" class="form-select unidad" aria-label="Default select example"><option value="1" selected>Kg</option><option value="2">Pieza</option><option value="3">Empaques</option></select></td>' +
            '<td><input type="number" name="precio_venta[]" value="' + precio_venta + '"></td>' +
            '<td><span id="totalCompra' + cont + '" name="totalCompra[]">' + subtotal + '</span></td>' +

            '</tr>';
        cont++;
        detalles++;
        $('#detalles').append(fila);
        modificarSubtotales();

    } else {
        alert("Error al ingresar detalle de compra, verifique los datos del producto.");
    }
});

/*=============================================
ACTUALIZAR SUBTOTALES
=============================================*/
$(document).on("change", ".canti", function () {

    var cant = document.getElementsByName("cantidad[]");
    var uni = document.getElementsByName("unidad[]");
    var sub = document.getElementsByName("totalCompra[]");

    for (var i = 0; i < cant.length; i++) {
        var inpC = cant[i];
        var inpP = uni[i];
        var inpS = sub[i];

        inpS.value = inpC.value * inpP.value;
        document.getElementsByName("totalCompra[]")[i].innerHTML = inpS.value;
    }

    calcularTotales();
})

$(document).on("change", ".preci", function () {
    var cant = document.getElementsByName("cantidad[]");
    var uni = document.getElementsByName("unidad[]");
    var sub = document.getElementsByName("totalCompra[]");

    for (var i = 0; i < cant.length; i++) {
        var inpC = cant[i];
        var inpP = uni[i];
        var inpS = sub[i];

        inpS.value = inpC.value * inpP.value;
        document.getElementsByName("totalCompra[]")[i].innerHTML = inpS.value;
    }

    calcularTotales();
})


function modificarSubtotales() {

    var cant = document.getElementsByName("cantidad[]");
    var uni = document.getElementsByName("unidad[]");
    var sub = document.getElementsByName("totalCompra[]");

    for (var i = 0; i < cant.length; i++) {
        var inpC = cant[i];
        var inpP = uni[i];
        var inpS = sub[i];

        inpS.value = inpC.value * inpP.value;
        document.getElementsByName("totalCompra[]")[i].innerHTML = inpS.value;
    }

    calcularTotales();
}

/*=============================================
CALCULAR TOTALES DE COMPRA
=============================================*/

function calcularTotales() {
    var sub = document.getElementsByName("totalCompra[]");
    var total = 0.0;

    for (var i = 0; i < sub.length; i++) {
        total += document.getElementsByName("totalCompra[]")[i].value;
    }
    $("#total").html("S/." + total);
    $("#total_compra").val(total);
    evaluar();
}
/*=============================================
EVALUACIÃ“N PARA CANCELAR
=============================================*/
function Cancelar() {
    location.reload();

}

/*=============================================
EVALUACIÃ“N PARA MOSTRAR O NO EL BOTÃ“N DE GUARDAR
=============================================*/

function evaluar() {

    if (detalles > 0) {
        $("#btnGuardar").show();
    }
    else {
        $("#btnGuardar").hide();
        cont = 0;
    }
}

/*=============================================
ELIMINAR DETALLE DE COMPRA
=============================================*/
function eliminarDetalle(indice) {
    $("#fila" + indice).remove();
    calcularTotales();
    detalles = detalles - 1;

}