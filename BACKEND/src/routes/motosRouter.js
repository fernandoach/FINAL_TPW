import { Router } from 'express'
import { createConnection } from '../config/dbConfig.js'

import { motoValidation } from '../Validations/motoValidation.js'

import { updateMotorbikeController } from '../controllers/updateMotorbikeController.js'

import { motosBikersListControllers } from '../controllers/motosBikersListControllers.js'

import { motosRegistrarController } from '../controllers/motosRegistrarController.js'


export const motosRouter = Router()

//  Obtener todas las motos
motosRouter.get('/', motosBikersListControllers)


// Registrar una moto
motosRouter.post('/', motosRegistrarController)


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
motosRouter.put('/:idMotorbike', updateMotorbikeController)

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
