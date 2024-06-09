import InventoryDetail from "../../components/inventories/InventoryDetail";
import { jwtDecode } from "jwt-decode";
import { JWTDto } from "./InventoryPage.Interface";

export default function InventoryDetailPage() {
  const token = localStorage.getItem("JWT");
  const decoded: JWTDto = jwtDecode(token!);

  return (
    <>
      <InventoryDetail corporateUuid={`${decoded.corporateUuid}`} />
    </>
  );
}
