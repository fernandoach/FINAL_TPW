# Cliente/GET/SEACRH

## Método HTTP
`GET`

## Ruta
`/clientes/search`

## Descripción

Permite buscar clientes usando uno o varios criterios, como nombres, apellidos, género o correo electrónico.

## Parámetros

### URL Params

Nada
### Query Params
- `nombres` (string, opcional): Busca por los nombres del cliente
- `apellidos` (string, opcional): Busca por los apellidos del cliente
- `genero` (string, opcional): Filtra por el género del cliente
- `correo` (string, opcional): Busca por el correo electrónico del cliente

### Body

Nada

## Validaciones
- `nombres`: Solo letras y espacios
- `apellidos`: Solo letras y espacios
- `genero`: Debe ser uno de los valores permitidos ("Masculino", "Femenino", "Otro")
- `correo`: Debe ser un formato de email válido

## Respuestas

### 200 OK (Sin resultados)
```json
{
    "clientes": []
}
```

### 200 OK (Con resultados)
```json
{
    "clientes": [
        {
            "idcliente": "6a9e8f4c3",
            "nombres": "Juan",
            "apellidos": "Pérez",
            "genero": "Masculino",
            "correo": "juan.perez@example.com"
        }
    ]
}
```

### 400 BAD REQUEST
```json
{
    "message": "Busqueda no encontrada"
}
```

### 500 INTERNAL SERVER ERROR
```json
{
    "message": "Error interno del servidor"
}
```