import { userGetDetailsById } from '../services/users/userGetDetailsById.js'

async function sellersGetDetailsByIdController (req, res) {
  try {
    // obtener id desde params
    const idVendedor = req.params.idVendedor

    // obtener vendedor por su id
    const vendedor = await userGetDetailsById(idVendedor)

    // validar que el vendor exista
    if (vendedor.length === 0) {
      return res.status(404).json({ error: 'Vendedor no encontrado.' })
    }

    return res.json(vendedor[0])
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

export { sellersGetDetailsByIdController }
