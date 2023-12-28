import React from "react";
import SignUp from "./Sign-up-page/sign-up";
import Login from "./Login-page/Login";
import PosterPage, {
  loader as posterPageLoader,
} from "./PosterSelectorPage/PosterPage";
import Poster1, { loader as poster1Loader } from "../Posters/Poster-1/Poster1";
import Poster2, { loader as poster2Loader } from "../Posters/Poster-2/Poster2";
import Poster3, { loader as poster3Loader } from "../Posters/Poster-3/Poster3";
import Poster4, { loader as poster4Loader } from "../Posters/Poster-4/Poster4";
import Poster5, { loader as poster5Loader } from "../Posters/Poster-5/Poster5";
import Poster6, { loader as poster6Loader } from "../Posters/Poster-6/Poster6";
import Poster7, { loader as poster7Loader } from "../Posters/Poster-7/Poster7";
import Poster8, { loader as poster8Loader } from "../Posters/Poster-8/Poster8";
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
          <Route index element={<Poster1 />} loader={poster1Loader} />
          <Route path="poster-2" element={<Poster2 />} loader={poster2Loader} />
          <Route path = "poster-3" element = {<Poster3 />} loader = {poster3Loader}/>
          <Route path = "poster-4" element = {<Poster4 />} loader = {poster4Loader}/>
          <Route path = "poster-5" element = {<Poster5 />} loader = {poster5Loader}/>
          <Route path = "poster-6" element = {<Poster6 />} loader = {poster6Loader}/>
          <Route path = "poster-7" element = {<Poster7 />} loader = {poster7Loader}/>
          <Route path = "poster-8" element = {<Poster8 />} loader = {poster8Loader}/>
        </Route>
        <Route element={<Login />} path="/login" />
        <Route element={<SignUp />} path="/signup" />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
