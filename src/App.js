import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./views/login";
import Welcome from "./views/welcome";

function App() {
  const [user, setUser] = useState(null)

  return (
    <Routes>
      <Route path="*" element={<Login setUser={setUser} />} />
      <Route path="/welcome" element={<Welcome user={user} />} />
    </Routes>
  );
}

export default App;
