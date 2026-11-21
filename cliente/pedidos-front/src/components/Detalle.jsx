import { useParams } from "react-router-dom";

const Detalle = ({ listaPedidos }) => {
    const id = useParams().id;
    const elemento = listaPedidos.find((n) => n.id === id);

    return (
        <div className="margenContenido">
            <header className="order-header">
                <div>
                    <h1>Detalle del Pedido</h1>
                    <p className="order-subtitle">
                        Información general de {id}
                    </p>
                </div>
                <div className="order-status">
                    <span className="status-label">Estatus:</span>

                    <span className="badge status--enviado">
                        {elemento.pedido.estadoPedido}
                    </span>
                </div>
            </header>

            <div className="info-grid">
                <section className="card" aria-labelledby="cliente-heading">
                    <h2 id="cliente-heading" className="card-title">
                        Datos del cliente
                    </h2>
                    <dl className="data-list">
                        <div className="data-row">
                            <dt>Nombre(s):</dt>
                            <dd>{elemento.cliente.nombre}</dd>
                        </div>
                        <div className="data-row">
                            <dt>Apellido paterno:</dt>
                            <dd>{elemento.cliente.apellidoPat}</dd>
                        </div>
                        <div className="data-row">
                            <dt>Apellido materno:</dt>
                            <dd>{elemento.cliente.apellidoMat}</dd>
                        </div>
                        <div className="data-row">
                            <dt>Correo electrónico:</dt>
                            <dd>
                                <a href="mailto:carlos.mendoza@ejemplo.com">
                                    {elemento.cliente.correoElectronico}
                                </a>
                            </dd>
                        </div>
                    </dl>
                </section>

                <section className="card" aria-labelledby="entrega-heading">
                    <h2 id="entrega-heading" className="card-title">
                        Datos de entrega
                    </h2>
                    <dl className="data-list">
                        <div className="data-row data-row--block">
                            <dt>Dirección de envío:</dt>
                            <dd className="address-box">
                                {elemento.entrega.direccion}
                            </dd>
                        </div>
                    </dl>
                </section>
            </div>
            <section className="card" aria-labelledby="pedido-heading">
                <h2 id="pedido-heading" className="card-title">
                    Datos del pedido
                </h2>

                <div className="table-responsive">
                    <table className="order-table">
                        <thead>
                            <tr>
                                <th>Código del producto</th>
                                <th className="text-center">Cantidad</th>
                                <th className="text-right">Precio</th>
                                <th className="text-right">Estado del pedido</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{elemento.pedido.codigoProducto}</td>
                                <td className="text-center">
                                    {elemento.pedido.cantidad}
                                </td>
                                <td className="text-right">
                                    {elemento.pedido.precio}
                                </td>
                                <td className="text-right">
                                    {elemento.pedido.estadoPedido}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default Detalle;
