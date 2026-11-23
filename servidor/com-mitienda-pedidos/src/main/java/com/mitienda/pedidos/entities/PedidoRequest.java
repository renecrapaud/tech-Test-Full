package com.mitienda.pedidos.entities;

public record PedidoRequest(
    String clienteId,
    Entrega entrega,
    DetallePedido pedido
) {}