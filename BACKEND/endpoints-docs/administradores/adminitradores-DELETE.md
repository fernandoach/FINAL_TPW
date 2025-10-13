### /administradores/{idadministrador} DELETE

**Nombre del ENDPOINT:**  
Eliminar un administrador.

**MÉTODO HTTP:**  
`DELETE`

**RUTA:**  
`/administradores/{idadministrador}`

**DESCRIPCIÓN:**  
Elimina un administrador de la base de datos de forma permanente.

---

### PARÁMETROS

- **URL PARAMS:**  
  - **idadministrador** (`string`): El ID del administrador a eliminar.  

- **QUERY PARAMS:**  
  - Nada  

- **BODY:**  
  - Nada  

---

### VALIDACIONES

- **idadministrador:** Debe ser un ID válido y existente.  

---

### RESPUESTAS

- **200 OK**
```json
{
  "message": "Administrador eliminado exitosamente"
}
```
### 404 NOT FOUND
```json
{
  "message": "Administrador no encontrado"
}
```


### 500 INTERNAL SERVER ERROR
```json
{
  "message": "Error interno del servidor"
}
```