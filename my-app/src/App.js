import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tweets from "./pages/Tweets";

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/tweets">Tweets</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
