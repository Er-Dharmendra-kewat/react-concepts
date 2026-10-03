import React,{useState} from "react";

function Search() {
  const [search, setSearch] = useState("");

  const users = ["Dharmendra", "Rahul", "Aman", "Priya", "Rohit"];

  const result = users.filter((user) =>
    user.toLowerCase().startsWith(search.toLowerCase())
  );
  return (
    <div>
      <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)}/>

      {result.map((user, index) => (
        <p key={index}>{user}</p>
      ))}
    </div>
  );
}

export default Search;