## /pedidos/{idpedido} PUT

### Nombre del ENDPOINT:
Actualizar un pedido existente.

### MÉTODO HTTP:
`PUT`
### RUTA:
`/pedidos/{idpedido}`

### DESCRIPCIÓN:
Permite actualizar el estado de pago, el estado de entrega o la dirección de destino de un pedido específico.

---

### PARÁMETROS:

**URL PARAMS:**
- `idpedido` (string): El ID del pedido a actualizar.

**QUERY PARAMS:**
- Nada

**BODY:**
- `estadoPago` (string, opcional): Nuevo estado de pago (`"Pagado"`, `"Pendiente"`).
- `estadoEntrega` (string, opcional): Nuevo estado de entrega (`"Pendiente"`, `"Enviado"`, `"Entregado"`).
- `destino` (string, opcional): Nueva dirección de destino.

---

### VALIDACIONES:
- `idpedido`: Debe ser un ID de pedido válido y existente.  
- `estadoPago`: Si se envía, debe ser un valor permitido.  
- `estadoEntrega`: Si se envía, debe ser un valor permitido.  
- `destino`: Si se envía, debe ser una cadena de texto válida.  

---

### RESPUESTAS:

**200 OK**  
```json
{
    "message": "Pedido actualizado exitosamente",
    "pedido": {
        "idpedido": "p123abc",
        "estadoEntrega": "Enviado"
    }
}
```
### 400 BAD REQUEST
```json
{
    "message": "El estado de entrega no es válido"
}
```

### 404 NOT FOUND
```json
{
    "message": "Pedido no encontrado"
}
```

### 500 INTERNAL SERVER ERROR
```json
{
    "message": "Error interno del servidor"
}
```