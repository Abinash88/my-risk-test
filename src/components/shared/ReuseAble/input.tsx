import { Search } from "lucide-react";

export type InputTypes = {
  value: string;
  onChange: (data: string) => void;
};

const CustomSearch = ({ onChange, value }: InputTypes) => {
  
  return (
    <div className=" relative w-full">
      <Search className="absolute text-gray-600 size-5 top-2.5 left-2" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className=" mr-2 border w-full rounded-lg py-2 pl-8 focus:outline-none pr-1"
        placeholder="Search"
      />
    </div>
  );
};

export default CustomSearch;
