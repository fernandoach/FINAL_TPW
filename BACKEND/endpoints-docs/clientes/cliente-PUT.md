# Cliente PUT

Endpoint para actualizar la información de un cliente específico utilizando su ID.

## Método HTTP
`PUT`

## Ruta
`/clientes/{idcliente}`

## Parámetros
**idcliente** (`string`): ID del cliente a actualizar


### Query Params
Nada

### Body

Todos los campos son opcionales:
```json
{
    "nombres": "string",        
    "apellidos": "string",      
    "fechaNacimiento": "string",
    "genero": "string",     
    "contrasena": "string",   
    "correo": "string",     
    "telefono": "string"    
}
```

## Validaciones

Si se incluye algún campo, aplican las siguientes validaciones:
- **nombres**: Solo letras y espacios, máximo 50 caracteres
- **apellidos**: Solo letras y espacios, máximo 50 caracteres
- **fechaNacimiento**: Formato YYYY-MM-DD, mayor de 18 años
- **genero**: Valores permitidos: "Masculino", "Femenino", "Otro"
- **contrasena**: Mínimo 8 caracteres
- **correo**: Formato email válido, debe ser único
- **telefono**: Solo números, 9-15 dígitos
- El `idcliente` debe existir en la base de datos

## Respuestas

### 200 OK

```json
{
    "message": "Cliente actualizado exitosamente",
    "cliente": {
        "idcliente": "6a9e8f4c3",
        "nombres": "Miguel",
        "apellidos": "Minaya",
        "correo": "minayahuaripatam@gmail.com"
    }
}
```

### 400 Bad Request

```json
{
    "message": "El formato del correo es incorrecto"
}
```

### 404 Not Found

```json
{
    "message": "Cliente no encontrado"
}
```

### 500 Internal Server Error

```json
{
    "message": "Error interno del servidor"
}
```