import { LinkAtom } from "../atoms/linkAtom"
import { Title } from "../atoms/title"
import { NavListMolecule } from "../molecules/navListenMolecules"

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
      <LinkAtom to={'/'}>
        <Title text={'TiendaMotos'} />
      </LinkAtom>
      <NavListMolecule options={options} roles={roles} />
    </nav>
  )
}

export { Navbar }
