import "./App.css";
import Footer from "./components/layouts/footer";
import Header from "./components/layouts/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import Routers from "./routers/routers";
function App() {
  return (
    <Router>
      <div className="App">
        <HelmetProvider>
          <Header />
          <ToastContainer theme="dark" position="top-right" />
          <div className="container container-fluid">
            <Routers />
          </div>
          <Footer />
        </HelmetProvider>
      </div>
    </Router>
  );
}

export default App;
