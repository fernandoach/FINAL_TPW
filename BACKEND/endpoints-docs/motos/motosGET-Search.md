# /motos/search GET

## Nombre del ENDPOINT:
Buscar motos por criterios

## MÉTODO HTTP:
Método GET

## RUTA:
/motos/search

## DESCRIPCIÓN:
Permite buscar motos en el sistema según diferentes criterios de búsqueda.

## PARAMETROS:

- ### URL PARAMS:
    Nada

- ### QUERY PARAMS:
    - **marca** (`string`, opcional): Filtrar por marca
    - **modelo** (`string`, opcional): Filtrar por modelo
    - **precioMin** (`number`, opcional): Precio mínimo en soles
    - **precioMax** (`number`, opcional): Precio máximo en soles
    - **cilindrada** (`string`, opcional): Filtrar por cilindrada
    - **proposito** (`string`, opcional): Filtrar por propósito
    - **stock** (`boolean`, opcional): Filtrar por disponibilidad en stock

- ### BODY:
    Nada

## VALIDACIONES:
- **marca**: Solo letras, espacios y guiones
- **modelo**: Letras, números, espacios y guiones
- **precioMin**: Debe ser un número positivo
- **precioMax**: Debe ser un número positivo y mayor que precioMin
- **cilindrada**: Solo números y caracteres válidos
- **proposito**: Solo letras, espacios, comas y guiones
- **stock**: Valor booleano

## RESPUESTAS:

- ### 200 OK (Sin resultados)
```json
{
    "motos": []
}
```

- ### 200 OK (Con resultados)
```json
{
    "motos": [
        {
            "marca": "Honda",
            "modelo": "CBR600RR",
            "precioSoles": 55000,
            "precioDolares": 14500,
            "cilindrada": "599 cc",
            "proposito": "pistera",
            "stock": 10
        },
        ...
    ]
}
```

- ### 400 BAD REQUEST
```json
{
    "message": "Parámetros de búsqueda inválidos"
}
```

- ### 500 INTERNAL SERVER ERROR
```json
{
    "message": "Error interno del servidor"
}
```