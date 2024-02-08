import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
    <RecoilRoot>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
    </>
  );
}

export default App;
