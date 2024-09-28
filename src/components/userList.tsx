import React from "react";
import { User } from "../model/interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const UserList: React.FC<{ users: User[] }> = ({ users }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.login} className="col-md-4">
              <div className="card mb-4">
                <img
                  src={user.avatar_url}
                  className="card-img-top"
                  alt={user.login}
                />
                <div className="card-body">
                  <h5 className="card-title">{user.login}</h5>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-info"
                    style={{ color: "white" }}
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div
            className="card"
            style={{ fontSize: 300, width: 250, margin: "auto" }}
          >
            <FontAwesomeIcon icon={faGithub} />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;
