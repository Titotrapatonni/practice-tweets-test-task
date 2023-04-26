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
        <NavButton to="practice-tweets-test-task//">Home</NavButton>
        <NavButton to="practice-tweets-test-task//tweets">Tweets</NavButton>
      </Nav>
      <Routes>
        <Route path="practice-tweets-test-task//" element={<Home />} />
        <Route path="practice-tweets-test-task//tweets" element={<Tweets />} />
        <Route path="practice-tweets-test-task//*" element={<Home />} />
      </Routes>
    </div>
  );
};
