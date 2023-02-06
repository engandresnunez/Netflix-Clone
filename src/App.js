import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Main,
  Movie,
  Navbar,
  Row,
  SavedShows,
} from "./components/ComponentImports";
import { Account, Home, Login, SignUp } from "./pages/PagesImports";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
