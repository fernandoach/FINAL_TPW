import { Route, Routes } from "react-router-dom"
import { HomePage } from "./components/pages/homePage"
import { Navbar } from "./components/organisms/navbar"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={HomePage}/>
      </Routes>
    </>
  )
}

export default App
