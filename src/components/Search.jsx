import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Lists from "./Lists";

const Search = () => {
  const [value, setvalue] = useState("");
  const [data, setData] = useState(null);
  const [searchdata, setSearchData] = useState(null);

  //simple logic func

  const handleChange = (e) => {
    const val = e.target.value;
    setvalue(val);
    setSearchData(
      data.filter(({ name }) => name.toLowerCase().includes(val.toLowerCase()))
    );
    val === "" ? setSearchData(null) : null;
  };

  // Data fetching function

  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((json) => {
          setData(json);
          s;
        });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  // jsx return start here

  return (
    <div>
      <div
        className="
        flex
        sm:min-w-[400px]
        min-w-[350px]
        h-[60px]
        bg-slate-400
        text-black
        rounded-xl
        items-center
        p-5
        
        "
      >
        <input
          className="
            bg-transparent
            border-none
            focus:outline-none
            px-3
            text-xl 
            w-full
            "
          type="text"
          onChange={handleChange}
          value={value}
          placeholder="Search Here..."
        />
        <FaSearch className="text-xl text-gray-800" />
      </div>
      <Lists data={searchdata} />
    </div>
  );
};

export default Search;
