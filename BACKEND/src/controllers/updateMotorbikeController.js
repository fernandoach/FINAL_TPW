import { updateMotorbikeService } from '../services/users/updateMotorbikeService.js'

async function updateMotorbikeController (req, res) {
  try {
    const { idMotorbike } = req.params
    const motorbike = req.body

    const updatedMotorbike = await updateMotorbikeService(idMotorbike, motorbike)

    res.status(200).json({
      mensaje: `Moto con ID ${idMotorbike} actualizada correctamente`,
      datos: updatedMotorbike
    })
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al actualizar la moto',
      error: error.message
    })
  }
}

export { updateMotorbikeController }
