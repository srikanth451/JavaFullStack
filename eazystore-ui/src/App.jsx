import "./App.css";
import ClassHeader from "./assets/Components/ClassHeader";
import Footer from "./assets/Components/footer/Footer";
import Header from "./assets/Components/Header";
import Home from "./assets/Components/Home";
import PageTittle from "./assets/Components/PageTittle.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
export default App;
