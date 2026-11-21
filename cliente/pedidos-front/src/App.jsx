import { useState } from 'react'
import Pedido from './components/Pedidos'
import Encabezado from './components/Encabezado'
import Pie from './components/Pie'

import './App.css'

function App(props) {

    const [pedidos, setPedidos] = useState(props.pedidos)
    const [campoBusca, setCampoBusca] = useState('')
    const [colSel, setColumnaSel] = useState('id')

    const extractores = {
        id: (p) => p.id,
        nombre: (p) => p.cliente?.nombre,
        correo: (p) => p.cliente?.correoElectronico,
        estado: (p) => p.pedido.estadoPedido
    };

    const pedidosFiltrados = campoBusca == ''
        ? pedidos
        : pedidos.filter(pedido => {
            const valor = extractores[colSel]?.(pedido)
            return String(valor ?? '').toLowerCase().includes(campoBusca.toLowerCase())
        });

    const manejaCampoBusca = (event) => {
        setCampoBusca(event.target.value)
    }

    return (
        <>
          <Encabezado busqueda={campoBusca} manejadorBusqueda={manejaCampoBusca}
              campo={colSel} setCampo={setColumnaSel} />
          <Pedido listaPedidos={pedidosFiltrados} />
          <Pie />
        </>
    )
}
export default App
