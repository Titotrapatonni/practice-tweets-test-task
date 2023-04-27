import { useEffect, useState } from "react";
import { BackBtn } from "../components/BackBtn/BackBtn";
import { CardList } from "../components/CardList/CardList";
import { Filter } from "../components/Filter/Filter";

export default function Tweets() {
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    document.title = "Tweets";
  }, []);
  return (
    <div>
      <BackBtn />
      <Filter setFilter={setFilter} />
      <CardList filter={filter} />
    </div>
  );
}
