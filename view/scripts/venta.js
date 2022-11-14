"use strict";

let cont = 0;
let detalles = 0;

/*=============================================
AGREGAR DETALLE DE COMPRA
=============================================*/
const agregar = document.getElementsByClassName("agregar");
const details = document.querySelector("#detalles");

for (let i = 0; i < agregar.length; i++) {
  agregar[i].addEventListener("click", function () {
    let idProducto = this.getAttribute("idProducto");
    let titulo = this.getAttribute("titulo");
    let cantidad = 1;
    let unidad = 1;
    let precio_venta = 1;
    const fila = document.createElement("tr");
    fila.id = "fila" + cont;
    fila.className = "filas";
    let subtotal = cantidad * unidad;
    fila.innerHTML = `
        <td>
          <button type="button" class="btn btn-danger" onclick="eliminarDetalle(${cont})">
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
        </td>
        <td>
            <input type="hidden"  name="idProducto[]" value="${idProducto}">
            ${titulo}
        </td>
        <td>
            <input type="number" class="form-control" name="cantidad[]" id="cantidad" value="${cantidad}" min="1" onchange="modificarSubtotales()">
        </td>
        <td>
          <select id="unidad[]" name="unidad[]" class="form-select unidad" aria-label="Default select example">
            <option value="1" selected>Kg</option>
            <option value="2">Pieza</option>
            <option value="3">Empaques</option>
          </select>
        </td>
        <td>
            <input type="number" class="form-control" name="precio_venta[]" id="precio_venta" value="${precio_venta}" min="1" readonly>
        </td>
        <td>
            <input type="number" class="form-control" name="totalCompra[]" id="totalCompra" value="${subtotal}" min="1" readonly>
        </td>
    `;

    cont++;
    detalles++;
    details.appendChild(fila);
    modificarSubtotales();
  });
}

/*=============================================
ACTUALIZAR SUBTOTALES
=============================================*/
/* const canti = document.querySelector("#cantidad");
canti.addEventListener("change", () => {
  let cant = document.getElementsByName("cantidad[]");
  let uni = document.getElementsByName("unidad[]");
  let sub = document.getElementsByName("totalCompra[]");

  for (let i = 0; i < cant.length; i++) {
    let inpC = cant[i];
    let inpP = uni[i];
    let inpS = sub[i];

    inpS.value = inpC.value * inpP.value;
    document.getElementsByName("totalCompra[]")[i].innerHTML = inpS.value;
  }

  calcularTotales();
}); */

/* const preci = document.querySelector(".preci");
preci.addEventListener("change", () => {
  let cant = document.getElementsByName("cantidad[]");
  let uni = document.getElementsByName("unidad[]");
  let sub = document.getElementsByName("totalCompra[]");

  for (let i = 0; i < cant.length; i++) {
    let inpC = cant[i];
    let inpP = uni[i];
    let inpS = sub[i];

    inpS.value = inpC.value * inpP.value;
    document.getElementsByName("totalCompra[]")[i].innerHTML = inpS.value;
  }

  calcularTotales();
}); */

function modificarSubtotales() {
  let cant = document.getElementsByName("cantidad[]");
  let uni = document.getElementsByName("unidad[]");
  let sub = document.getElementsByName("totalCompra[]");
  let total = [];
  // console.log(cant);
  // console.log(uni);
  // console.log(sub);
  for (let i = 0; i < sub.length; i++) {
    let inpC = cant[i];
    let inpP = uni[i];
    let inpS = sub[i];
    // console.log(inpS);
    // console.log(inpS.value);

    inpS.value = inpC.value * inpP.value;
    total.push(Number(inpS.value));
    // console.log(inpS.value);
    // document.getElementsByName("totalCompra[]")[i].innerHTML = inpS.value;
  }
  // console.log(total);
  // console.log(total.reduce((a, b) => a + b, 0));
  calcularTotales(total.reduce((a, b) => a + b, 0));
}

/*=============================================
CALCULAR TOTALES DE COMPRA
=============================================*/

function calcularTotales(total) {
  // let sub = document.getElementsByName("totalCompra[]");
  // let total = 0.0;

  // for (let i = 0; i < sub.length; i++) {
  //   total += document.getElementsByName("totalCompra[]")[i].value;
  // }
  document.getElementById("total").innerHTML = "S/. " + total;
  document.getElementById("total_compra").value = total;
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
    document.getElementById("btnGuardar").disabled = false;
    //     $("#btnGuardar").show();
  } else {
    document.getElementById("btnGuardar").disabled = true;
    //     $("#btnGuardar").hide();
    cont = 0;
  }
}

/*=============================================
ELIMINAR DETALLE DE COMPRA
=============================================*/
function eliminarDetalle(indice) {
  document.getElementById("fila" + indice).remove();
  //   $("#fila" + indice).remove();
  calcularTotales();
  detalles = detalles - 1;
}
