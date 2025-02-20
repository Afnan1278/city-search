import { useState } from "react";
import { Search } from "lucide-react";

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

export const SearchBox = ({ onSearch }: SearchBoxProps) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setValue(query);
    onSearch(query);
  };

  return (
    <div className="search-container">
      <div className="max-w-3xl mx-auto relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Search cities..."
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/80 border border-gray-200/50 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
          />
        </div>
      </div>
    </div>
  );
};