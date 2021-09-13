import NavItem from "./components/NavItem";
import "./App.css";
import Logo from "./components/Logo";

function App() {
  const navmenu = [
    "home",
    "features",
    "about",
    "product",
    "testimonial",
    "contact",
  ];
  return (
    <div className="App">
      <header className="header">
        <div className="nav-bar">
          <Logo />
          <NavItem navItems={navmenu} />
        </div>
      </header>
      <div className="hero-area">
        <div className="hero-container">
          <div className="hero-text">
            <h1>Leather Pan Handle Cover for Cast Iron Skillets</h1>
            <h3>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              placeat eaque saepe repudiandae quia voluptates.
            </h3>
            <div className="primary-btn">
              <button>Buy Products</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://i.postimg.cc/MH0TnxNv/no-background.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
