import { Outlet } from "react-router-dom";
import { Header } from "../components";

function MainLayout() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
