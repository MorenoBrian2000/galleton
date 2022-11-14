"use strict";

let cont = 0;
let detalles = 0;

/*=============================================
AGREGAR DETALLE DE COMPRA
=============================================*/
const btnAgregar = document.querySelector(".agregar");
const details = document.querySelector("#detalles");

btnAgregar.addEventListener("click", () => {
  let idProducto = btnAgregar.getAttribute("idProducto");
  //   let idProducto = $(this).attr("idProducto");
  let titulo = btnAgregar.getAttribute("titulo");
  let cantidad = 1;
  let unidad = 1;
  let precio_venta = 1;

  if (idProducto != "") {
    let subtotal = cantidad * unidad;
    let fila = `
          <tr class="filas" id="fila${cont}">
               <td>
                    <button type="button" class="btn btn-danger" onclick="eliminarDetalle(${cont})">
                         <i class="fa fa-times"></i>
                    </button>
               </td>
               <td>
                    <input type="hidden"  name="idProducto[]" value="${idProducto}">
                    <input type="hidden"  name="titulo[]" value="${titulo}">
                    <input type="hidden"  name="cantidad[]" value="${cantidad}">
                    <input type="hidden"  name="unidad[]" value="${unidad}">
                    <input type="hidden"  name="precio_venta[]" value="${precio_venta}">
                    <input type="hidden"  name="totalCompra[]" value="${subtotal}">
                    ${titulo}
               </td>
               <td>${cantidad}</td>
               <td>${unidad}</td>
               <td>${precio_venta}</td>
               <td>${subtotal}</td>
          </tr>
     `;
    details.insertAdjacentHTML("beforeend", fila);
    //   $("#detalles").append(fila);
    cont++;
    detalles = detalles + 1;
    modificarSubtotales();
  } else {
    alert(
      "Error al ingresar detalle de compra, verifique los datos del producto."
    );
  }
});

/*=============================================
ACTUALIZAR SUBTOTALES
=============================================*/
const canti = document.querySelector(".canti");
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
});

const preci = document.querySelector(".preci");
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
});

function modificarSubtotales() {
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
}

/*=============================================
CALCULAR TOTALES DE COMPRA
=============================================*/

function calcularTotales() {
  let sub = document.getElementsByName("totalCompra[]");
  let total = 0.0;

  for (let i = 0; i < sub.length; i++) {
    total += document.getElementsByName("totalCompra[]")[i].value;
  }
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
