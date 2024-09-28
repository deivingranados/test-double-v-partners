import React, { useState } from "react";
import UserSearch from "../components/UserSearch";
import UserList from "../components/userList";
import { getSearchUser } from "../services/service";
import { User } from "../model/interface";

const HomePage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async (username: string) => {
    const response = await getSearchUser(username);
    setUsers(response.items);
  };

  return (
    <div>
      <h3 className="modal-title" style={{ color: "white" }}>
        Meet GitHub users
      </h3>
      <UserSearch onSearch={fetchUsers} />
      <UserList users={users} />
    </div>
  );
};

export default HomePage;
