# /motos GET

## Nombre del ENDPOINT:
Crear una nueva moto.

## MÉTODO HTTP:
Metodo POST

## RUTA:
/motos

## DESCRIPCION:

El invitado, el cliente, el vendedor y el administrador podrán ver los detalles de la moto en base a una moto específica, tales como: propósito, marca, imagen del modelo, descripción, precio en soles, precio en dólares, especificaciones de capacidad, tanque, cilindrada, motor, tiempo, cilindros, válvulas, potencia en caballos de fuerza, revoluciones, torque en newton-metros, velocidades, imágenes de diseños, descripción, imágenes de tecnología, descripción, imágenes de seguridad, descripción, e imágenes del motor y su respectiva descripción, dentro del sistema.

## PARAMETROS: 

- ### URL PARAMS:
    Nada

- ### QUERY PARAMS:
    Nada

- ### BODY:
    - **proposito** (`string`): Propósito de la moto (pistera, todo terreno, multipropósito, etc.)
    - **marca** (`string`): Marca de la moto.
    - **modelo** (`string`): Modelo de la moto.
    - **imagenModelo** (`string`): URL de la imagen del modelo.
    - **descripcion** (`string`): Descripción general de la moto.
    - **precioSoles** (`number`): Precio en soles.
    - **precioDolares** (`number`): Precio en dólares.
    - **capacidad** (`string`): Capacidad de la moto (ej. número de pasajeros).
    - **tanque** (`string`): Capacidad del tanque de combustible.
    - **cilindrada** (`string`): Cilindrada del motor.
    - **motor** (`string`): Tipo de motor.
    - **tiempo** (`string`): Tiempo del motor (ej. 4 tiempos).
    - **cilindros** (`number`): Número de cilindros.
    - **valvulas** (`number`): Número de válvulas.
    - **potencia** (`string`): Potencia en caballos de fuerza.
    - **revoluciones** (`string`): Revoluciones por minuto.
    - **torque** (`string`): Torque en newton-metros.
    - **velocidades** (`number`): Número de velocidades.
    - **imagenesDisenos** (`array[string]`): URLs de imágenes de diseños.
    - **descripcionDisenos** (`string`): Descripción de los diseños.
    - **imagenesTecnologia** (`array[string]`): URLs de imágenes de tecnología.
    - **descripcionTecnologia** (`string`): Descripción de la tecnología.
    - **imagenesSeguridad** (`array[string]`): URLs de imágenes de seguridad.
    - **descripcionSeguridad** (`string`): Descripción de las características de seguridad.
    - **imagenesMotor** (`array[string]`): URLs de imágenes del motor.
    - **descripcionMotor** (`string`): Descripción del motor.
    - **stock** (`Number`): Stock (5, 10, 100 etc...)

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
    "moto": []
}
```

- ###  200 OK
```json
{
    "message": "Registrado con exito..."
}
```

- ###  200 OK
```json
{
    "proposito": "pistera",
    "marca": "Honda",
    "modelo": "CBR600RR",
    "imagenModelo": "https://ejemplo.com/imagenes/cbr600rr.jpg",
    "descripcion": "Moto deportiva de alto rendimiento.",
    "precioSoles": 55000,
    "precioDolares": 14500,
    "capacidad": "2 pasajeros",
    "tanque": "18 litros",
    "cilindrada": "599 cc",
    "motor": "4 cilindros en línea",
    "tiempo": "4 tiempos",
    "cilindros": 4,
    "valvulas": 16,
    "potencia": "120 HP",
    "revoluciones": "13500 rpm",
    "torque": "66 Nm",
    "velocidades": 6,
    "imagenesDisenos": [
        "https://ejemplo.com/imagenes/diseno1.jpg",
        "https://ejemplo.com/imagenes/diseno2.jpg"
    ],
    "descripcionDisenos": "Diseño aerodinámico y moderno.",
    "imagenesTecnologia": [
        "https://ejemplo.com/imagenes/tecnologia1.jpg"
    ],
    "descripcionTecnologia": "Sistema de frenos ABS y control de tracción.",
    "imagenesSeguridad": [
        "https://ejemplo.com/imagenes/seguridad1.jpg"
    ],
    "descripcionSeguridad": "Incluye sistema de frenos ABS.",
    "imagenesMotor": [
        "https://ejemplo.com/imagenes/motor1.jpg"
    ],
    "descripcionMotor": "Motor de alto rendimiento y eficiencia.",
    "stock": 10
}
```

- ### 400 BAD REQUESR 
```json
{
    "message": "proposito: El proposito no puede estar vacio" //segun la validacion
}
```


- ### 400 - BAD REQUEST                                             

```json
    {
        "message": "ocurrio un problema...",
        ""
    }

```

- ### 500 - INTERNAL SERVER

```json
    {
        "message": "Datos no encontrados",
    }



```
