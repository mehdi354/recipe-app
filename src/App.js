
import './App.css';
import Catagory from './components/Catagory';
import Pages from './pages/Pages';
import {
  BrowserRouter,
} from "react-router-dom";
function App() {


  return (
    
    <div className="App">
      <BrowserRouter>
      <Catagory />
      <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
