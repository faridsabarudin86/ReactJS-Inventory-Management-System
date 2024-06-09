import { useState } from "react";
import { NavLink } from "react-router-dom";
import { addInventoryDto } from "./Inventory.Interface";

export default function InventoryCreate({
  corporateUuid,
}: {
  corporateUuid: string;
}) {
  const token = localStorage.getItem("JWT");

  const [inventoryName, setInventoryName] = useState<string>("");
  const [inventoryManufacturer, setInventoryManufacturer] =
    useState<string>("");
  const [inventoryPrice, setInventoryPrice] = useState<number>(0);
  const [inventoryQuantity, setInventoryQuantity] = useState<number>(0);

  const bodyPayload: addInventoryDto = {
    name: inventoryName,
    manufacturer: inventoryManufacturer,
    price: inventoryPrice,
    quantity: inventoryQuantity,
  };

  async function createCorporate() {
    try {
      await fetch(`http://localhost:3000/inventory/${corporateUuid}`, {
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
          value={inventoryName}
          onChange={(event) => setInventoryName(event.target.value)}
        ></input>
        <br />
        <h3>Manufacturer </h3>
        <input
          type="text"
          name="Manufacturer"
          value={inventoryManufacturer}
          onChange={(event) => setInventoryManufacturer(event.target.value)}
        ></input>
        <br />
        <h3>Price</h3>
        <input
          type="text"
          name="Price"
          value={inventoryPrice}
          onChange={(event) => setInventoryPrice(Number(event.target.value))}
        ></input>
        <br />
        <h3>Quantity</h3>
        <input
          type="text"
          name="Quantity"
          value={inventoryQuantity}
          onChange={(event) => setInventoryQuantity(Number(event.target.value))}
        ></input>
        <br />
        <div>
          <button onClick={createCorporate}>
            <NavLink to={`/inventory/${corporateUuid}`}>Edit</NavLink>
          </button>
        </div>
      </div>
    </>
  );
}
