import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Home from "./pages/Home";
import SearchFilter from "./pages/SearchFilter/SearchFilter";
import SimpleCounter from "./pages/SimpleCounter/SimpleCounter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} >
          <Route index element={<Home />} />
          <Route path="search-filter" element={<SearchFilter />} />
          <Route path="simple-counter" element={<SimpleCounter />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
