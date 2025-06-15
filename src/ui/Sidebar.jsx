import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";

function Sidebar() {
  return (
    <aside className="bg-grey-0 p-4 border-b border-grey-100 row-auto gap-8">
      <MainNav />
      <Uploader />
    </aside>
  );
}

export default Sidebar;
