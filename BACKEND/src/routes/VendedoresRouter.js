import { Router } from 'express'

const vendedoresRouter = Router()

vendedoresRouter.get('/', (req, res) => {
   const search = req.query.search
   if (search) {
      return res.json(`Buscando vendedor con '${search}' `)
   }
   return res.json('Listando todos los vendedores...')
})

vendedoresRouter.post('/', (req, res) => {
   const { firstname, lastname, gender, birthday, email, phone, password, repassword } = req.body
   return res.json(`Registrando vendedor con los datos: ${firstname}, ${lastname}, ${gender}, ${birthday}, ${email}, ${phone}, ${password}, ${repassword}`)
})

vendedoresRouter.put('/:idVendedor', (req, res) => {
   const idVendedor = req.params.idVendedor
   const { firstname, lastname, gender, birthday, email, phone } = req.body

   return res.json(`Editando el vendedor de id: ${idVendedor}, con los datos: ${firstname}, ${lastname}, ${gender}, ${birthday}, ${email}, ${phone}`)
})

vendedoresRouter.delete('/:idVendedor', (req, res) => {
   const idVendedor = req.params.idVendedor
   return res.json(`Eliminando el vendedor de id: ${idVendedor}`)
})

vendedoresRouter.get('/:idVendedor', (req, res) => {
   const idVendedor = req.params.idVendedor

   return res.json(`Viendo detalles del vendedor de id ${idVendedor}`)
})

export { vendedoresRouter }
