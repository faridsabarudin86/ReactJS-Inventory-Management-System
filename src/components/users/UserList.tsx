import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserListDto } from "./User.Interface";

export default function UserList({ corporateUuid }: { corporateUuid: string }) {
  const token = localStorage.getItem("JWT");

  const [userList, setUserList] = useState<UserListDto>();
  useEffect(() => {
    fetchUserList();
  }, []);

  async function fetchUserList() {
    try {
      const response = await fetch(
        `http://localhost:3000/users/${corporateUuid}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setUserList(data);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  }

  return (
    <>
      <section>
        <button>
          <NavLink to={`/users/${corporateUuid}/create`}>Create</NavLink>
        </button>
        <button onClick={fetchUserList}>Refresh</button>
      </section>
      <section>
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {userList?.output.map((user) => (
              <tr key={user.uuid}>
                <td>{user.fullName}</td>
                <td>
                  <button>
                    <NavLink to={`/users/${corporateUuid}/${user.uuid}`}>
                      Details
                    </NavLink>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
