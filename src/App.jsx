import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Home from "./home";
import Header from "./component/header";
import Footer from "./component/footer";

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
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
