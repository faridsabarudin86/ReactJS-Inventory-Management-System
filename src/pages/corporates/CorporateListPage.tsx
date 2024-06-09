import CorporateList from "../../components/corporates/CorporateList";
import { jwtDecode } from "jwt-decode";
import { JWTDto } from "./CorporatePage.Interface";

export default function CorporateListPage() {
  const token = localStorage.getItem("JWT");
  const decoded: JWTDto = jwtDecode(token!);

  return (
    <>
      <CorporateList corporateUuid={`${decoded.corporateUuid}`} />
    </>
  );
}
