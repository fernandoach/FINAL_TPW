import { userAddDetails } from "../services/users/userAddDetails.js"


async function sellersgetDetailController(req, res) {
  try {
    const idVendedor = req.params.idVendedor
    const vendedor = await userAddDetails(idVendedor)

    if (vendedor.length === 0) {
      return res.status(404).json({ error: 'Vendedor no encontrado.' })
    }

    return res.json(vendedor[0])
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

export { sellersgetDetailController }