const Encabezado = ({ busqueda, manejadorBusqueda, campo, setCampo }) => {
    return (
        <>
            <h1>GESTION DE PEDIDOS</h1>
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
        </>

    )
}

export default Encabezado
