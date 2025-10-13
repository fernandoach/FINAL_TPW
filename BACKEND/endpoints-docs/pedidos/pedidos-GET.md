# Endpoint: /pedidos (GET)

## Nombre del ENDPOINT
Listar todos los pedidos.

## MÉTODO HTTP
`GET`

## RUTA
`/pedidos`

## DESCRIPCIÓN
Este endpoint retorna una lista de todos los pedidos registrados en el sistema, incluyendo sus detalles clave.

---

## PARÁMETROS

### URL PARAMS
- Nada

### QUERY PARAMS
- Nada

### BODY
- Nada

---

## VALIDACIONES
- Nada

---

## RESPUESTAS

### 200 OK (Sin resultados)
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
    },
    {
      "idpedido": "p456def",
      "fechaPedido": "2025-09-20T11:30:00Z",
      "estadoEntrega": "Enviado",
      "total": 14500
    }
  ]
}
```

### 400 BAD REQUEST
```json
{
  "message": "ocurrió un problema..."
}
```