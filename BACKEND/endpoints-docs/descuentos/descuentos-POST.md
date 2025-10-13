# Endpoint: /descuentos (POST)

## Nombre del ENDPOINT
Crear un nuevo descuento.

## MÉTODO HTTP
`POST`

## RUTA
`/descuentos`

## DESCRIPCIÓN
Permite registrar un nuevo descuento para ser aplicado en la tienda.

---

## PARÁMETROS

### URL PARAMS
- Nada

### QUERY PARAMS
- Nada

### BODY
- codigo (`string`): Código único para el descuento (e.g., "NAVIDAD10").  
- descripcion (`string`): Descripción del descuento.  
- tipo (`string`): Tipo de descuento (`"porcentaje"` o `"monto"`).  
- valor (`number`): Valor del descuento (e.g., 10 para 10% o 10 soles).  
- total (`number`): Cantidad total de usos disponibles para el descuento.  

---

## VALIDACIONES
- **codigo**: Obligatorio, único, solo letras mayúsculas y números.  
- **descripcion**: Obligatoria, longitud entre 10 y 100 caracteres.  
- **tipo**: Obligatorio, debe ser `"porcentaje"` o `"monto"`.  
- **valor**: Obligatorio, número positivo. Si es porcentaje, debe estar entre 1 y 100.  
- **total**: Obligatorio, número entero positivo.  

---

## RESPUESTAS

### 201 CREATED
```json
{
  "message": "Descuento registrado con éxito"
}
```
### 400 BAD REQUEST
```json
{
  "message": "El codigo de descuento ya existe"
}
```
### 500 INTERNAL SERVER ERROR
```json
{
  "message": "Ocurrio un error interno al registrar el descuento"
}
```