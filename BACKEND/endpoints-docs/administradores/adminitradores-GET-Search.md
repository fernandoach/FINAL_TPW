### /administradores/search=? GET

**Nombre del ENDPOINT:**  
Buscar administradores por criterios.

**MÉTODO HTTP:**  
`GET`

**RUTA:**  
`/administradores/search`

**DESCRIPCIÓN:**  
Permite buscar administradores usando uno o varios criterios, como nombres, apellidos, género o correo electrónico.

---

### PARÁMETROS

- **URL PARAMS:**  
  - Nada  

- **QUERY PARAMS:**  
  - **nombres** (`string`, opcional): Busca por los nombres del administrador.  
  - **apellidos** (`string`, opcional): Busca por los apellidos del administrador.  
  - **genero** (`string`, opcional): Filtra por el género del administrador.  
  - **correo** (`string`, opcional): Busca por el correo electrónico del administrador.  

- **BODY:**  
  - Nada  

---

### VALIDACIONES

- **nombres:** Solo letras y espacios.  
- **apellidos:** Solo letras y espacios.  
- **genero:** Debe ser uno de los valores permitidos (`"Masculino"`, `"Femenino"`, `"Otro"`).  
- **correo:** Debe ser un formato de email válido.  

---

### RESPUESTAS

- **200 OK (Sin resultados)**
```json
{
  "administradores": []
}
```

### 200 OK (Con resultados)
```json
{
  "administradores": [
    {
      "idadministrador": "1a2b3c4d5",
      "nombres": "Miguel",
      "apellidos": "Minaya",
      "genero": "Masculino",
      "correo": "minayahuaripatam@gmail.com"
    }
  ]
}
```

### 400 BAD REQUEST
```json
{
  "message": "No encontrado"
}
```


### 500 INTERNAL SERVER ERROR
```json
{
  "message": "Error interno del servidor"
}
```