import { usersGetBySearch } from '../services/users/usersGetBySearch.js'

async function sellerListarController (req, res) {
  try {
    const search = req.query.search
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
