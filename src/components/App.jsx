import { Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout"
import Home from "./SharedLayout/Home/Home"
import Movies from "./SharedLayout/Movies/Movies";

const App = () => {

  return (

    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} >
        
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
        