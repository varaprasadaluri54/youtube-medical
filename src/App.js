import NavBar from "./components/Navbar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <section id="hero" className="d-flex align-items-center">
        <div className="container text-center position-relative">
          <h1>24/7 care is Availble</h1>
          <h2>Welcome everyone</h2>
          <a href="#" className="main-btn">
            Know us
          </a>
        </div>
      </section>
    </div>
  );
}
