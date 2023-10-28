import React from "react"
import SignUp from "./Sign-up-page/sign-up"
import Login from "./Login-page/Login"
import PosterPage from "./PosterSelectorPage/PosterPage"
import Poster1 from "../Posters/Poster-1/Poster1"
import Poster2 from "../Posters/Poster-2/Poster2"

import {Routes,Route,BrowserRouter} from "react-router-dom"
export default function App(){
  return(
      <BrowserRouter>
        <Routes>
          <Route element = {<Login />} path = "/login"/>
          <Route element = {<PosterPage />} path = "/">
            <Route index element = {<Poster1 />}/>
            <Route  path = "poster-2" element = {<Poster2 />}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

