import { Routes, Route } from "react-router-dom";
import { Suspense } from 'react';

import SharedLayout from "../pages/SharedLayout/SharedLayout";
import Home from "../pages/SharedLayout/Home/Home";
import Movies from "../pages/SharedLayout/Movies/Movies";
import MovieDetails from "./MovieDetails/MovieDetails"
import NotFound from "./NotFound/NotFound"
import Cast from "./Cast/Cast"
import Reviews from "./Reviews/Reviews";
import Loader from "./Loader/Loader";

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
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>  
    </Suspense>
    );
  };


export default App;


        // // 
        
        //   
        //     {/* <Route index element={<Cast />} /> */}
        //     {/* <Route index element={<Reviews />} /> */}
        //   {/* </Route> */}
        