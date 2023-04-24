import Select from "react-select";

const options = [
  { value: "all", label: "All" },
  { value: "follow", label: "Follow" },
  { value: "followings", label: "Followings" },
];

export const Filter = () => <Select options={options} />;
