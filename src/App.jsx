import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Edit from "./Edit";
import Home from "./Home";
import Image from "./Image";
import New from "./New";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show/:id" element={<Image />} />
        <Route path="/:id/edit" element={<Edit />} />
        <Route path="/new" element={<New />} />
      </Routes>
    </Router>
    
  );
};

export default App;
