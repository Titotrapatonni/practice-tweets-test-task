import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Tweets = lazy(() => import("./pages/Tweets"));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="*" element={<Navigate to={<Home />} />} />
        </Route>
      </Routes>
    </>
  );
};
