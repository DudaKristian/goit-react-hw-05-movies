import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from 'react';

import SharedLayout from "./SharedLayout/SharedLayout";
import Loader from "./Loader/Loader";

const Home = lazy(() => import("../pages/Home/Home"));
const Movies = lazy(() => import("../pages/Movies/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const Cast = lazy(() => import("../pages/Cast/Cast"));
const Reviews = lazy(() => import("../pages/Reviews/Reviews"));

const App = () => {
    
  return (
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />} >
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

