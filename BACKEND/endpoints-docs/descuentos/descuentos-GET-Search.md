# Endpoint: /descuentos/search (GET)

## Nombre del ENDPOINT
Buscar descuentos por criterios.

## MÉTODO HTTP
`GET`

## RUTA
`/descuentos/search`

## DESCRIPCIÓN
Permite buscar descuentos utilizando uno o varios criterios, como el tipo o el valor.

---

## PARÁMETROS

### URL PARAMS
- Nada

### QUERY PARAMS
- **tipo** (`string`, opcional): Filtra por el tipo de descuento (`"porcentaje"` o `"monto"`).  
- **valor** (`number`, opcional): Busca descuentos con un valor específico.  

### BODY
- Nada

---

## VALIDACIONES
- **tipo**: Debe ser `"porcentaje"` o `"monto"`.  
- **valor**: Debe ser un número positivo.  

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
    }
  ]
}
```
### 400 BAD REQUEST
```json
{
  "message": "Parámetros de búsqueda inválidos"
}
```
### 500 INTERNAL SERVER ERROR
```json
{
  "message": "Error interno del servidor"
}
```