import { Link } from "react-router-dom";
import "./header.styles.scss";
import CartIcon from "../cart-icon/CartIcon";
import { use } from "react";
import { UserContext } from "../../context/user-context/UserContext";
import { firebaseAuth } from "../../firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const { user } = use(UserContext);
  return (
    <nav className="nav-menu container">
      <div className="logo">
        <Link to="/">NOMAD</Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        {user && <li onClick={() => signOut(firebaseAuth)}>Sign Out</li>}
        {!user && (
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
        )}
      </ul>
      <CartIcon />
    </nav>
  );
};

export default Header;
