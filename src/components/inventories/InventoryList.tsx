import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { InventoryListDto } from "./Inventory.Interface";

export default function InventoryList({
  corporateUuid,
}: {
  corporateUuid: string;
}) {
  const token = localStorage.getItem("JWT");

  const [inventoryList, setInventoryList] = useState<InventoryListDto>();
  useEffect(() => {
    fetchInventoryList();
  }, []);

  async function fetchInventoryList() {
    try {
      const response = await fetch(
        `http://localhost:3000/inventory/${corporateUuid}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setInventoryList(data);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  }

  return (
    <>
      <section>
        <button>
          <NavLink to={`/inventory/${corporateUuid}/create`}>Create</NavLink>
        </button>
        <button onClick={fetchInventoryList}>Refresh</button>
      </section>
      <section>
        {!inventoryList ? (
          <></>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Manufacturer</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {inventoryList?.output.map((inventory) => (
                <tr key={inventory.uuid}>
                  <td>{inventory.name}</td>
                  <td>{inventory.manufacturer}</td>
                  <td>{inventory.price}</td>
                  <td>{inventory.quantity}</td>
                  <td>
                    <button>
                      <NavLink
                        to={`/inventory/${corporateUuid}/${inventory.uuid}`}
                      >
                        Details
                      </NavLink>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </>
  );
}
