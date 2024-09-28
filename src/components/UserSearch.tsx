import React, { useState } from "react";

const UserSearch: React.FC<{ onSearch: (username: string) => void }> = ({
  onSearch,
}) => {
  const [username, setUsername] = useState("");

  const handleSearch = () => {
    if (username) {
      onSearch(username);
    }
  };

  return (
    <div className="container mt-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="btn btn-dark" onClick={handleSearch}>
          <i className="fa fa-search"></i> Search
        </button>
      </div>
    </div>
  );
};

export default UserSearch;
