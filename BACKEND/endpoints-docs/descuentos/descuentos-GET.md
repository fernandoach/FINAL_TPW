# Endpoint: /descuentos (GET)

## Nombre del ENDPOINT

Listar todos los descuentos.

## MÉTODO HTTP
`GET`

## RUTA
`/descuentos`

## DESCRIPCIÓN
Este endpoint retorna una lista de todos los descuentos disponibles en el sistema.

---

## PARÁMETROS

### URL PARAMS
Nada

### QUERY PARAMS
Nada

### BODY
Nada

---

## VALIDACIONES
Nada

---

## RESPUESTAS

### 200 OK (Sin resultados)
```json
{
  "descuentos": []
}
```

### 200 OK (Con resultados)
```json
{
  "descuentos": [
    {
      "codigo": "VERANO25",
      "descripcion": "25% de descuento en motos pisteras",
      "tipo": "porcentaje",
      "valor": 25,
      "total": 10
    },
    {
      "codigo": "NAVIDAD100",
      "descripcion": "100 soles de descuento en todos los accesorios",
      "tipo": "monto",
      "valor": 100,
      "total": 5
    }
  ]
}
```
### 400 BAD REQUEST
```json
{
  "message": "ocurrió un problema..."
}
```