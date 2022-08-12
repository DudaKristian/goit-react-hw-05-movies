import { Routes, Route } from "react-router-dom";
import SharedLayout from "../pages/SharedLayout/SharedLayout";
import Home from "../pages/SharedLayout/Home/Home";
import Movies from "../pages/SharedLayout/Movies/Movies";
import MovieDetails from "./MovieDetails/MovieDetails"

const App = () => {



  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}/>
      </Route>  
    </Routes>  
    );
  };


export default App;


        // // 
        
        //   
        //     {/* <Route index element={<Cast />} /> */}
        //     {/* <Route index element={<Reviews />} /> */}
        //   {/* </Route> */}
        