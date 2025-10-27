import { usersGetBySearch } from '../services/users/usersGetBySearch.js'

async function sellerListarController (req, res) {
  try {
    // obtener termino a buscar
    const search = req.query.search

    // validar si se envio el termino
    const vendedores = await usersGetBySearch(search)
    if (vendedores.length === 0) {
      return res.status(404).json({ message: 'No se encontraron vendedores.' })
    }

    return res.json(vendedores)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

export { sellerListarController }
