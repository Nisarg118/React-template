import { Route, Routes } from "react-router-dom";
import { Homepage, Aboutpage } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
      </Routes>
    </div>
  );
}

export default App;
