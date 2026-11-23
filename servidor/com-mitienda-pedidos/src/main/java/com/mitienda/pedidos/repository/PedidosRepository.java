package com.mitienda.pedidos.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.mitienda.pedidos.entities.Pedido;

public interface PedidosRepository extends MongoRepository<Pedido, String> {
    
}
