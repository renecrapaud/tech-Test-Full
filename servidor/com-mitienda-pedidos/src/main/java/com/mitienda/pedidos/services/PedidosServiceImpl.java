package com.mitienda.pedidos.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mitienda.clientes.Entities.Cliente;
import com.mitienda.clientes.repository.ClientesRepository;
import com.mitienda.pedidos.entities.Pedido;
import com.mitienda.pedidos.entities.PedidoRequest;
import com.mitienda.pedidos.repository.PedidosRepository;

@Service 
public class PedidosServiceImpl implements PedidosService{
    private final PedidosRepository repository;
    private final ClientesRepository clientesRepository;

    public PedidosServiceImpl(PedidosRepository repository, ClientesRepository clientesRepository){
        this.repository = repository;
        this.clientesRepository = clientesRepository;
    }

    @Override
    @Transactional (readOnly = true)
    public List<Pedido> findAll() {
        return (List<Pedido>) repository.findAll();
    }

    @Override
    @Transactional (readOnly = true)
    public Optional<Pedido> findById(String id) {
        return repository.findById(id);
    }

    @Override
    public Pedido addNew(PedidoRequest pedidoReq) {
        Pedido pedido = armarPedidoObj(pedidoReq, null);
        return repository.insert(pedido);
    }

    @Override
    public Pedido update(PedidoRequest pedidoReq) {
        Pedido pedido = armarPedidoObj(pedidoReq, pedidoReq.clienteId());
        return repository.save(pedido);
    }

    @Override
    public void delete(String id) {
        repository.deleteById(id);
    }

    private Pedido armarPedidoObj(PedidoRequest pedidoReq, String clienteId){
        Cliente cliente = clientesRepository.findById(pedidoReq.clienteId())
            .orElseThrow(() -> new IllegalArgumentException(
                "No existe un cliente con id: " + clienteId
            ));
        Pedido pedido = new Pedido();
        pedido.setId(clienteId);
        pedido.setCliente(cliente);
        pedido.setEntrega(pedidoReq.entrega());
        pedido.setPedido(pedidoReq.pedido());
        return pedido;
    }
}
