import { useState } from "react";

export default function LoginPage() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  async function loginHandler() {
    try {
      const response = await fetch(`http://localhost:3000/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailAddress: emailAddress,
          password: password,
        }),
      });
      const data = await response.json();

      if (!data.access_token) {
        console.log(
          "Login Failed, Please check if Email Address or Password and try again."
        );
      } else {
        localStorage.setItem("JWT", data.access_token);
      }
      console.log(data);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  }

  return (
    <>
      <div>
        <h1>Login</h1>
        <div>
          <input
            type="text"
            name="Email Address"
            onChange={(event) => setEmailAddress(event.target.value)}
            placeholder="Enter Email Address"
          ></input>
          <br />
          <input
            type="password"
            name="Password"
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter Password"
          ></input>
          <br />
          <button onClick={loginHandler}>Login</button>
        </div>
      </div>
    </>
  );
}
