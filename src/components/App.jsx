import { Routes, Route } from "react-router-dom";
import { Suspense } from 'react';

import SharedLayout from "./SharedLayout/SharedLayout";
import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import MovieDetails from "../pages/MovieDetails/MovieDetails"
import NotFound from "../pages/NotFound/NotFound"
import Cast from "../pages/Cast/Cast"
import Reviews from "../pages/Reviews/Reviews";
import Loader from "./Loader/Loader";
import { useState } from "react";

const App = () => {
  const [query, setQuery] = useState("");

  const setState = prop => {
    if (!prop) {
      return
    }
    setQuery(prop)
  }

  setState()
  
  return (
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
            <Route path="movies" element={<Movies setProp={setState} />} />
          <Route path="movies/:movieId" element={<MovieDetails query={query} />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
            <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>  
    </Suspense>
    );
  };


export default App;

