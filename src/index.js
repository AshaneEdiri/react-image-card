import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Imagecard from "./pages/ImageCardTest";
import Nextpage from "./pages/Nextpage";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact={true} element={<App />} />
      <Route path="/imagecard" element={<Imagecard />} />
      <Route path="/nextpage" element={<Nextpage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
