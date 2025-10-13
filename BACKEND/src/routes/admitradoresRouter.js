import { Router } from 'express'

const administradoresRouter = Router()

administradoresRouter.get('/', (req, res) => {
   const search = req.query.search
   if(search){
   return res.json(`Buscando administrador con '${search}' `)
   }
    return res.json('Listando todos los administradores...')
})

administradoresRouter.post('/', (req, res) => {
    const { firstneme, lastname, gender, birthday, email, phone, password, repassword } = req.body
    return res.json(`Registrando administrador con los datos: ${firstneme}, ${lastname}, ${gender}, ${birthday}, ${email}, ${phone}, ${password}, ${repassword}`)
})

administradoresRouter.put('/:idAdministrador', (req ,res) => {
    const idAdministrador = req.params.idAdministrador
    const { firstneme, lastname, gender, birthday, email, phone } = req.body

    return res.json(`Editando el adminitrador de id: ${idAdministrador}, con los datos: ${firstneme}, ${lastname}, ${gender}, ${birthday}, ${email}, ${phone}`)
})

administradoresRouter.delete('/:idAdministrador', (req, res) => {
    const idAdministrador = req.params.idAdministrador
    return res.json(`Eliminando el adminitrador de id: ${idAdministrador}`) 
})
 
administradoresRouter.get('/:idAdministrador', (req, res) => {
    const idAdministrador = req.params.idAdministrador
    
    return res.json(`Viendo detalles del administrador de id ${idAdministrador}`)
})


export { administradoresRouter }