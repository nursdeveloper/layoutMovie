import './App.scss';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Popular from "./components/Popular/Popular";
import Header from "./components/Header/Header";
import TopRated from "./components/TopRated/TopRated";
import DetailPages from './components/DetailPages/Detail'
import Detail from "./components/DetailPages/Detail";
import DetailActors from "./components/Actors/ActorDetail/DetailActors";
import {Search} from "@mui/icons-material";
function App() {
  return (
    <div className="App">
        <Header/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/popular'} element={<Popular/>}/>
          <Route path={'/topRated'} element={<TopRated/>}/>
          <Route path={'/movie-detail/:movieId'} element={<Detail/>}/>
          <Route path={'/actors-detail/:actorsId'} element={<DetailActors/>}/>
          <Route path={'/movie-search/:movieName'} element={<Search/>}/>
      </Routes>
    </div>
  );
}

export default App;
