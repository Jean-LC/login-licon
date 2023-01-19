import { Routes, Route } from "react-router-dom";
import Login from "./views/login";
import Welcome from "./views/welcome";

function App() {

  return (
    <Routes>
      <Route path="*" element={<Login />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
}

export default App;
