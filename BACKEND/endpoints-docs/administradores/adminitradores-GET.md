### /administradores GET

**Nombre del ENDPOINT:**  
Listar todos los administradores.

**MÉTODO HTTP:**  
`GET`

**RUTA:**  
`/administradores`

**DESCRIPCIÓN:**  
Este endpoint retorna una lista de todos los administradores registrados en el sistema.

---

### PARÁMETROS

- **URL PARAMS:**  
  - Nada  

- **QUERY PARAMS:**  
  - Nada  

- **BODY:**  
  - Nada  

---

### VALIDACIONES
- Nada  

---

### RESPUESTAS

- **200 OK (Sin resultados)**
```json
{
  "administradores": []
}
```
- ###  200 OK
```json
{
  "administradores": [
    {
      "idadministrador": "1a2b3c4d5",
      "nombres": "Miguel",
      "apellidos": "Minaya"
    },
    {
      "idadministrador": "6e7f8g9h0",
      "nombres": "Fernando",
      "apellidos": "Chavez"
    }
  ]
}

```

- ### 400 - BAD REQUEST

```json
    {
        "message": "ocurrio un problema...",
        ""
    }

