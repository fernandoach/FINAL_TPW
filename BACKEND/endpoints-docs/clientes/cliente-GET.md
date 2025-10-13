# cliente GET

## Método HTTP
`GET`

## Ruta
```
/clientes
```

## Descripción
Este endpoint retorna una lista de todos los clientes registrados, incluyendo sus nombres, apellidos y ID de cliente.

## Parámetros

### URL Params
Nada

### Query Params
Nada

### Body
Nada

## Validaciones
Nada

## Respuestas

### 200 OK
Lista vacía:
```json
{
    "clientes": []
}
```

Lista con clientes:
```json
{
    "clientes": [
        {
            "nombres": "Miguel",
            "apellidos": "Minaya",
            "idcliente": "6a9e8f4c3"
        },
        {
            "nombres": "Fernando",
            "apellidos": "Vasquez",
            "idcliente": "b7d2a5e1f"
        }
    ]
}
```

### 400 Bad Request
```json
{
    "message": "ocurrió un problema..."
}
```