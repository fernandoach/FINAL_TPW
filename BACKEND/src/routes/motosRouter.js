import { Router } from 'express'
import { createConnection } from '../config/dbConfig.js'
import { motoValidation } from '../Validations/motoValidation.js'
import { motosBikersListControllers } from '../controllers/motosBikersListControllers.js'
export const motosRouter = Router()

//  Obtener todas las motos
motosRouter.get('/', motosBikersListControllers)


//  Registrar una moto
motosRouter.post('/', async (req, res) => {
  try {
    const moto = req.body

    //  Validar datos antes de insertar
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

    res.status(201).json({ mensaje: 'Moto registrada correctamente', datos: moto })
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al registrar la moto', error: error.message })
  }
})

//  Obtener una moto por ID
motosRouter.get('/:idMoto', async (req, res) => {
  try {
    const { idMoto } = req.params
    const connection = await createConnection()
    const [rows] = await connection.query('SELECT * FROM motos WHERE idMoto = ?', [idMoto])

    if (rows.length === 0) {
      return res.status(404).json({ mensaje: 'Moto no encontrada' })
    }

    res.status(200).json({ mensaje: `Moto con ID ${idMoto} obtenida correctamente`, datos: rows[0] })
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener la moto', error: error.message })
  }
})

//  Actualizar una moto
motosRouter.put('/:idMoto', async (req, res) => {
  try {
    const { idMoto } = req.params
    const moto = req.body

    const connection = await createConnection()

    const updates = Object.entries(moto)
      .map(([key, value]) => `${key} = ?`)
      .join(', ')
    const values = Object.values(moto)

    const query = `UPDATE motos SET ${updates} WHERE idMoto = ?`
    await connection.query(query, [...values, idMoto])

    res.status(200).json({ mensaje: `Moto con ID ${idMoto} actualizada correctamente`, datos: moto })
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar la moto', error: error.message })
  }
})

//  Eliminar una moto
motosRouter.delete('/:idMoto', async (req, res) => {
  try {
    const { idMoto } = req.params
    const connection = await createConnection()
    await connection.query('DELETE FROM motos WHERE idMoto = ?', [idMoto])

    res.status(200).json({ mensaje: `Moto con ID ${idMoto} eliminada correctamente` })
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar la moto', error: error.message })
  }
})

export default motosRouter