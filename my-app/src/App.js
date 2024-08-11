import logo from './logo.svg';
import Header from './Header';
import Modeling from './Modeling';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Resume from "./Resume";
import NoPage from "./NoPage";



export default function App() {
  return (
    
    <div className="App">

    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="resume" element={<Resume />} />
        <Route path="*" element={<NoPage />} />
          
        </Routes>
      </div>
    </BrowserRouter>
      {/* <Modeling /> */}
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);