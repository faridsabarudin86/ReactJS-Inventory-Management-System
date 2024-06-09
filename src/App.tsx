import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import InventoryListPage from "./pages/inventories/InventoryListPage";
import InventoryDetailPage from "./pages/inventories/InventoryDetailPage";
import InventoryCreatePage from "./pages/inventories/InventoryCreatePage";
import UserListPage from "./pages/users/UserListPage";
import UserDetailPage from "./pages/users/UserDetailPage";
import UserCreatePage from "./pages/users/UserCreatePage";
import CorporateListPage from "./pages/corporates/CorporateListPage";
import CorporateDetailPage from "./pages/corporates/CorporateDetailPage";
import CorporateCreatePage from "./pages/corporates/CorporateCreatePage";
import LoginPage from "./pages/globals/LoginPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route
          path="/inventory/:corporateUuid"
          element={<InventoryListPage />}
        />
        <Route
          path="/inventory/:corporateUuid/:inventoryUuid"
          element={<InventoryDetailPage />}
        />
        <Route
          path="/inventory/:corporateUuid/create/"
          element={<InventoryCreatePage />}
        />
        <Route path="/users/:corporateUuid" element={<UserListPage />} />
        <Route
          path="/users/:corporateUuid/:userUuid"
          element={<UserDetailPage />}
        />
        <Route
          path="/users/:corporateUuid/create"
          element={<UserCreatePage />}
        />
        <Route
          path="/corporate/:corporateUuid"
          element={<CorporateListPage />}
        />
        <Route
          path="/corporate/:corporateUuid/:corporateUuid"
          element={<CorporateDetailPage />}
        />
        <Route path="/corporate/create" element={<CorporateCreatePage />} />
      </Route>
      <Route path="/auth/login" element={<LoginPage />} />
    </>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
