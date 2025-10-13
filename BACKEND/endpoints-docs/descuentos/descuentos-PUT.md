# Endpoint: /descuentos/{id} (PUT)

## Nombre del ENDPOINT
Actualizar un descuento existente.

## MÉTODO HTTP
`PUT`

## RUTA
`/descuentos/{id}`

## DESCRIPCIÓN
Permite actualizar la información de un descuento específico.  
El `id` en la ruta se refiere al **código único** del descuento.

---

## PARÁMETROS

### URL PARAMS
- **id** (`string`): El código del descuento a actualizar.

### QUERY PARAMS
- Nada

### BODY
- descripcion (`string`, opcional)  
- tipo (`string`, opcional)  
- valor (`number`, opcional)  
- total (`number`, opcional)  

---

## VALIDACIONES
- Se aplican todas las validaciones definidas en el **POST** para los campos que se envíen.  
- **id**: Debe ser un código válido y existente en la base de datos.  

---

## RESPUESTAS

### 200 OK
```json
{
  "message": "Descuento actualizado exitosamente",
  "descuento": {
    "codigo": "VERANO25",
    "descripcion": "30% de descuento en motos pisteras",
    "tipo": "porcentaje",
    "valor": 30
  }
}
```
### 400 BAD REQUEST
```json
{
  "message": "El valor del descuento debe ser un número positivo"
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
