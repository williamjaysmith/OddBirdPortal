import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import Logo from "./Logo";

function Header() {
  return (
    <header className="col-span-2 bg-grey-0 px-4 py-3 border-b border-grey-100 flex items-center justify-between">
      {/* Left section */}
      <Logo />

      {/* Right section */}
      <div className="flex items-center gap-6">
        <UserAvatar />
        <HeaderMenu />
      </div>
    </header>
  );
}

export default Header;
