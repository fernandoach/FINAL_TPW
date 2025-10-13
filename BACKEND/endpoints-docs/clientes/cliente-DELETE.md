# Cliente/ DELETE

Este endpoint permite eliminar de forma permanente un cliente específico de la base de datos.

## Método HTTP
`DELETE`

## Ruta
`/clientes/{idcliente}`

## Parámetros

### URL Params
- `idcliente` (string) - ID del cliente a eliminar

### Query Params
Nada
### Body
No requiere body

## Validaciones
- `idcliente`: Debe ser un ID válido y existente en la base de datos

## Respuestas

### 200 OK
```json
{
    "message": "Cliente eliminado exitosamente"
}
```

### 404 NOT FOUND
```json
{
    "message": "Cliente no encontrado"
}
```

### 500 INTERNAL SERVER ERROR
```json
{
    "message": "Error interno del servidor"
}
```