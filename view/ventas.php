<?php include './header.php'; ?>

<div class="content-wrapper p-5">

    <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <div class="form-group col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <a>
                        <button data-toggle="modal" data-target="#myModal" id="btnAgregarArt" type="button" class="btn btn-primary">
                            <span class="fa fa-plus"></span> Agregar Productos
                        </button>
                    </a>
                </div>

                <div class="form-group col-lg-12 col-md-12 col-xs-12">
                    <table id="detalles" class="table table-striped table-bordered table-condensed table-hover">
                        <thead>
                            <tr>
                                <th>Opciones</th>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Unidad</th>
                                <th>Precio Venta</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>TOTAL</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>
                                    <h4 id="total">S/. 0.00</h4>
                                    <input type="hidden" name="total_compra" id="total_compra" />
                                </th>
                            </tr>
                        </tfoot>
                        <tbody id="productos"></tbody>
                    </table>
                </div>

                <div class="row justify-content-end">
                    <div class="col-lg-4 col-sm-2">
                        <div class="form-group">

                            <div class="form-group">
                                <div class="input-group">
                                    <label class="mr-5 col-form-label panel" style="max-width: 200px">Efectivo del
                                        cliente:</label>
                                    <input type="text" class="form-control input-lg efectivo mr-2" name="efectivo" required="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-end">
                    <div class="col-lg-4 col-sm-2">
                        <div class="form-group">

                            <div class="form-group">
                                <div class="input-group">
                                    <label class="mr-5 col-form-label panel" style="max-width: 200px">Cambio del
                                        cliente:</label>
                                    <input type="text" readonly class="form-control input-lg cambio mr-2" name="cambio" required="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <button class="btn btn-success guardarCompra" type="button" onclick="guardarData();">
                        <i class="fa fa-save"></i> Guardar
                    </button>
                    <button class="btn btn-danger" onclick="Cancelar()" type="button" id="btnCancelar">
                        <i class="fas fa-ban"></i> Cancelar
                    </button>
                </div>

            </div>
        </div>
    </div>

    <div class="modal fade show" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" style="padding-right: 17px;" aria-modal="true">
        <div class="modal-dialog " role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Seleccione un producto</h5>
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <table id="example2" class="table table-striped table-bordered table-condensed tablaAgregaP table-hover">
                        <thead>
                            <th>Opciones</th>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                            <th>Precio Unitario</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <button idProducto="1" class="btn btn-primary agregar" titulo="Galleta #1">
                                        <img src="./assets/images/galleta.png" alt="">
                                    </button>
                                </td>
                                <td>Galleta #1</td>
                                <td>20</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>
                                    <button idProducto="2" class="btn btn-primary agregar" titulo="Galleta #2">
                                        <img src="./assets/images/galleta.png" alt="">
                                    </button>
                                </td>
                                <td>Galleta #2</td>
                                <td>20</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>
                                    <button idProducto="3" class="btn btn-primary agregar" titulo="Galleta #3">
                                        <img src="./assets/images/galleta.png" alt="">
                                    </button>
                                </td>
                                <td>Galleta #3</td>
                                <td>20</td>
                                <td>15</td>
                            </tr>
                            <tr>
                                <td>
                                    <button idProducto="4" class="btn btn-primary agregar" titulo="Galleta #4">
                                        <img src="./assets/images/galleta.png" alt="">
                                    </button>
                                </td>
                                <td>Galleta #4</td>
                                <td>20</td>
                                <td>30</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <script src="assets/vendors/js/vendor.bundle.base.js"></script>

    <script src="./scripts/ventas.js"></script>

    <?php include './footer.php'; ?>