import Pedido from './components/Pedidos'
import Encabezado from './components/Encabezado'
import Pie from './components/Pie'

import './App.css'

function App(props) {

  const {pedidos} = props

  return (
    <>
      <Encabezado />
      <Pedido listaPedidos={pedidos} />
      <Pie />
    </>
  )
}

export default App
