package com.mitienda.clientes.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mitienda.clientes.Entities.Cliente;
import com.mitienda.clientes.services.ClientesService;

@RestController
@RequestMapping("/clientes")
public class ClientesController {
    final private ClientesService service;

    public ClientesController(ClientesService service){
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<Cliente>> listar(){
        return ResponseEntity.ok(this.service.findAll());
    }

    @GetMapping ("/{id}")
    public ResponseEntity<Cliente> detalles(@PathVariable String id){
        Optional<Cliente> clienteOpcional = service.findById(id);
        if(clienteOpcional.isPresent()){
            return ResponseEntity.ok(clienteOpcional.orElseThrow());
        }
        return ResponseEntity.notFound().build();
    }
}
