import { NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <NavLink exact className="nav-link " 
                  activeClassName="active"
                  to="/admin"
                  >
                    <span data-feather="home" />
                    Dashboard
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink 
                  className="nav-link" 
                  to="/admin/product"
                  activeClassName="active"
                  >
                    <span data-feather="shopping-cart" />
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink 
                  className="nav-link" 
                  activeClassName="active"
                  to="/about">
                    <span data-feather="users" />
                    Category
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink 
                  className="nav-link" 
                  activeClassName=""
                  to="/">
                    <span data-feather="users" />
                    Home
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>

  );
}
