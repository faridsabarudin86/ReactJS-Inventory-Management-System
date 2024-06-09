import InventoryCreate from "../../components/inventories/InventoryCreate";
import { jwtDecode } from "jwt-decode";
import { JWTDto } from "./InventoryPage.Interface";

export default function InventoryCreatePage() {
  const token = localStorage.getItem("JWT");
  const decoded: JWTDto = jwtDecode(token!);

  return (
    <>
      <InventoryCreate corporateUuid={`${decoded.corporateUuid}`} />
    </>
  );
}
