import { Link } from "react-router-dom";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  InputLabel,
  Input
} from "@mui/material";

const Pedidos = ({
  listaPedidos,
  busqueda,
  manejadorBusqueda
}) => {
  return (
    <div className="margenContenido">
      <div className="tituloIzq">
        <h3> Vista general, lista de pedidos </h3>
        <div>
          <InputLabel> Filtrar resultados </InputLabel>
          <Input value={busqueda} onChange={manejadorBusqueda} placeholder="Id, nombre, correo, estado"/>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Dirección Correo</TableCell>
              <TableCell>Productos</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Detalle</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listaPedidos == "" ? (
              <tr>
                <td colSpan="7">
                  <h3>
                    No hay resultados que coincidan con el criterio de búsqueda
                  </h3>
                </td>
              </tr>
            ) : (
              listaPedidos.map((pedido) => (
                <TableRow key={pedido.id}>
                  <TableCell>{pedido.id}</TableCell>
                  <TableCell>{pedido.cliente.nombre} </TableCell>
                  <TableCell>{pedido.cliente.correoElectronico}</TableCell>
                  <TableCell>{pedido.pedido.cantidad}</TableCell>
                  <TableCell>{pedido.pedido.precio}</TableCell>
                  <TableCell>{pedido.pedido.estadoPedido}</TableCell>
                  <TableCell>
                    <Link to={`/detalle/${pedido.id}`}>Ver</Link>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Pedidos;
