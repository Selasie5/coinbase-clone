import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import AppLayout from "./components/layout/AppLayout";
import Learn from "./pages/Learn";
import Explore from "./pages/Explore";

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/explore" element={<Explore />} />
      </Route>
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignIn" element={<SignIn />} />
    </Routes>
  );
};

export default App;
