import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Role, UserDetailDto, editUserDto } from "./User.Interface";

export default function UserDetail() {
  const token = localStorage.getItem("JWT");
  const { corporateUuid, userUuid } = useParams();

  const [emailAddress, setEmailAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [roles, setRoles] = useState<Role[]>([]);
  const [fullName, setFullName] = useState<string>("");

  async function fetchUserDetail() {
    try {
      const response = await fetch(
        `http://localhost:3000/users/${corporateUuid}/${userUuid}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data: UserDetailDto = await response.json();

      setEmailAddress(data.output.emailAddress);
      setPassword(data.output.password);
      setRoles(data.output.roles);
      setFullName(data.output.fullName);
    } catch (error) {
      console.log("Inventory detail cannot be found", error);
    }
  }

  const bodyPayload: editUserDto = {
    emailAddress: emailAddress,
    password: password,
    roles: roles,
    fullName: fullName,
  };

  async function editUserDetail() {
    try {
      await fetch(`http://localhost:3000/users/${corporateUuid}/${userUuid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bodyPayload),
      });
    } catch (error) {
      console.log("Inventory detail cannot be found", error);
    }
  }

  useEffect(() => {
    fetchUserDetail();
  }, []);

  return (
    <>
      <h3>Details</h3>
      <div>
        <h3>Full Name</h3>
        <input
          type="text"
          name="Full Name"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        ></input>
        <br />
        <h3>Email Address</h3>
        <input
          type="text"
          name="Email Address"
          value={emailAddress}
          onChange={(event) => setEmailAddress(event.target.value)}
        ></input>
        <br />
        <h3>Password</h3>
        <input
          type="password"
          name="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <br />
        <div>
          <button onClick={editUserDetail}>
            <NavLink to={`/corporate/${corporateUuid}`}>Edit</NavLink>
          </button>
        </div>
      </div>
    </>
  );
}
