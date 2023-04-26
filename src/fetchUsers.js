export const fetchUsers = async () => {
  const data = await fetch(
    "https://64452ce5914c816083c7d6bd.mockapi.io/User"
  ).then((resp) => resp.json());
  return data;
};
