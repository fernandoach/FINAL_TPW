## /pedidos/search GET

### Nombre del ENDPOINT:
Buscar pedidos por criterios.

### MÉTODO HTTP:
`GET`

### RUTA:
`/pedidos/search`

### DESCRIPCIÓN:
Permite buscar pedidos utilizando uno o varios criterios, como el estado de pago, el estado de entrega o la fecha.

---

### PARÁMETROS:

**URL PARAMS:**
- Nada

**QUERY PARAMS:**
- `estadoPago` (string, opcional): Filtra por el estado de pago.
- `estadoEntrega` (string, opcional): Filtra por el estado de entrega.
- `fechaInicio` (string, opcional): Fecha de inicio del rango de búsqueda (formato `YYYY-MM-DD`).
- `fechaFin` (string, opcional): Fecha de fin del rango de búsqueda (formato `YYYY-MM-DD`, debe ser posterior o igual a `fechaInicio`).

**BODY:**
- Nada

---

### VALIDACIONES:
- `estadoPago`: Debe ser `"Pagado"` o `"Pendiente"`.
- `estadoEntrega`: Debe ser `"Pendiente"`, `"Enviado"` o `"Entregado"`.
- `fechaInicio`: Formato válido `YYYY-MM-DD`.
- `fechaFin`: Formato válido `YYYY-MM-DD` y mayor o igual a `fechaInicio`.

---

### RESPUESTAS:

**200 OK (Sin resultados)**  
```json
{
    "pedidos": []
}
```
### 200 OK (Con resultados)
```json
{
    "pedidos": [
        {
            "idpedido": "p123abc",
            "fechaPedido": "2025-09-20T10:00:00Z",
            "estadoEntrega": "Pendiente",
            "total": 7409
        }
    ]
}
```

### 400 BAD REQUEST
```json
{
    "message": "Busque no valida"
}
```