import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios'

import { Container } from "@mui/material";

import Pedido from "./components/Pedidos";
import Detalle from "./components/Detalle";
import Encabezado from "./components/Encabezado";
import Pie from "./components/Pie";


import "./App.css";

function App() {
  const [pedidos, setPedidos] = useState([]);
  const [campoBusca, setCampoBusca] = useState("");
  const [colSel, setColumnaSel] = useState("id");

    useEffect(() => {
        axios.get('http://172.24.102.112:8081/pedidos').then(response => {
          setPedidos(response.data)
      })
    }, [])
  const extractores = {
    id: (p) => p.id,
    nombre: (p) => p.cliente?.nombre,
    correo: (p) => p.cliente?.correoElectronico,
    estado: (p) => p.pedido.estadoPedido,
  };

  const pedidosFiltrados =
    campoBusca == ""
      ? pedidos
      : pedidos.filter((pedido) => {
          const valor = extractores[colSel]?.(pedido);
          return String(valor ?? "")
            .toLowerCase()
            .includes(campoBusca.toLowerCase());
        });

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
                campo={colSel}
                setCampo={setColumnaSel}
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
