import { useState } from 'react'
import Pedido from './components/Pedido'
import './App.css'

function App(props) {

  const {pedidos} = props

  return (
    <>
      <h1>VISIALIZACION DE PEDIDOS</h1>

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
          {pedidos.map(
            pedido =>
                  <Pedido key={ pedido.id } pedido={pedido} />
          )}
        </tbody>
      </table>
      <h3>Tienda en línea. 2026</h3>
    </>
  )
}

export default App
