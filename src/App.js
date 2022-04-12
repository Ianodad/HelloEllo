// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import View from "./pages/View";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
    </>
  );
}

export default App;
