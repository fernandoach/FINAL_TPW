# /motos PUT

## Nombre del ENDPOINT:
Actualizar una moto existente.

## MÉTODO HTTP:
`PUT`

## RUTA:
/motos/{id}

## DESCRIPCIÓN:
Permite actualizar los datos de una moto específica en el sistema.

## PARAMETROS:

- ### URL PARAMS:
    - **id** (`string`): ID de la moto a actualizar

- ### QUERY PARAMS:
    Nada

- ### BODY:
    - **proposito** (`string`, opcional)
    - **marca** (`string`, opcional)
    - **modelo** (`string`, opcional)
    - **imagenModelo** (`string`, opcional)
    - **descripcion** (`string`, opcional)
    - **precioSoles** (`number`, opcional)
    - **precioDolares** (`number`, opcional)
    - **capacidad** (`string`, opcional)
    - **tanque** (`string`, opcional)
    - **cilindrada** (`string`, opcional)
    - **motor** (`string`, opcional)
    - **tiempo** (`string`, opcional)
    - **cilindros** (`number`, opcional)
    - **valvulas** (`number`, opcional)
    - **potencia** (`string`, opcional)
    - **revoluciones** (`string`, opcional)
    - **torque** (`string`, opcional)
    - **velocidades** (`number`, opcional)
    - **imagenesDisenos** (`array[string]`, opcional)
    - **descripcionDisenos** (`string`, opcional)
    - **imagenesTecnologia** (`array[string]`, opcional)
    - **descripcionTecnologia** (`string`, opcional)
    - **imagenesSeguridad** (`array[string]`, opcional)
    - **descripcionSeguridad** (`string`, opcional)
    - **imagenesMotor** (`array[string]`, opcional)
    - **descripcionMotor** (`string`, opcional)
    - **stock** (`Number`, opcional)

## VALIDACIONES:

- **proposito**
    - El propósito no puede estar vacio.
    - El propósito no puede contener menos de 5 caracteres.
    - El propósito no puede contener más de 50 caracteres.
    - El propósito solo debe permitir letras, espacios, comas, guiones y puntos.

- **marca**
    - La marca es obligatoria.
    - La marca solo debe permitir letras, espacios y guiones.
    - La marca no puede exceder 30 caracteres.

- **modelo**
    - El modelo es obligatorio.
    - El modelo solo debe permitir letras, números, espacios y guiones.
    - El modelo no puede exceder 30 caracteres.

- **imagenModelo**
    - Debe ser una URL válida.

- **descripcion**
    - La descripción es obligatoria.
    - La descripción debe tener entre 10 y 500 caracteres.

- **precioSoles** y **precioDolares**
    - Deben ser números positivos.
    - Son obligatorios.

- **capacidad**
    - Es obligatoria.
    - Solo debe permitir letras, números y espacios.

- **tanque**
    - Es obligatorio.
    - Solo debe permitir letras, números y espacios.

- **cilindrada**
    - Es obligatoria.
    - Solo debe permitir letras, números y espacios.

- **motor**
    - Es obligatorio.
    - Solo debe permitir letras, números, espacios y guiones.

- **tiempo**
    - Es obligatorio.
    - Solo debe permitir letras, números y espacios.

- **cilindros**, **valvulas**, **velocidades**, **stock**
    - Deben ser números enteros positivos.

- **potencia**, **revoluciones**, **torque**
    - Son obligatorios.
    - Solo deben permitir letras, números y espacios.

- **imagenesDisenos**, **imagenesTecnologia**, **imagenesSeguridad**, **imagenesMotor**
    - Deben ser arrays de URLs válidas.

- **descripcionDisenos**, **descripcionTecnologia**, **descripcionSeguridad**, **descripcionMotor**
    - Son obligatorias.
    - Deben tener entre 10 y 300 caracteres.


## RESPUESTAS:

- ### 200 OK
```json
{
    "message": "Moto actualizada exitosamente",
    "moto": {
    }
}
```

- ### 400 BAD REQUEST
```json
{
    "message": "Error de validación"
}
```

- ### 404 NOT FOUND
```json
{
    "message": "Moto no encontrada"
}
```

- ### 500 INTERNAL SERVER ERROR
```json
{
    "message": "Error interno del servidor"
}
```