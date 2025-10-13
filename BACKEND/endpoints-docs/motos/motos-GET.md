# /motos GET

## Nombre del ENDPOINT:
Listar todas las motos disponibles.

## MÉTODO HTTP:
`GET`
## RUTA:
/motos
## DESCRIPCIÓN:
El endpoints va a retornar una lista de motos, la cual contendra los siguientes atributos de cada moto: Marca, Modelo, Precio en Soloes, Precio en Dolares,Cilindrada. 
    

## PARAMETROS: 

- ### URL PARAMS:
    Nada

- ### QUERY PARAMS:
    Nada

- ### BODY:
    Nada

## VALIDACIONES:
Nada

## RESPUESTAS:

- ###  200 OK
```json
{
    "motos": []
}
```

- ###  200 OK
```json
{
    "motos": [
        {
            "marca": "Honda",
            "modelo": "Rebel",
            "precioSoles": "26000",
            "precioDolares": "7409",
            "cilindrada": "500",
        }
        ...
    ]
}
```

- ### 400 - BAD REQUEST

```json
    {
        "message": "ocurrio un problema...",
        ""
    }



```
