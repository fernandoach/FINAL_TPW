# Vendedores GET

## Descripción

Este endpoint retorna una lista de todos los vendedores registrados en el sistema.

## Método HTTP

`GET`

## Ruta
```
/vendedores
```

## Parámetros

Nada

## Respuestas

### 200 OK (Sin resultados)
```json
{
    "vendedores": []
}
```

### 200 OK (Con resultados)
```json
{
    "vendedores": [
        {
            "idvendedor": "id2",
            "nombres": "Miguel",
            "apellidos": "Minaya",
        },
        {
            "idvendedor": "id1",
            "nombres": "Fernando",
            "apellidos": "Vazques"
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