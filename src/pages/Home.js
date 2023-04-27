import { useEffect } from "react";
import { Container } from "./Home.styled";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <Container>
      <h1>Home Page</h1>
    </Container>
  );
}
