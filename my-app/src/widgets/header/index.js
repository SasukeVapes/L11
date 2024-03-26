import { NavbarItems } from './consts/navbarListItem';

export const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-collapse justify-content-between" id="navbarNav">
          <a className="navbar-brand" href="/home">
            <img alt="" src="/innowise_logo.svg" width="150" className="d-inline-block align-top" />{' '}
            Printing system
          </a>
          <ul className="navbar-nav">
            {NavbarItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <a className="nav-link" href={item.route}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/adminpage">
                Administration
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signin">
                Sign In
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signup">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
