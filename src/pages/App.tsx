import { Route, Routes } from "react-router-dom";
import HomePage from "./Home";
import AboutPage from "./About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
