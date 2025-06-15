import { NavLink } from "react-router-dom";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";

function MainNav() {
  return (
    <nav>
      <ul className="flex flex-col gap-3">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-1.2 text-grey-600 text-large font-medium px-2.4 py-1.2 transition-all duration-300 rounded-small hover:text-grey-800 hover:bg-grey-50 ${
                isActive ? "text-grey-800 bg-grey-50" : ""
              }`
            }
          >
            <HiOutlineHome className="w-6 h-6 text-grey-400 transition-all duration-300 group-hover:text-brand-600" />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bookings"
            className={({ isActive }) =>
              `flex items-center gap-1.2 text-grey-600 text-large font-medium px-2.4 py-1.2 transition-all duration-300 rounded-small hover:text-grey-800 hover:bg-grey-50 ${
                isActive ? "text-grey-800 bg-grey-50" : ""
              }`
            }
          >
            <HiOutlineCalendarDays className="w-6 h-6 text-grey-400 transition-all duration-300 group-hover:text-brand-600" />
            <span>Bookings</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cabins"
            className={({ isActive }) =>
              `flex items-center gap-1.2 text-grey-600 text-large font-medium px-2.4 py-1.2 transition-all duration-300 rounded-small hover:text-grey-800 hover:bg-grey-50 ${
                isActive ? "text-grey-800 bg-grey-50" : ""
              }`
            }
          >
            <HiOutlineHomeModern className="w-2.4 h-2.4 text-grey-400 transition-all duration-300 group-hover:text-brand-600" />
            <span>Cabins</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `flex items-center gap-1.2 text-grey-600 text-large font-medium px-2.4 py-1.2 transition-all duration-300 rounded-small hover:text-grey-800 hover:bg-grey-50 ${
                isActive ? "text-grey-800 bg-grey-50" : ""
              }`
            }
          >
            <HiOutlineUsers className="w-2.4 h-2.4 text-grey-400 transition-all duration-300 group-hover:text-brand-600" />
            <span>Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center gap-1.2 text-grey-600 text-large font-medium px-2.4 py-1.2 transition-all duration-300 rounded-small hover:text-grey-800 hover:bg-grey-50 ${
                isActive ? "text-grey-800 bg-grey-50" : ""
              }`
            }
          >
            <HiOutlineCog6Tooth className="w-2.4 h-2.4 text-grey-400 transition-all duration-300 group-hover:text-brand-600" />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
