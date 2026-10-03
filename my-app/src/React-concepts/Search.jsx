import React, { useState } from "react";

function Search() {
  // const users = ["Dharmendra", "Rahul", "Aman", "Priya", "Rohit"]; // searching using array

  // searching using the array of object
  const users = [
    { id: 1, name: "Dharmendra", email: "dharmendra@gmail.com" },
    { id: 2, name: "Rahul", email: "rahul@gmail.com" },
    { id: 3, name: "Aman", email: "aman@gmail.com" },
    { id: 4, name: "Priya", email: "priya@gmail.com" },
  ];

  const [search, setSearch] = useState(null);
  const Result = users.filter((user) =>
    // user.toLowerCase().startsWith(search.toLowerCase());//prefix search
    // user.toLowerCase().includes(search.toLowerCase()); // partial search it search like character is containing or not
    // user.toLowerCase() === search.toLowerCase(), // the user must type the entire name.

    // user.name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase())
    user.id === Number(search)
  );
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {Result.map((user, index) => (
        <>
          <p key={index}>{user.id}</p>
          <p>{user.email}</p>
          <p>{user.name}</p>
        </>
      ))}
    </div>
  );
}
export default Search;
