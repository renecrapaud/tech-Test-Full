import { Link } from 'react-router-dom'

const Pedidos = ({ listaPedidos, busqueda, manejadorBusqueda, campo, setCampo } ) => {

    return (
      <>
            <h3> Vista general, lista de pedidos </h3>
            <p>
              <span>Buscar por columna: </span>
              <select value={campo} onChange={e => setCampo(e.target.value)}>
                  <option value="id">Pedido</option>
                  <option value="nombre">Nombre</option>
                  <option value="correo">Correo</option>
                  <option value="estado">Estado</option>
                </select>
                <input value={busqueda} onChange={manejadorBusqueda}/>
            </p>
        <table>
          <thead>
            <tr>
              <th>Pedido</th>
              <th>Cliente</th>
              <th>Dirección Correo</th>
              <th>Productos</th>
              <th>Total</th>
              <th>Estado</th>
              <th>Detalle</th>
            </tr>
          </thead>
          <tbody>
          {(listaPedidos == '') ?
            <tr><td colSpan="7"><h3>No hay resultados que coincidan con el
                        criterio de búsqueda</h3></td></tr>
          :
            listaPedidos.map(
              pedido =>
                <tr key={pedido.id}>
                  <td>{pedido.id}</td>
                  <td>{pedido.cliente.nombre} </td>
                  <td>{pedido.cliente.correoElectronico}</td>
                  <td>{pedido.pedido.cantidad}</td>
                  <td>{pedido.pedido.precio}</td>
                  <td>{pedido.pedido.estadoPedido}</td>
                  <td><Link to={`/detalle/${pedido.id}`}>Ver</Link></td>
                </tr>
            )}
          </tbody>
        </table>
      </>
    )
}

export default Pedidos
