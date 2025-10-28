import { createConnection } from '../config/dbConfig.js'
import { motoValidation } from '../Validations/motoValidation.js'

export const motosRegistrarController = async (req, res) => {
  try {
    const moto = req.body

    // Validar datos con Joi
    await motoValidation.validateAsync(moto)

    const connection = await createConnection()

    const query = `
      INSERT INTO motos (
        marca, modelo, precio_dolares, precio_soles, cilindrada, caballos,
        cilindrosMotor, valvulasMotor, revoluciones, tiemposMotor, descripcion,
        descripcionDiseno, descripcionSeguridad, descripcionTecnologia, proposito,
        capacidadTanque, velocidades, imgModelo, imgMotor, imgDiseno, imgSeguridad, imgDescripcion
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `

    const values = [
      moto.marca, moto.modelo, moto.precio_dolares, moto.precio_soles, moto.cilindrada, moto.caballos,
      moto.cilindrosMotor, moto.valvulasMotor, moto.revoluciones, moto.tiemposMotor, moto.descripcion,
      moto.descripcionDiseno, moto.descripcionSeguridad, moto.descripcionTecnologia, moto.proposito,
      moto.capacidadTanque, moto.velocidades, moto.imgModelo, moto.imgMotor, moto.imgDiseno,
      moto.imgSeguridad, moto.imgDescripcion
    ]

    await connection.query(query, values)

    return res.status(201).json({
      mensaje: 'Moto registrada correctamente',
      datos: moto
    })
  } catch (error) {
    if (error.details) {
      return res.status(400).json({ mensaje: error.details[0].message })
    }
    return res.status(500).json({ mensaje: 'Error al registrar la moto', error: error.message })
  }
}
