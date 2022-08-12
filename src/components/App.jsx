import { Routes, Route } from "react-router-dom";
import SharedLayout from "../pages/SharedLayout/SharedLayout";
import Home from "../pages/SharedLayout/Home/Home";
import Movies from "../pages/SharedLayout/Movies/Movies";
import MovieDetails from "./MovieDetails/MovieDetails"
import { useState } from "react";

const App = () => {

  const [movieId, setMovieId] = useState("")

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home movieId={id => setMovieId(id)}/>} />
        <Route path="movies" element={<Movies movieId={setMovieId} />} >
          <Route path={movieId} element={<MovieDetails />}/>
        </Route>
      </Route>  
    </Routes>  
    );
  };


export default App;


        // // 
        
        //   {/* <Route path=":movieId" element={<MovieDetails />}> */}
        //     {/* <Route index element={<Cast />} /> */}
        //     {/* <Route index element={<Reviews />} /> */}
        //   {/* </Route> */}
        