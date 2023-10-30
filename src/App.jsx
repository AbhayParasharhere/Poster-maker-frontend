import React from "react";
import SignUp from "./Sign-up-page/sign-up";
import Login from "./Login-page/Login";
import PosterPage, {
  loader as posterPageLoader,
} from "./PosterSelectorPage/PosterPage";
import Poster1, { loader as poster1Loader } from "../Posters/Poster-1/Poster1";
import Poster2, { loader as poster2Loader } from "../Posters/Poster-2/Poster2";
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
        </Route>
        <Route element={<Login />} path="/login" />
        <Route element={<SignUp />} path="/signup" />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
