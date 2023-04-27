import { Route, Routes, Navigate } from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle";
import Layout from "./components/Layout";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Tweets = lazy(() => import("./pages/Tweets"));

export const App = () => {
  return (
    <div>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="*" element={<Navigate to={<Home />} />} />
        </Route>
      </Routes>
    </div>
  );
};
