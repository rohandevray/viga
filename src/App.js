import React from "react";
import GlobalStyle from "./components/GlobalStyles";
// importing components
import Spach from "./components/spash";
import Login from "./components/login";
import Onboard1 from "./components/onboard1";
import Onboard2 from "./components/onboard2";
import Onboard3 from "./components/onboard3";
import Onboard4 from "./components/onboard4";
import Blank from "./components/blank";
import Home from "./components/home";
import Check from "./components/check";
import Settings from "./components/settings";
import Exam from "./components/exam";
import Warning from "./components/warning";

//routes and links
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Spach />} />
          <Route path="login/*" element={<Login />} />
          <Route path="onboard1/*" element={<Onboard1 />} />
          <Route path="onboard2/*" element={<Onboard2 />} />
          <Route path="onboard3/*" element={<Onboard3 />} />
          <Route path="onboard4/*" element={<Onboard4 />} />
          <Route path="blank/*" element={<Blank />} />
          <Route path="home/*" element={<Home />} />
          <Route path="check/*" element={<Check />} />
          <Route path="settings/*" element={<Settings />} />
          <Route path="exam/*" element={<Exam />} />
          <Route path="warning/*" element={<Warning />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
