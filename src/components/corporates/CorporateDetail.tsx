import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { CorporateDetailDto, editCorporateDto } from "./Corporate.Interface";

export default function CorporateDetail() {
  const token = localStorage.getItem("JWT");
  const { corporateUuid } = useParams();

  const [corporateName, setCorporateName] = useState<string>("");
  const [corporateLocation, setCorporateLocation] = useState<string>("");
  useEffect(() => {
    fetchCorporateDetail();
  }, []);

  async function fetchCorporateDetail() {
    try {
      const response = await fetch(
        `http://localhost:3000/corporate/${corporateUuid}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data: CorporateDetailDto = await response.json();

      setCorporateName(data.output.name);
      setCorporateLocation(data.output.location);
    } catch (error) {
      console.log("Inventory detail cannot be found", error);
    }
  }

  const bodyPayload: editCorporateDto = {
    name: corporateName,
    location: corporateLocation,
  };

  async function editCorporateDetail() {
    try {
      await fetch(`http://localhost:3000/corporate/${corporateUuid}`, {
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
          <button onClick={editCorporateDetail}>
            <NavLink to={`/corporate/${corporateUuid}`}>Edit</NavLink>
          </button>
        </div>
      </div>
    </>
  );
}
