import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tweets from "./pages/Tweets";
import { GlobalStyle } from "./components/GlobalStyle";
import { Nav, NavButton } from "./App.styled";

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Nav>
        <NavButton to="/">Home</NavButton>
        <NavButton to="/tweets">Tweets</NavButton>
      </Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
