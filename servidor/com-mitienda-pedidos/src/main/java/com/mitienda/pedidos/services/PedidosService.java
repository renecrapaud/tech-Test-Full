package com.mitienda.pedidos.services;

import java.util.List;
import java.util.Optional;

import com.mitienda.pedidos.entities.Pedido;
import com.mitienda.pedidos.entities.PedidoRequest;

public interface PedidosService {

    List<Pedido> findAll();
    Pedido addNew(PedidoRequest pedido);
    Optional<Pedido> findById(String id);
    Pedido update(PedidoRequest pedido);
    void delete(String id);
    
}
