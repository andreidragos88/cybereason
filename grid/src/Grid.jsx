import React, { useEffect, useState } from "react";

const Grid = () => {
  const [gridData, setGridData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setGridData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="grid-container">
      <div className="grid-item header">
        <div>ID</div>
        <div>Name</div>
        <div>Username</div>
      </div>

      {gridData.map((user) => (
        <div key={user.id} className="grid-item">
          <div>{user.id}</div>
          <div>{user.name}</div>
          <div>{user.username}</div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
