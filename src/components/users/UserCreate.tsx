import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { addUsersDto } from "./User.Interface";

export default function UserCreate() {
  const token = localStorage.getItem("JWT");
  const { corporateUuid } = useParams();

  const [emailAddress, setEmailAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");

  const bodyPayload: addUsersDto = {
    emailAddress: emailAddress,
    password: password,
    fullName: fullName,
  };

  async function createUser() {
    try {
      await fetch(`http://localhost:3000/users/${corporateUuid}`, {
        method: "POST",
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
          <button onClick={createUser}>
            <NavLink to={`/users/${corporateUuid}`}>Edit</NavLink>
          </button>
        </div>
      </div>
    </>
  );
}
