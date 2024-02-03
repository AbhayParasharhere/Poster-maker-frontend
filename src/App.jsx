import React from "react";
import SignUp from "./Signuppage/signup";
import Login from "./Loginpage/Login";
import PosterPage, {
  loader as posterPageLoader,
} from "./PosterSelectorPage/PosterPage";
import Poster1, { loader as poster1Loader } from "../Posters/Poster1/Poster1";
import Poster2, { loader as poster2Loader } from "../Posters/Poster2/Poster2";
import Poster3, { loader as poster3Loader } from "../Posters/Poster3/Poster3";
import Poster4, { loader as poster4Loader } from "../Posters/Poster4/Poster4";
import Poster5, { loader as poster5Loader } from "../Posters/Poster5/Poster5";
import Poster6, { loader as poster6Loader } from "../Posters/Poster6/Poster6";
import Poster7, { loader as poster7Loader } from "../Posters/Poster7/Poster7";
import Poster8, { loader as poster8Loader } from "../Posters/Poster8/Poster8";
import Poster9, { loader as poster9Loader } from "../Posters/Poster9/Poster9";
import Poster10, { loader as poster10Loader } from "../Posters/Poster10/Poster10";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<PosterPage />} loader={posterPageLoader}>
          <Route path = "poster1" element={<Poster1 />} loader={poster1Loader} />
          <Route path = "poster2" element={<Poster2 />} loader={poster2Loader} />
          <Route path = "poster3" element = {<Poster3 />} loader = {poster3Loader}/>
          <Route path = "poster4" element = {<Poster4 />} loader = {poster4Loader}/>
          <Route index element = {<Poster5 />} loader = {poster5Loader}/>
          <Route path = "poster6" element = {<Poster6 />} loader = {poster6Loader}/>
          <Route path = "poster7" element = {<Poster7 />} loader = {poster7Loader}/>
          <Route path = "poster8" element = {<Poster8 />} loader = {poster8Loader}/>
          <Route path = "poster9" element = {<Poster9 />} loader = {poster9Loader}/>
          <Route path = "poster10" element = {<Poster10 />} loader = {poster10Loader}/>
        </Route>
        <Route element={<Login />} path="/login" />
        <Route element={<SignUp />} path="/signup" />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
