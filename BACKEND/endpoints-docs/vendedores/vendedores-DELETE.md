### /vendedores/{idvendedor} DELETE

**Nombre del ENDPOINT:**  
Eliminar un vendedor.

**MÉTODO HTTP:**  
`DELETE`

**RUTA:**  
`/vendedores/{idvendedor}`

**DESCRIPCIÓN:**  
Elimina un vendedor de la base de datos de forma permanente.

---

### PARÁMETROS

- **URL PARAMS:**  
  - `idvendedor` (string): El ID del vendedor a eliminar.  

- **QUERY PARAMS:**  
  - Nada  

- **BODY:**  
  - Nada  

---

### VALIDACIONES
- `idvendedor`: Debe ser un ID válido y existente.  

---

### RESPUESTAS

- **200 OK**
```json
{
  "message": "Vendedor eliminado exitosamente"
}
```
- ### 404 NOT FOUND
```json
{
    "message": "Vendedor no encontrada"
}
```

- ### 500 INTERNAL SERVER ERROR
```json
{
    "message": "Error interno del servidor"
}