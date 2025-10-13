### /vendedores PUT

**Nombre del ENDPOINT:**  
Actualizar un vendedor existente.

**MÉTODO HTTP:**  
`PUT`

**RUTA:**  
`/vendedores/{idvendedor}`

**DESCRIPCIÓN:**  
Permite actualizar la información de un vendedor específico utilizando su ID.

---

### PARÁMETROS

- **URL PARAMS:**  
  - `idvendedor` (string): El ID del vendedor a actualizar.  

- **QUERY PARAMS:**  
  - Nada  

- **BODY (opcionales):**  
  - `nombres` (string)  
  - `apellidos` (string)  
  - `correo` (string)  
  - `contrasena` (string)  
  - `genero` (string)  
  - `telefono` (string)  
  - `fechaNacimiento` (string)  

---

### VALIDACIONES
- Todas las validaciones de **POST** aplican para los campos que se envíen.  
- `idvendedor`: Debe ser un ID válido y existente en la base de datos.  

---

### RESPUESTAS

- **200 OK**
```json
{
  "message": "Vendedor actualizado",
  "vendedor": {
    "idvendedor": "f2c1b9a7d",
    "nombres": "miguel",
    "apellidos": "minaya",
    "correo": "miguel@example.com"
  }
}
```
- ### 400 BAD REQUEST
```json
{
    "message": "Error de validación"
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
```