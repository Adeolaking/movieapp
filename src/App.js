import { useState } from "react";
import { useEffect } from "react";


import Header from "./component/Header";
import { Nav , Main} from "./component/styles";

import MovieList from "./component/MovieList";
import SearchBox from "./component/Search";
function App() {
 const [movies, setMovies] = useState([]);
 const [searchValue, setsearchValue] = useState(['hello']);

const getMovieRequest = async ()=>{
  const url =`https://www.omdbapi.com/?s=${searchValue}&apikey=9a324f34`;
  const response = await fetch(url);
  const responseJson = await response.json();
  // console.log(responseJson.Search)
  // console.log("helo")
  if (responseJson.Search) setMovies(responseJson.Search);
}

useEffect(()=>{ getMovieRequest()}, [searchValue])

  return (
    <>
      <Nav>
          <div className="logo"> MyTestApp</div>
      </Nav>
      <Header>
        <h1>
          Watch <br/> somthing incredible
        </h1>
      </Header>
      <Main>
          <div className="input-cont">
            <span>Search</span>
            <SearchBox  searchValue={searchValue}  setsearchValue={setsearchValue}/>
          </div>
          <h1>Movie</h1>
        <MovieList movies= {movies}/>

      </Main>
    </>
 
  );
}

export default App;
