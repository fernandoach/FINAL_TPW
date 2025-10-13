### /vendedores/search GET

**Nombre del ENDPOINT:**  
Buscar vendedores por criterios.

**MÉTODO HTTP:**  
`GET`

**RUTA:**  
`/vendedores/search`

**DESCRIPCIÓN:**  
Permite buscar vendedores usando uno o varios criterios, como nombres, apellidos, género o correo electrónico.

---

### PARÁMETROS

- **URL PARAMS:**  
  - Nada  

- **QUERY PARAMS:**  
  - `nombres` (string, opcional): Busca por los nombres del vendedor.  
  - `apellidos` (string, opcional): Busca por los apellidos del vendedor.  
  - `genero` (string, opcional): Filtra por el género del vendedor.  
  - `correo` (string, opcional): Busca por el correo electrónico del vendedor.  

- **BODY:**  
  - Nada  

---

### VALIDACIONES
- `nombres`: Solo letras y espacios.  
- `apellidos`: Solo letras y espacios.  
- `genero`: Debe ser uno de los valores permitidos (`"Masculino"`, `"Femenino"`, `"Otro"`).  
- `correo`: Debe ser un formato de email válido.  

---

### RESPUESTAS

- **200 OK (Sin resultados)**
```json
{
  "vendedores": []
}
```
- **200 OK**
```json
{
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
    "message": "No encontrado"
}
```

- ### 404 NOT FOUND
```json
{
    "message": "Vendedor no encontrado"
}
```

- ### 500 INTERNAL SERVER ERROR
```json
{
    "message": "Error interno del servidor"
}
```
