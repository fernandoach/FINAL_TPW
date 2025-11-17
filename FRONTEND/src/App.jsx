import { Route, Routes } from "react-router-dom"
import { HomePage } from "./components/pages/homePage"
import { Navbar } from "./components/organisms/navbar"
import { LoginPage } from "./components/pages/loginPage"
import { CustomerRegister } from "./components/pages/customerRegister"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={HomePage}/>
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={CustomerRegister} />
      </Routes>
    </>
  )
}

export default App
