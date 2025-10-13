# Endpoint: /descuentos/{id} (DELETE)

## Nombre del ENDPOINT
Eliminar un descuento.

## MÉTODO HTTP
`DELETE`

## RUTA
`/descuentos/{id}`

## DESCRIPCIÓN
Elimina un descuento de la base de datos de forma permanente.  
El `id` en la ruta se refiere al **código único** del descuento.

---

## PARÁMETROS

### URL PARAMS
- **id** (`string`): El código del descuento a eliminar.

### QUERY PARAMS
- Nada

### BODY
- Nada

---

## VALIDACIONES
- **id**: Debe ser un código válido y existente.  

---

## RESPUESTAS

### 200 OK
```json
{
  "message": "Descuento eliminado exitosamente"
}
```
### 404 NOT FOUND
```json
{
  "message": "Descuento no encontrado"
}
```
### 500 INTERNAL SERVER ERROR
```json
{
  "message": "Error interno del servidor"
}
```