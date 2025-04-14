import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Home from "./home";
import Header from "./component/header";
import Footer from "./component/footer";
import About from "./about";
import Service from "./service";
import Portfolio from "./portfolio";
import Case from "./case";
import Erp from "./erp";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/case" element={<Case />} />
          <Route path="ERP" element={<Erp />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
