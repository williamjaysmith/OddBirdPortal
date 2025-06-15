import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="grid grid-cols-[26rem_1fr] grid-rows-[50px_1fr] h-screen w-screen">
      <Header />
      <Sidebar />
      <main className="bg-grey-50 px-12 py-16 overflow-auto">
        <div className="max-w-[120rem] mx-auto flex flex-col gap-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
