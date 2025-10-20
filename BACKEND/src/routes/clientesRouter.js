import { Router } from 'express'
import { createConnection } from '../config/dbConfig.js'
import bcrypt from 'bcrypt'
import { clienteValidation } from '../validations/clienteValidation.js'

const clientesRouter = Router()

// Listar clientes o buscar por nombre/apellido
clientesRouter.get('/', async (req, res) => {
    const search = req.query.search
    const connection = await createConnection()

    try {
        if (!search) {
            return res.json({ message: 'Ruta listar clientes' })
        }
        const query = `
            SELECT idCliente, firstName, lastName, email, phone
            FROM clientes
            WHERE firstName LIKE ? OR lastName LIKE ?
        `
        const values = [`%${search}%`, `%${search}%`]
        const [rows] = await connection.query(query, values)

        // Respuesta con mensaje y resultados
        return res.json({
            message: `Ruta buscar clientes - ${search}`,
            data: rows
        })

    } catch (error) {
        console.error('Error en GET /clientes:', error)
        res.status(500).json({ error: 'Error al listar o buscar clientes.' })
    } finally {
        if (connection) await connection.end()
    }
})


// Registrar cliente (correo y teléfono únicos + hash de contraseña)
clientesRouter.post('/', async (req, res) => {
   const { firstName, lastName, birthDate, gender, password, phone, email } = req.body
   let connection

   try {
      // Validar datos con Joi
      await clienteValidation.validateAsync(req.body, { abortEarly: false })

      connection = await createConnection()

      // Verificar si el correo o teléfono ya existen
      const [existingClient] = await connection.query(
         'SELECT email, phone FROM clientes WHERE email = ? OR phone = ?',
         [email, phone]
      )

      if (existingClient.length > 0) {
         const existing = existingClient[0]

         if (existing.email === email) {
            return res.status(400).json({ message: 'El correo ya está registrado.' })
         }

         if (existing.phone === phone) {
            return res.status(400).json({ message: 'El número de teléfono ya está registrado.' })
         }
      }

      // Hashear la contraseña
      const hashedPassword = await bcrypt.hash(password, 12)

      // Insertar cliente nuevo
      const query = `
         INSERT INTO clientes (firstName, lastName, birthDate, gender, password, phone, email)
         VALUES (?, ?, ?, ?, ?, ?, ?)
      `
      const values = [firstName, lastName, birthDate, gender, hashedPassword, phone, email]
      await connection.query(query, values)

      return res.status(201).json({
         message: 'Cliente registrado correctamente con contraseña segura.'
      })

   } catch (error) {
      console.error('Error en POST /clientes:', error)

      // Error de validación de Joi
      if (error.isJoi) {
         return res.status(400).json({
            message: 'Error en la validación de datos.',
            details: error.details.map(d => d.message)
         })
      }

      // Error por duplicado en base de datos
      if (error.code === 'ER_DUP_ENTRY') {
         return res.status(400).json({ message: 'El correo o teléfono ya existen.' })
      }

      return res.status(500).json({ error: 'Error interno del servidor.' })
   } finally {
      if (connection) await connection.end()
   }
})


// Editar cliente (sin cambiar contraseña)
clientesRouter.put('/:clientId', async (req, res) => {
   const { clientId } = req.params
   const { firstName, lastName, birthDate, gender, phone, email } = req.body
   let connection

   try {
      await clienteValidation.validateAsync({
         firstName,
         lastName,
         birthDate,
         gender,
         password: 'Temporal1234', // Para pasar la validación del schema
         phone,
         email
      })

      connection = await createConnection()

      // Verificar si correo o teléfono pertenecen a otro cliente
      const [existingClient] = await connection.query(
         'SELECT idCliente, email, phone FROM clientes WHERE (email = ? OR phone = ?) AND idCliente != ?',
         [email, phone, clientId]
      )

      if (existingClient.length > 0) {
         const existing = existingClient[0]

         if (existing.email === email) {
            return res.status(400).json({ message: 'El correo ya pertenece a otro cliente.' })
         }

         if (existing.phone === phone) {
            return res.status(400).json({ message: 'El número de teléfono ya pertenece a otro cliente.' })
         }
      }

      const query = `
         UPDATE clientes 
         SET firstName=?, lastName=?, birthDate=?, gender=?, phone=?, email=?
         WHERE idCliente=?
      `
      const values = [firstName, lastName, birthDate, gender, phone, email, clientId]
      await connection.query(query, values)

      res.json({ message: 'Cliente actualizado correctamente.' })

   } catch (error) {
      console.error('Error en PUT /clientes/:clientId:', error)

      if (error.isJoi) {
         return res.status(400).json({ message: error.details[0].message })
      }

      res.status(500).json({ error: 'Error al actualizar el cliente.' })
   } finally {
      if (connection) await connection.end()
   }
})


// Eliminar cliente
clientesRouter.delete('/:clientId', async (req, res) => {
   const { clientId } = req.params
   let connection

   try {
      connection = await createConnection()
      const [result] = await connection.query('DELETE FROM clientes WHERE idCliente=?', [clientId])

      if (result.affectedRows === 0) {
         return res.status(404).json({ message: 'Cliente no encontrado.' })
      }

      res.json({ message: 'Cliente eliminado correctamente.' })
   } catch (error) {
      res.status(500).json({ error: error.message })
   } finally {
      if (connection) await connection.end()
   }
})


// Ver detalles de cliente
clientesRouter.get('/:clientId', async (req, res) => {
   const { clientId } = req.params
   let connection

   try {
      connection = await createConnection()
      const [rows] = await connection.query('SELECT * FROM clientes WHERE idCliente=?', [clientId])

      if (rows.length === 0) {
         return res.status(404).json({ message: 'Cliente no encontrado.' })
      }

      res.json(rows[0])
   } catch (error) {
      res.status(500).json({ error: error.message })
   } finally {
      if (connection) await connection.end()
   }
})

export { clientesRouter }
