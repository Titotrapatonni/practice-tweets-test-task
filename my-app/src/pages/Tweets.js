import { BackBtn } from "../components/BackBtn/BackBtn";
import { CardList } from "../components/CardList/CardList";
import { Filter } from "../components/Filter/Filter";

export default function Tweets() {
  return (
    <div>
      <BackBtn />
      <Filter />
      <CardList />
    </div>
  );
}
