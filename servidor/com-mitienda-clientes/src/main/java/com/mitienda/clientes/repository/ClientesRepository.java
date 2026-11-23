package com.mitienda.clientes.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.mitienda.clientes.Entities.Cliente;

public interface ClientesRepository extends MongoRepository<Cliente, String>{

}
