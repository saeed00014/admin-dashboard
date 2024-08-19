import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Home />
    </Router>
  );
}

export default App;
