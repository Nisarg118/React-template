import { MainLayout } from "./layouts";
import { Homepage, Aboutpage } from "./pages";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="about" element={<Aboutpage />} />
      </Route>
    </Routes>
  );
}

export default App;
