import { Router } from 'express'
import { sellersRegisterController } from '../controllers/sellersRegisterController.js'
import { sellerListarController } from '../controllers/sellersListarController.js'
import { sellersGetDetailsByIdController } from '../controllers/sellersGetDetailsByIdController.js'
import { sellersEditarController } from '../controllers/sellersEditarControllers.js'
const sellersRouter = Router()

// Registrar vendedor
sellersRouter.post('/', sellersRegisterController)

// Listar y buscar vendedores
sellersRouter.get('/', sellerListarController)

// Ver detalles de un vendedor
sellersRouter.get('/:idVendedor', sellersGetDetailsByIdController)

// Editar vendedor
sellersRouter.put('/:idVendedor', sellersEditarController)

// Eliminar vendedor
sellersRouter.delete('/:idVendedor', async (req, res) => {
  try {
    const idVendedor = req.params.idVendedor
    const connection = await createConnection()

    const [existing] = await connection.query(
      'SELECT * FROM users WHERE idUser = ? AND role = ?',
      [idVendedor, 'V']
    )

    if (existing.length === 0) {
      return res.status(404).json({ error: 'Vendedor no encontrado.' })
    }

    const [result] = await connection.query(
      'DELETE FROM users WHERE idUser = ?',
      [idVendedor]
    )

    if (result.affectedRows > 0) {
      return res.json({ message: `Vendedor con ID ${idVendedor} eliminado correctamente.` })
    } else {
      return res.status(400).json({ error: 'No se pudo eliminar el vendedor.' })
    }
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

export { sellersRouter }
