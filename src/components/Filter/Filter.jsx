import Select from "react-select";

const options = [
  { value: "all", label: "All" },
  { value: "follow", label: "Follow" },
  { value: "followings", label: "Followings" },
];
export const Filter = ({ setFilter }) => {
  const handleChange = (e) => {
    setFilter(e.value);
  };

  return <Select options={options} onChange={handleChange} />;
};
