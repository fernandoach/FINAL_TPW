import { Router } from 'express'
import { createConnection } from '../config/dbConfig.js'
import { motosRegistrarController } from '../controllers/motosRegistrarController.js'
export const motosRouter = Router()

//  Obtener todas las motos
motosRouter.get('/', async (req, res) => {
  try {
    const connection = await createConnection() //  conexión a MySQL
    const [rows] = await connection.query('SELECT * FROM motos') //  consulta

    res.status(200).json({ mensaje: 'Listado de motos obtenido correctamente', datos: rows })
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener las motos', error: error.message })
  }
})

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