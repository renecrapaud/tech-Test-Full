package com.mitienda.clientes.services;

import java.util.List;
import java.util.Optional;

import com.mitienda.clientes.Entities.Cliente;

public interface ClientesService {

    List<Cliente> findAll();
    Cliente addNew(Cliente cliente);
    Optional<Cliente> findById(String id);
    Cliente update(Cliente cliente);
    void delete(String id);

}
