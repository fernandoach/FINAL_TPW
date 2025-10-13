import { Router } from 'express'

const usersRouter = Router()

usersRouter.get('/', (req, res) => {
   const search = req.query.search
   if (search) {
      return res.json(`Buscando usuario con '${search}' `)
   }
   return res.json('Listando todos los usuarios...')
})

usersRouter.post('/', (req, res) => {
   const { firstname, lastname, gender, birthday, email, phone, password, repassword } = req.body
   return res.json(`Registrando usuario con los datos: ${firstname}, ${lastname}, ${gender}, ${birthday}, ${email}, ${phone}, ${password}, ${repassword}`)
})

usersRouter.put('/:idUser', (req, res) => {
   const idUser = req.params.idUser
   const { firstname, lastname, gender, birthday, email, phone } = req.body

   return res.json(`Editando el usuario de id: ${idUser}, con los datos: ${firstname}, ${lastname}, ${gender}, ${birthday}, ${email}, ${phone}`)
})

usersRouter.delete('/:idUser', (req, res) => {
   const idUser = req.params.idUser
   return res.json(`Eliminando el usuario de id: ${idUser}`)
})

usersRouter.get('/:idUser', (req, res) => {
   const idUser = req.params.idUser

   return res.json(`Viendo detalles del usuario de id ${idUser}`)
})

export { usersRouter }
