import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import NewsOverview from './views/NewsOverview';
import NewsDetails from './views/NewsDetails';
function App() {
  return (
    <div className="App">
    <h1>News app</h1>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<NewsOverview/>}></Route>
          <Route path = "/article/:id" element = {<NewsDetails/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
