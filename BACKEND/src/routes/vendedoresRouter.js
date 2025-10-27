import { Router } from 'express'
import { sellersEditarController } from '../controllers/sellersEditarController.js'

const router = Router()

// Editar vendedor
router.put('/:idVendedor', sellersEditarController)

// Exportar router
export { router as vendedoresRouter }
