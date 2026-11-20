const Pedidos = ({ listaPedidos }) => {

    return (
      <>
        <h3> Vista general, lista de pedidos </h3>
        <table>
          <thead>
            <tr>
              <th>Pedido</th>
              <th>Cliente</th>
              <th>Dirección Correo</th>
              <th>Productos</th>
              <th>Total</th>
              <th>Estado</th>
              <th>Ver</th>
            </tr>
          </thead>
          <tbody>
            {listaPedidos.map(
              pedido =>
                <tr key={pedido.id}>
                  <td>{pedido.id}</td>
                  <td>{pedido.cliente.nombre}</td>
                  <td>{pedido.cliente.correoElectronico}</td>
                  <td>{pedido.pedido.cantidad}</td>
                  <td>{pedido.pedido.precio}</td>
                  <td>{pedido.pedido.estadoPedido}</td>
                  <td></td>
                </tr>
            )}
          </tbody>
        </table>
      </>
    )
}

export default Pedidos
