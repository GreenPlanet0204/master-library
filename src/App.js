import { Routes, Route } from "react-router-dom";
import Master from "./pages/Master";
import "./App.scss";
import MyLibrary from "./pages/MyLibrary";
import Module from "./pages/Module";
import CustomModule from "./pages/CustomModule";
import Support from "./pages/Support";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Master />} />
      <Route path="/library" element={<MyLibrary />} />
      <Route path="/module" element={<Module />} />
      <Route path="/custom" element={<CustomModule />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
}

export default App;
