### /administradores POST

**Nombre del ENDPOINT:**  
Crear un nuevo administrador.

**MÉTODO HTTP:**  
`POST`

**RUTA:**  
`/administradores`

**DESCRIPCIÓN:**  
Permite registrar un nuevo administrador en el sistema con sus datos personales.

---

### PARÁMETROS

- **URL PARAMS:**  
  - Nada  

- **QUERY PARAMS:**  
  - Nada  

- **BODY:**  
  - **nombres** (`string`): Nombres del administrador.  
  - **apellidos** (`string`): Apellidos del administrador.  
  - **correo** (`string`): Correo electrónico único.  
  - **contrasena** (`string`): Contraseña del administrador.  
  - **genero** (`string`): Género del administrador.  
  - **telefono** (`string`): Número de teléfono.  
  - **fechaNacimiento** (`string`): Fecha de nacimiento en formato `YYYY-MM-DD`.  

---

### VALIDACIONES

- **nombres**: Obligatorio, solo letras y espacios, longitud máxima de 50 caracteres.  
- **apellidos**: Obligatorio, solo letras y espacios, longitud máxima de 50 caracteres.  
- **correo**: Obligatorio, formato de email válido y debe ser único.  
- **contrasena**: Obligatoria, longitud mínima de 8 caracteres.  
- **genero**: Obligatorio, debe ser `"Masculino"`, `"Femenino"` o `"Otro"`.  
- **telefono**: Obligatorio, solo números, longitud de 9 a 15 dígitos.  
- **fechaNacimiento**: Obligatorio, formato `YYYY-MM-DD`, el administrador debe ser mayor de 18 años.  

---

### RESPUESTAS

- **201 CREATED**
```json
{
  "message": "Administrador registrado con éxito"
}
```
### 400 BAD REQUEST
```json
{
  "message": "Los nombres son obligatorios"
}
```

### 500 INTERNAL SERVER ERROR
```json
{
  "message": "Ocurrió un error interno"
}
```