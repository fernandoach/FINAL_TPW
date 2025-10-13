# Cliente POST

Endpoint para registrar un nuevo cliente en el sistema con todos sus datos personales.

## Método HTTP
`POST`

## Ruta
`/clientes`

## Parámetros

### URL Params

Nada
### Query Params

Nada
### Body

```json
{
    "idcliente": "string",     
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

- **nombres**: Obligatorio, solo letras y espacios, máximo 50 caracteres
- **apellidos**: Obligatorio, solo letras y espacios, máximo 50 caracteres
- **fechaNacimiento**: Obligatorio, formato YYYY-MM-DD, mayor de 18 años
- **genero**: Obligatorio, valores permitidos: "Masculino", "Femenino", "Otro"
- **contrasena**: Obligatorio, mínimo 8 caracteres
- **correo**: Obligatorio, formato email válido, debe ser único
- **telefono**: Obligatorio, solo números, 9-15 dígitos

## Respuestas

### 201 CREATED

```json
{
    "message": "Cliente registrado con éxito"
}
```

### 400 BAD REQUEST

```json
{
    "message": "nombres: Los nombres son obligatorios"
}
```

### 500 INTERNAL SERVER ERROR
```json
{
    "message": "Ocurrió un error interno al registrar el cliente"
}
```
