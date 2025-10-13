## /pedidos/{idpedido} DELETE

### Nombre del ENDPOINT:
Eliminar un pedido.

### MÉTODO HTTP:
`DELETE`
### RUTA:
/pedidos/{idpedido}

### DESCRIPCIÓN:
Elimina un pedido de la base de datos de forma permanente.

---

### PARÁMETROS:

**URL PARAMS:**
- `idpedido` (string): El ID del pedido a eliminar.

**QUERY PARAMS:**
- Nada

**BODY:**
- Nada

---

### VALIDACIONES:
- `idpedido`: Debe ser un ID válido y existente.

---

### RESPUESTAS:

**200 OK**  
```json
{
    "message": "Pedido eliminado exitosamente"
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