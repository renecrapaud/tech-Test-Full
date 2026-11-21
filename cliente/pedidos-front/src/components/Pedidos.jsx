import { Link } from "react-router-dom";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
} from "@mui/material";
import { Input } from "@mui/material";

const Pedidos = ({
  listaPedidos,
  busqueda,
  manejadorBusqueda,
  campo,
  setCampo,
}) => {
  return (
    <div className="margenContenido">
      <div className="tituloIzq">
        <h3> Vista general, lista de pedidos </h3>
        <div>
          <span>Buscar por columna: </span>
          <Select
            value={campo}
            onChange={(e) => setCampo(e.target.value)}
            labelId="demo-select-small-label"
          >
            <MenuItem value="id">Pedido</MenuItem>
            <MenuItem value="nombre">Nombre</MenuItem>
            <MenuItem value="correo">Correo</MenuItem>
            <MenuItem value="estado">Estado</MenuItem>
          </Select>
          <Input value={busqueda} onChange={manejadorBusqueda} />
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
