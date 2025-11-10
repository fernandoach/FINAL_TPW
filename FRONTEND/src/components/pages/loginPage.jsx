import { useState } from "react"
import { useNavigate } from "react-router-dom"

function LoginPage(){

  const [email, setEmail] = useState('')  
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async () => {
    // aca va la logica para enviar datos
    try {
      const request = await fetch('http://localhost:3000/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      })

      if(!request.ok){
        throw new Error("Usuario y/o contraseña invalidos")
      }

      const response = await request.json()

      console.log(response.message)
      navigate('/')
    } catch (error) {
      setError(error.message)
      console.log(error)
    }
  }

  return(
    <section className="w-full flex flex-col items-center justify-between px-16 py-10 from-[#ffe5d1] ">
      {error === '' ? '' : <span>{error}</span>}
      <h2>Iniciar sesión</h2>
      <form action={() => {
        handleSubmit()
      }}>
        <div>
          <label htmlFor="email">Ingrese su correo: </label>
          <input onChange={(e) => {
            e.preventDefault()
            // asignar el nuevo valor al estado de email

            setEmail(e.target.value)
          }} className="border" type="text" name="email" id="idEmail" />
        </div>
        <div>
          <label htmlFor="password">Ingrese su contraseña: </label>
          <input onChange={(e)=>{
            e.preventDefault()

            // asignar el nuevo valor al estado de password
            setPassword(e.target.value)
          }} className="border" type="text" name="password" id="idPassword" />
        </div>
        <button className="border" type="submit">Enviar</button>
      </form>
    </section>
  )
}

export { LoginPage }
