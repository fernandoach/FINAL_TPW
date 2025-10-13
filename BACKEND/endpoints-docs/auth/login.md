# login POST

Endpoint para iniciar sesión en el sistema con correo y contraseña.

## Método HTTP
`POST`

## Ruta
`/login`

## Parámetros

### URL Params

Nada

### Query Params

Nada

### Body

```json
{
    "email": "string",     
    "password": "string"
}
```

## Validaciones

- **correo**: Obligatorio, formato email válido, debe ser único, debe existir en db
- **contrasena**: Obligatorio, mínimo 8 caracteres, debe coincidir con el registro en db

## Respuestas

### 201 CREATED

```json
{
    "message": "JWT"
}
```

### 400 BAD REQUEST

```json
{
    "message": "usuario y/o contraseña incorrectos."
}
```

### 500 INTERNAL SERVER ERROR
```json
{
    "message": "Ocurrió un error interno al iniciar sesión."
}
```
