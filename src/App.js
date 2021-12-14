import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import { MoviesContextProvider } from "./context/MoviesContext";
function App() {
  return (
    <MoviesContextProvider>
      <Routes>
        <Route path="/browse" element={<Home />}>
          <Route path="series" element={<Home />} />
        </Route>
        <Route path="*" element={<Navigate to="/browse" />} />
      </Routes>
    </MoviesContextProvider>
  );
}

export default App;
