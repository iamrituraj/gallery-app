import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AfterPage from "./AfterPage";
import Edit from "./Edit";
import Home from "./Home";
import Image from "./Image";
import New from "./New";

const App = () => {
  return (
    <>
      {/* <AfterPage /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show/:id" element={<Image />} />
          <Route path="/:id/edit" element={<Edit />} />
          <Route path="/new" element={<New />} />
          <Route path="/delete" element={< AfterPage text = "deleted" />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
