import { Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout"
import Home from "./SharedLayout/Home/Home"
import Movies from "./SharedLayout/Movies/Movies";
import { useState } from "react";

const App = () => {

  const [movieId, setMovieId] = useState("")

  // console.log(movieId)

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} >
          {/* <Route path={movieId} element={<MovieDetails />}/> */}
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
        