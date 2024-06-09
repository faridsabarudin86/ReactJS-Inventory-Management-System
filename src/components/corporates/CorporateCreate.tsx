import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { addCorporateDto } from "./Corporate.Interface";

export default function CorporateCreate() {
  const token = localStorage.getItem("JWT");
  const { corporateUuid } = useParams();

  const [corporateName, setCorporateName] = useState<string>("");
  const [corporateLocation, setCorporateLocation] = useState<string>("");

  const bodyPayload: addCorporateDto = {
    name: corporateName,
    location: corporateLocation,
  };

  async function createCorporate() {
    try {
      await fetch(`http://localhost:3000/corporate/`, {
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
        <h3>Name</h3>
        <input
          type="text"
          name="Name"
          value={corporateName}
          onChange={(event) => setCorporateName(event.target.value)}
        ></input>
        <br />
        <h3>Location</h3>
        <input
          type="text"
          name="Location"
          value={corporateLocation}
          onChange={(event) => setCorporateLocation(event.target.value)}
        ></input>
        <br />
        <div>
          <button onClick={createCorporate}>
            <NavLink to={`/corporate/${corporateUuid}`}>Edit</NavLink>
          </button>
        </div>
      </div>
    </>
  );
}
