# /motos DELETE

## Nombre del ENDPOINT:
Eliminar una moto existente.

## MÉTODO HTTP:
``GET``
## RUTA:
/motos/{id}

## DESCRIPCIÓN:
Permite eliminar una moto específica del sistema mediante su ID.

## PARAMETROS:

- ### URL PARAMS:
    - **id** (`string`): ID de la moto a eliminar

- ### QUERY PARAMS:
    Nada

- ### BODY:
    Nada

## VALIDACIONES:
- El ID debe existir en la base de datos
- El ID debe ser un string válido

## RESPUESTAS:

- ### 200 OK
```json
{
    "message": "Moto eliminada exitosamente"
}
```

- ### 404 NOT FOUND
```json
{
    "message": "Moto no encontrada"
}
```

- ### 500 INTERNAL SERVER ERROR
```json
{
    "message": "Error interno del servidor"
}
```