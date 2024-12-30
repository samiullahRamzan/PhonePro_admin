import { NavLink, Outlet } from "react-router-dom";
import { BiSolidUserAccount } from "react-icons/bi";
const Users = () => {
  return (
    <div>
      <h2>User/Shop</h2>
      <nav>
        <NavLink to="regular-user" className="item">
          <BiSolidUserAccount className="icon" />
          Regular User
        </NavLink>
        <NavLink to="shop" className="item">
          <BiSolidUserAccount className="icon" />
          Shop
        </NavLink>
        <Outlet />
      </nav>
    </div>
  );
};

export default Users;
