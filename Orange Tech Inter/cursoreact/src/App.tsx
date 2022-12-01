import Home from "./pages/home";
import Login from "./pages/login";
import Feed from "./pages/feed";

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Teste from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/feed" element={<Feed />}/>
          {/* <Route path="/teste" element={<Teste />}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
