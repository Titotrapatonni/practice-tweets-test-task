import { useState } from "react";
import { fetchUsers } from "../../fetchUsers";
import { useEffect } from "react";
import { Card } from "../Card/Card";

export const CardList = ({ filter }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Card profile={user} />
        </li>
      ))}
    </ul>
  );
};
