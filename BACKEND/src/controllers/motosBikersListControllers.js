import { usersGetBySearch } from '../services/users/usersGetBySearch.js'

async function motosBikersListControllers (req, res) {
  try {
    // obtener termino a buscar
    const search = req.query.search

    // validar si se envio el termino
    const motos = await usersGetBySearch(search)
    if (motos.length === 0) {
      return res.status(404).json({ message: 'No se encontraron motos.' })
    }

    return res.json(motos)
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

export { motosBikersListControllers }
