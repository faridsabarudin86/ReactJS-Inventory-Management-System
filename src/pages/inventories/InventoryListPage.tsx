import InventoryList from "../../components/inventories/InventoryList";
import { jwtDecode } from "jwt-decode";
import { JWTDto } from "./InventoryPage.Interface";

export default function InventoryListPage() {
  const token = localStorage.getItem("JWT");
  const decoded: JWTDto = jwtDecode(token!);

  return (
    <>
      <InventoryList corporateUuid={`${decoded.corporateUuid}`} />
    </>
  );
}
