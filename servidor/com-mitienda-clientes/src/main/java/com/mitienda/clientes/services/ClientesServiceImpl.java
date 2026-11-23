package com.mitienda.clientes.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mitienda.clientes.Entities.Cliente;
import com.mitienda.clientes.repository.ClientesRepository;

@Service
public class ClientesServiceImpl implements ClientesService{

    final private ClientesRepository repository;

    public ClientesServiceImpl(ClientesRepository repository){
        this.repository = repository;
    }

    @Override
    @Transactional (readOnly = true)
    public List<Cliente> findAll() {
        return (List<Cliente>) repository.findAll();
    }

    @Override
    @Transactional (readOnly = true)
    public Optional<Cliente> findById(String id) {
        return repository.findById(id);
    }

}
