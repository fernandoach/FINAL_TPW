# Vendedores POST
Crea un nuevo vendedor en el sistema.

## Método HTTP

`POST`


## Descripción

Permite registrar un nuevo vendedor en el sistema con sus datos personales.

## Parámetros del Body

**nombres**
- Tipo: string
- Descripción: Nombres del vendedor
- Validaciones: Obligatorio, solo letras y espacios, máximo 50 caracteres

**apellidos**
- Tipo: string
- Descripción: Apellidos del vendedor
- Validaciones: Obligatorio, solo letras y espacios, máximo 50 caracteres

**correo**
- Tipo: string
- Descripción: Correo electrónico
- Validaciones: Obligatorio, formato email válido, debe ser único

**contrasena**
- Tipo: string
- Descripción: Contraseña del vendedor
- Validaciones: Obligatorio, mínimo 8 caracteres

**genero**
- Tipo: string
- Descripción: Género del vendedor
- Validaciones: Obligatorio, valores permitidos: "Masculino", "Femenino", "Otro"

**telefono**
- Tipo: string
- Descripción: Número de teléfono
- Validaciones: Obligatorio, solo números, 9-15 dígitos

**fechaNacimiento**
- Tipo: string
- Descripción: Fecha de nacimiento
- Validaciones: Obligatorio, formato YYYY-MM-DD, mayor de 18 años

## Ejemplo de Request

```json
{
    "nombres": "Miguel",
    "apellidos": "Minaya",
    "correo": "minayahuaripatam@gmail.com",
    "contrasena": "password123",
    "genero": "Masculino",
    "telefono": "987654321",
    "fechaNacimiento": "2004,09,29"
}
```

## Respuestas

### 201 Created

```json
{
    "message": "Vendedor registrado con éxito"
}
```

### 400 Bad Request

```json
{
    "message": "nombres: Los nombres son obligatorios"
}
```

### 500 Internal Server Error

```json
{
    "message": "Ocurrió un error interno al registrar el vendedor"
}
```