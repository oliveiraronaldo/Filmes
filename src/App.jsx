import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./assets/pages/Home/Home"
import NoAr from "./assets/pages/NoAr/NoAr"
import Contato from "./assets/pages/Contato/Contato"
import FilmePage from "./assets/pages/Filme/FilmePage"

function App(){

  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home /> } />
          <Route path="/noar" element={<NoAr />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/filme/:id" element={<FilmePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App