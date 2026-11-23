package com.mitienda.pedidos.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mitienda.pedidos.entities.Pedido;
import com.mitienda.pedidos.entities.PedidoRequest;
import com.mitienda.pedidos.services.PedidosService;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/pedidos")
public class PedidosController {
    final private PedidosService service;

    public PedidosController(PedidosService service){
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<Pedido>> listarRegistros() {
        return ResponseEntity.ok(this.service.findAll());
    }
    
    @GetMapping ("/{id}")
    public ResponseEntity<Pedido> detalles(@PathVariable String id){
        Optional<Pedido> pedidoOpcional = service.findById(id);
        if(pedidoOpcional.isPresent()){
            return ResponseEntity.ok(pedidoOpcional.orElseThrow());
        }
        return ResponseEntity.notFound().build();
    }

     @PostMapping
    public ResponseEntity<Pedido> agregarNuevo(@RequestBody PedidoRequest pedido) {        
        return ResponseEntity.ok(this.service.addNew(pedido));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Pedido> actualizaRegistro(@RequestBody Pedido pedido, @PathVariable String id) {
        Optional<Pedido> pedidoOpcional = service.findById(id);
         if (pedidoOpcional.isPresent()) {
             return ResponseEntity.ok(this.service.update(pedido));
         }
         return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> borrarRegistro(@PathVariable String id){
        Optional<Pedido> pedidoOpcional = service.findById(id);
        if (pedidoOpcional.isPresent()) {
            this.service.delete(id);
            return ResponseEntity.ok("Solicitud para elimminar enviada");
        }
            return ResponseEntity.notFound().build();
    }

}
