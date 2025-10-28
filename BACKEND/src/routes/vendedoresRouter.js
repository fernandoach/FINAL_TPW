import { Router } from 'express'
import { sellersEditarController } from '../controllers/sellersEditarController.js'

const router = Router()

router.put('/:idVendedor', sellersEditarController)

export { router as vendedoresRouter }

