import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import React, { Suspense } from "react";
import "./App.css";
import Home from "./views/home/home";

function App() {
  return (
    <Suspense fallback={null}>
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
