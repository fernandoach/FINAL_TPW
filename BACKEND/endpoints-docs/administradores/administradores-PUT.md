### /administradores/{idadministrador} PUT

**Nombre del ENDPOINT:**  
Actualizar un administrador existente.

**MÉTODO HTTP:**  
`PUT`

**RUTA:**  
`/administradores/{idadministrador}`

**DESCRIPCIÓN:**  
Permite actualizar la información de un administrador específico utilizando su ID.

---

### PARÁMETROS

- **URL PARAMS:**  
  - **idadministrador** (`string`): El ID del administrador a actualizar.  

- **QUERY PARAMS:**  
  - Nada  

- **BODY:**  
  - **nombres** (`string`, opcional)  
  - **apellidos** (`string`, opcional)  
  - **correo** (`string`, opcional)  
  - **contrasena** (`string`, opcional)  
  - **genero** (`string`, opcional)  
  - **telefono** (`string`, opcional)  
  - **fechaNacimiento** (`string`, opcional)  

---

### VALIDACIONES

- Todas las validaciones de **POST** aplican para los campos que se envíen.  
- **idadministrador**: Debe ser un ID válido y existente en la base de datos.  

---

### RESPUESTAS

- **200 OK**
```json
{
  "message": "Administrador actualizado exitosamente",
  "administrador": {
    "idadministrador": "1a2b3c4d5",
    "nombres": "Miguel",
    "apellidos": "Minaya",
    "correo": "miguelminaya@gmail.com"
  }
}
```
### 400 BAD REQUEST
```json
{
  "message": "El formato del correo es incorrecto"
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