# Endpoint: /pedidos (POST)

## Nombre del ENDPOINT
Crear un nuevo pedido.

## MÉTODO HTTP
`POST`

## RUTA
`/pedidos`

## DESCRIPCIÓN
Permite registrar un nuevo pedido, asociándolo a un cliente y un vendedor, y definiendo las motos que se compran.

---

## PARÁMETROS

### URL PARAMS
- Nada

### QUERY PARAMS
- Nada

### BODY
- idcliente (`string`): El ID del cliente que realiza el pedido.  
- idvendedor (`string`): El ID del vendedor que procesa el pedido.  
- detalles (`array`): Lista con los detalles de cada moto en el pedido.  
  - idmoto (`string`): El ID de la moto.  
  - cantidad (`number`): Cantidad de esa moto.  
  - precioUnitario (`number`): Precio de la moto en el momento de la compra.  
- idDescuento (`string`, opcional): El ID del descuento aplicado al pedido.  
- total (`number`): El monto total del pedido, incluyendo descuentos.  
- destino (`string`): La dirección de envío del pedido.  

---

## VALIDACIONES
- idcliente: Obligatorio, debe ser un ID de cliente válido y existente.  
- idvendedor: Obligatorio, debe ser un ID de vendedor válido y existente.  
- detalles: Obligatorio, no debe estar vacío. Cada objeto debe tener `idmoto` y `cantidad`.  
- idmoto: Debe ser un ID de moto válido y existente.  
- cantidad: Debe ser un número entero positivo.  
- total: Obligatorio, debe ser un número positivo.  
- destino: Obligatorio, longitud mínima de 10 caracteres.  

---

## RESPUESTAS

### 201 CREATED
```json
{
  "message": "Pedido registrado con éxito",
  "pedido": {
    "idpedido": "p123abc",
    "fechaPedido": "2025-09-20T10:00:00Z"
  }
}
```
### 400 BAD REQUEST
```json

{
  "message":"no puede estar vacía"
}
```
### 500 INTERNAL SERVER ERROR
```json
{
  "message": "Ocurrió un error interno al registrar el pedido"
}
```
