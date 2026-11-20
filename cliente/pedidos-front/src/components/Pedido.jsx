const Pedido = ({ pedido }) => {
    return (
      <tr>
        <td>{pedido.id}</td>
        <td>{pedido.cliente.nombre}</td>
        <td>{pedido.cliente.correoElectronico}</td>
        <td>{pedido.pedido.cantidad}</td>
        <td>{pedido.pedido.precio}</td>
        <td>{pedido.pedido.estadoPedido}</td>
        <td></td>
      </tr>
    )
}

export default Pedido
