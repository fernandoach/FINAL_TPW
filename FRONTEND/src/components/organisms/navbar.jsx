import { FaUserCircle } from "react-icons/fa"
import { Link } from "react-router-dom"

function Navbar() {
  const options = [
    {
      text: 'Inicio',
      path: '/'
    },
    {
      text: 'Motos',
      path: '/motos'
    }
  ]

  const roles = [
    {
      text: 'Cliente',
      path: '/cliente'
    },
    {
      text: 'Administrador',
      path: '/administrador'
    },
    {
      text: 'Vendedor',
      path: '/vendedor'
    }
  ]

  return (
    <nav className="flex gap-5 px-8 py-5 justify-between">
      <Link to='/' className="items-center">
        <h1 className="text-2xl text-orange-500 hover:scale-105 transition">TiendaMotos</h1>
      </Link>
      <ul className="flex gap-5 justify-center items-center ">
        {
          options.map(
            (option)=>{
              return (
                <li>
                  <Link to={option.path} className="">
                  {option.text}
                  </Link>
                </li>
              )
            }
          )
        }
         {
          roles.map(
            (option)=>{
              return (
                <li>
                  <Link to={option.path} className="bg-orange-400 px-3 rounded-2xl hover:shadow-lg transition-all  duration-200">
                  {option.text}
                  </Link>
                </li>
              )
            }
          )
        }
        <Link to={'/login'}>
          <FaUserCircle className="text-orange-400 hover:scale-110" size={25} />
        </Link>
      </ul>
    </nav>
  )
}

export { Navbar }
