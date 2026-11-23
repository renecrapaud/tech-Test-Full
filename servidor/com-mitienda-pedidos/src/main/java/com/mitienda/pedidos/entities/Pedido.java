package com.mitienda.pedidos.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;
import com.mitienda.clientes.Entities.Cliente;

@Document(collection = "pedidos")
public class Pedido {

    @Id
    private String id;

    @DocumentReference
    private Cliente cliente;

    private Entrega entrega;

    private DetallePedido pedido;

    public Pedido() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente2) {
        this.cliente = cliente2;
    }

    public Entrega getEntrega() {
        return entrega;
    }

    public void setEntrega(Entrega entrega) {
        this.entrega = entrega;
    }

    public DetallePedido getPedido() {
        return pedido;
    }

    public void setPedido(DetallePedido pedido) {
        this.pedido = pedido;
    }
    
}