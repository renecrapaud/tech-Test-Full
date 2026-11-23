import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios'

import { Container } from "@mui/material";

import Pedido from "./components/Pedidos";
import Detalle from "./components/Detalle";
import Encabezado from "./components/Encabezado";
import Pie from "./components/Pie";

import { useConfig } from "./context/ConfigContext.jsx";
import "./App.css";

function App() {
  const [pedidos, setPedidos] = useState([]);
  const [campoBusca, setCampoBusca] = useState("");
  const { pedidosApiUrl } = useConfig()

    useEffect(() => {
    if (!pedidosApiUrl) return;
    axios.get(pedidosApiUrl).then(response => {
        setPedidos(response.data)
    })
  }, [pedidosApiUrl])

  const extractores = {
    id: (p) => p.id,
    nombre: (p) => p.cliente?.nombre,
    correo: (p) => p.cliente?.correoElectronico,
    estado: (p) => p.pedido?.estadoPedido,
  };

  const textoBusqueda = campoBusca.trim().toLowerCase();
    const pedidosFiltrados =
      !textoBusqueda ? pedidos
      : pedidos.filter((pedido) =>
        Object.values(extractores).some((extractor) =>
                String(extractor(pedido) ?? "")
                  .toLowerCase()
                  .includes(textoBusqueda)
              )
        );

  const manejaCampoBusca = (event) => {
    setCampoBusca(event.target.value);
  };

  return (
    <Container>
      <Router>
        <Encabezado />
        <Routes>
          <Route
            path="/detalle/:id"
            element={<Detalle listaPedidos={pedidosFiltrados}></Detalle>}
          />
          <Route
            path="/"
            element={
              <Pedido
                listaPedidos={pedidosFiltrados}
                busqueda={campoBusca}
                manejadorBusqueda={manejaCampoBusca}
              />
            }
          />
        </Routes>
        <Pie />
      </Router>
    </Container>
  );
}
export default App;
