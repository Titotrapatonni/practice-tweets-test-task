import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Navigation } from "./Navigation/Navigation";
import { GlobalStyle } from "./GlobalStyle";

export default function Layout() {
  return (
    <>
      <Navigation />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <GlobalStyle />
    </>
  );
}
