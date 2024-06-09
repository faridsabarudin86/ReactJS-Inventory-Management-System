import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CorporateListDto } from "./Corporate.Interface";

export default function CorporateList({
  corporateUuid,
}: {
  corporateUuid: string;
}) {
  const token = localStorage.getItem("JWT");

  const [corporateList, setCorporateList] = useState<CorporateListDto>();
  useEffect(() => {
    fetchCorporateList();
  }, []);

  async function fetchCorporateList() {
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
      const data = await response.json();
      setCorporateList(data);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  }

  return (
    <>
      <section>
        <button>
          <NavLink to="/corporate/create">Create</NavLink>
        </button>
        <button onClick={fetchCorporateList}>Refresh</button>
      </section>
      <section>
        {!corporateList ? (
          <></>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr key={corporateList?.output.uuid}>
                <td>{corporateList?.output.name}</td>
                <td>{corporateList?.output.location}</td>
                <td>
                  <button>
                    <NavLink
                      to={`/corporate/${corporateUuid}/${corporateUuid}`}
                    >
                      Details
                    </NavLink>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </section>
    </>
  );
}
