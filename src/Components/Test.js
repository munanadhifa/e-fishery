import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch(
      "https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/option_size"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <label
        htmlFor="location"
        className="block text-sm font-medium text-gray-700"
      >
        Size
      </label>
      <select
        id="location"
        name="location"
        className="mt-1 block w-full rounded-md border py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        defaultValue="120"
      >
        {users.map((user) => (
          <option key={user.id}>{user.size}</option>
        ))}
      </select>
    </div>
  );
};

export default App;
