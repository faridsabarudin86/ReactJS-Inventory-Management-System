import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { InventoryDetailDto, editInventoryDto } from "./Inventory.Interface";

export default function InventoryDetail({
  corporateUuid,
}: {
  corporateUuid: string;
}) {
  const token = localStorage.getItem("JWT");
  const { inventoryUuid } = useParams();

  const [inventoryName, setInventoryName] = useState<string>("");
  const [inventoryManufacturer, setInventoryManufacturer] =
    useState<string>("");
  const [inventoryPrice, setInventoryPrice] = useState<number>(0);
  const [inventoryQuantity, setInventoryQuantity] = useState<number>(0);
  useEffect(() => {
    fetchInventoryDetail();
  }, []);

  async function fetchInventoryDetail() {
    try {
      const response = await fetch(
        `http://localhost:3000/inventory/${corporateUuid}/${inventoryUuid}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data: InventoryDetailDto = await response.json();

      setInventoryName(data.output.name);
      setInventoryManufacturer(data.output.manufacturer);
      setInventoryPrice(data.output.price);
      setInventoryQuantity(data.output.quantity);
    } catch (error) {
      console.log("Inventory detail cannot be found", error);
    }
  }

  const bodyPayload: editInventoryDto = {
    name: inventoryName,
    manufacturer: inventoryManufacturer,
    price: inventoryPrice,
    quantity: inventoryQuantity,
  };

  async function editInventoryDetail() {
    try {
      await fetch(
        `http://localhost:3000/inventory/${corporateUuid}/${inventoryUuid}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(bodyPayload),
        }
      );
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
          <button onClick={editInventoryDetail}>
            <NavLink to={`/inventory/${corporateUuid}`}>Edit</NavLink>
          </button>
        </div>
      </div>
    </>
  );
}
