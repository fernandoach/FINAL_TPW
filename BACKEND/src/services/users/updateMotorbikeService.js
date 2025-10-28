import { createConnection } from '../../config/dbConfig.js'

async function updateMotorbikeService (idMotorbike, motorbike) {
  try {
    const connection = await createConnection()

    const updates = Object.entries(motorbike)
      .map(([key, value]) => `${key} = ?`)
      .join(', ')
    const values = Object.values(motorbike)

    const query = `UPDATE motorbikes SET ${updates} WHERE idMotorbike = ?`
    await connection.query(query, [...values, idMotorbike])

    return motorbike
  } catch (error) {
    throw new Error(error)
  }
}

export { updateMotorbikeService }
